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
    文章封面：
    <a-space direction="vertical" :style="{ width: '69%' }">
      <a-upload
        list-type="picture-card"
        image-preview
        action="http://localhost:8101/api/file/upload"
        @success="uploadSuccess"
        with-credentials
      />
    </a-space>
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
    <a-button type="primary" @click="commitClick">提交</a-button>
  </div>
</template>

<script setup lang="ts">
import MyDivider from "@/components/MyDivider.vue";
import { PostControllerService } from "../../../generated";
import { ref } from "vue";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { FileItem } from "@arco-design/web-vue";

const coverUrl = ref("");

const title = ref("");
const tags = ref([]);
const content = ref("");

const router = useRouter();

const uploadSuccess = (fileItem: FileItem) => {
  coverUrl.value = fileItem.response.data;
};

const commitClick = () => {
  PostControllerService.addPostUsingPost({
    title: title.value,
    content: content.value,
    tags: tags.value,
    // cover: coverUrl.value,
  }).then((res) => {
    if (res.code === 0) {
      message.success("创建成功");
      router.push("/");
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
