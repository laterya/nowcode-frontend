<template>
  <div class="addPost">
    文章标题：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入文章标题"
      :size="'large'"
      v-model="title"
      allow-clear
    />
    <MyDivider />
    文章标签：
    <a-input-tag
      :style="{ width: '700px' }"
      placeholder="请输入标签"
      allow-clear
      v-model="tags"
    />
    <MyDivider />
    <a-space direction="vertical" size="large" fill>
      <a-textarea
        v-model="content"
        placeholder="输入文章内容"
        :max-length="10000"
        allow-clear
        show-word-limit
      />
    </a-space>
    <MyDivider />
    <a-button type="primary" @click="commitClick">修改</a-button>
  </div>
</template>

<script setup lang="ts">
import MyDivider from "@/components/MyDivider.vue";
import {
  BaseResponse_boolean_,
  BaseResponse_PostVO_,
  PostControllerService,
} from "../../../generated";
import { onMounted, ref } from "vue";
import message from "@arco-design/web-vue/es/message";
import { useRoute, useRouter } from "vue-router";
import { FileItem } from "@arco-design/web-vue";

const router = useRouter();
const route = useRoute();

const title = ref("");
const tags = ref([]);
const content = ref("");

const loadData = () => {
  const postId = route.query.postId;
  PostControllerService.getPostVoByIdUsingGet(postId as any).then(
    (res: BaseResponse_PostVO_) => {
      if (res.code === 0) {
        message.success("加载成功");
        title.value = res.data?.title as string;
        tags.value = res.data?.tagList as any;
        content.value = res.data?.content as string;
      } else {
        message.error(res.message as string);
      }
    }
  );
};

onMounted(() => {
  loadData();
});

const commitClick = () => {
  console.log(title.value, content.value, tags.value);
  PostControllerService.editPostUsingPost({
    title: title.value,
    content: content.value,
    tags: tags.value,
    id: route.query.postId as any,
  }).then((res: BaseResponse_boolean_) => {
    if (res.code === 0) {
      message.success("修改成功");
      router.push("/");
    } else {
      message.error(res.message as string);
    }
  });
};
</script>

<style scoped>
.addPost {
  text-align: center;
  width: 70%;
  margin: 0 auto;
}
</style>
