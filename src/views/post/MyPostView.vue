<template>
  <div class="about">
    <a-list>
      <a-list-item v-for="(idx, index) in postList" :key="index">
        <a-list-item-meta :title="idx.title" :description="idx.content">
          <template #avatar>
            <a-avatar shape="square">
              <img alt="avatar" :src="idx.cover" />
            </a-avatar>
          </template>
        </a-list-item-meta>
        <template #actions>
          <i class="iconfont icon-bianji" @click="updateClick(index)" />
          <i class="iconfont icon-shanchu" @click="deleteClick(index)" />
        </template>
      </a-list-item>
    </a-list>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import {
  BaseResponse_boolean_,
  PostControllerService,
  PostVO,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";

const postList = ref([]);

const loadData = () => {
  PostControllerService.listMyPostVoByPageUsingPost({}).then((res) => {
    postList.value = res.data.records;
  });
};
loadData();

const router = useRouter();

const updateClick = (index: number) => {
  const element: PostVO = postList.value[index];
  router.push({
    path: "/updatePost",
    query: {
      postId: element.id,
    },
  });
};

const deleteClick = (index: number) => {
  const element: PostVO = postList.value[index];
  PostControllerService.deletePostUsingPost({ id: element.id }).then(
    (res: BaseResponse_boolean_) => {
      if (res.code === 0) {
        message.success("删除成功");
        loadData();
      } else {
        message.error(res.message as string);
      }
    }
  );
};
</script>
