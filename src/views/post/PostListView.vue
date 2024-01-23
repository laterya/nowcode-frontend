<template>
  <div class="search">
    <a-input-search
      :style="{ width: '880px' }"
      v-model="searchParams.text"
      @search="onSearch"
      placeholder="输入搜索关键词"
      button-text="搜索"
      size="large"
      search-button
    />
    <MyDivider />
    <a-tabs v-model:active-key="activeKey" @change="onTabChange">
      <a-tab-pane key="postList" title="文章">
        <PostList :post-list="postList" />
      </a-tab-pane>
      <!--      <a-tab-pane key="pictureList" title="图片"> 图片列表</a-tab-pane>-->
    </a-tabs>
    <a-pagination
      style="position: absolute; bottom: 30px"
      :total="300"
      show-page-size
      :current="pageNum"
      :page-size="nowPageSize"
      @change="pageChange"
      @page-size-change="pageSizeChange"
      :page-size-options="pageSizeOptions"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from "vue";
import MyDivider from "@/components/MyDivider.vue";
import { useRoute, useRouter } from "vue-router";
import PostList from "@/components/PostList.vue";
import { PostControllerService } from "../../../generated";

const pageNum = ref(1);
const nowPageSize = ref(10);
const pageSizeOptions = ref([5, 10, 15, 20]);

const router = useRouter();
const route = useRoute();
const activeKey = route.params.category as string;

const postList = ref([]);
const initSearchParams = {
  text: "",
  pageSize: 10,
  pageNum: 1,
};
const searchParams = ref(initSearchParams);
const loadData = () => {
  PostControllerService.listPostVoByPageUsingPost({
    pageSize: nowPageSize.value,
    current: pageNum.value,
  }).then((res) => {
    postList.value = res.data.records;
  });
};
loadData();
const pageChange = (current: number) => {
  searchParams.value.pageNum = current;
  searchParams.value.pageSize = nowPageSize.value;
  pageNum.value = current;
  router.push({
    query: searchParams.value,
  });
  loadData();
};

const pageSizeChange = (pageSize: number) => {
  console.log(pageSize);
  searchParams.value.pageNum = pageNum.value;
  searchParams.value.pageSize = nowPageSize.value;
  nowPageSize.value = pageSize;
  router.push({
    query: searchParams.value,
  });
  loadData();
};

watchEffect(() => {
  searchParams.value = {
    ...initSearchParams,
    text: route.query.text as string,
  };
});

const onSearch = (value: string) => {
  router.push({
    query: searchParams.value,
  });
  PostControllerService.searchPostVoByPageUsingPost({
    content: value,
    pageSize: searchParams.value.pageSize || 10,
    current: 1,
  }).then((res) => {
    postList.value = res.data.records;
  });
};

const onTabChange = (key: string) => {
  pageNum.value = 1;
  router.push({
    path: `/list/${key}`,
    query: searchParams.value,
  });
};
</script>

<style scoped>
.search {
  text-align: center;
  width: 70%;
  margin: 0 auto;
}
</style>
