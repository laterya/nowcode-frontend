<template>
  <div class="addInterfaceInfo">
    接口名称：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口名称"
      :size="'large'"
      v-model="title"
      allow-clear
    />
    <MyDivider />
    接口描述：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口描述"
      :size="'large'"
      v-model="desc"
      allow-clear
    />
    <MyDivider />
    请求方式：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口请求方式"
      :size="'large'"
      v-model="method"
      allow-clear
    />
    <MyDivider />
    请求路径：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口请求路径"
      :size="'large'"
      v-model="reqpath"
      allow-clear
    />
    <MyDivider />
    请求头：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口请求头"
      :size="'large'"
      v-model="reqHeader"
      allow-clear
    />
    <MyDivider />
    请求参数：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口请求参数"
      :size="'large'"
      v-model="reqParams"
      allow-clear
    />
    <MyDivider />
    响应头：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口响应头"
      :size="'large'"
      v-model="resHeader"
      allow-clear
    />
    <MyDivider />
    响应参数：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口响应参数"
      :size="'large'"
      v-model="resParams"
      allow-clear
    />
    <MyDivider />
    返回格式：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口返回格式"
      :size="'large'"
      v-model="returnFormat"
      allow-clear
    />
    <MyDivider />
    请求示例：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口请求示例"
      :size="'large'"
      v-model="reqExample"
      allow-clear
    />
    <MyDivider />
    所需积分：
    <a-input
      :style="{ width: '700px' }"
      placeholder="输入接口所需积分"
      :size="'large'"
      v-model="reduceScore"
      allow-clear
    />
    <MyDivider />
    <a-button type="primary" @click="commitClick">提交</a-button>
  </div>
</template>

<script setup lang="ts">
import MyDivider from "@/components/MyDivider.vue";
import {
  InterfaceInfoControllerService,
  PostControllerService,
} from "../../../generated";
import { ref } from "vue";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import { FileItem } from "@arco-design/web-vue";

const title = ref("");
const desc = ref("");
const method = ref("");
const reqpath = ref("");
const reqHeader = ref("");
const reqParams = ref("");
const resHeader = ref("");
const resParams = ref("");
const returnFormat = ref("");
const reqExample = ref("");
const reduceScore = ref(0);

const router = useRouter();

const commitClick = () => {
  InterfaceInfoControllerService.addInterfaceInfoUsingPost({
    description: desc.value,
    method: method.value,
    name: title.value,
    reduceScore: reduceScore.value,
    requestExample: reqExample.value,
    requestHeader: reqHeader.value,
    requestParams: reqParams.value as any,
    responseHeader: resHeader.value,
    responseParams: resParams.value as any,
    returnFormat: returnFormat.value,
    url: reqpath.value,
  }).then((res) => {
    if (res.code === 0) {
      message.success("添加成功");
      router.push("/interfaceInfo");
    } else {
      message.error("添加失败");
    }
  });
};
</script>

<style scoped></style>
