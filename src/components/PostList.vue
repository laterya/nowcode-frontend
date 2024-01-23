<template>
  <a-list
    class="list-demo-action-layout"
    :bordered="false"
    :data="props.postList"
  >
    <template #item="{ item }">
      <a-list-item class="list-demo-item" action-layout="vertical">
        <template #actions>
          <span>
            <i class="iconfont icon-dianzan" />
            {{ item.thumbNum }}</span
          >
          <span>
            <i class="iconfont icon-shoucang" />
            {{ item.favourNum }}
          </span>
        </template>
        <template #extra>
          <a-space>
            <a-tag v-for="i in item.tagList" :key="i" color="blue"
              >{{ i }}
            </a-tag>
          </a-space>
        </template>
        <a-list-item-meta :title="item.title" :description="item.content">
          <template #avatar>
            <a-avatar shape="square">
              <img alt="avatar" :src="item.cover" />
            </a-avatar>
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
</template>

<script setup lang="ts">
import { withDefaults, defineProps, reactive, ref } from "vue";
import {
  BaseResponse_boolean_,
  PostControllerService,
  PostThumbControllerService,
  PostVO,
} from "../../generated";
import message from "@arco-design/web-vue/es/message";

interface Props {
  postList: PostVO[];
}

const props = withDefaults(defineProps<Props>(), {
  postList: () => [],
});
// const thumbClick = (id: number) => {
//   PostThumbControllerService.doThumbUsingPost({
//     postId: id,
//   }).then((res: BaseResponse_boolean_) => {
//     if (res.code === 0) {
//     }
//   });
// };
</script>

<style scoped></style>
