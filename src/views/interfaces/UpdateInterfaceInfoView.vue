<template>
  <div class="updateInterface">
    <a-space direction="vertical" size="large" :style="{ width: '600px' }">
      <a-form :model="form" layout="'horizontal'">
        <a-form-item field="name" label="接口名称">
          <a-input v-model="form.name" />
        </a-form-item>
        <a-form-item field="description" label="接口描述">
          <a-input v-model="form.description" />
        </a-form-item>
        <a-form-item field="method" label="请求方式">
          <a-input v-model="form.method" />
        </a-form-item>
        <a-form-item field="url" label="请求路径">
          <a-input v-model="form.url" />
        </a-form-item>
        <a-form-item field="requestHeader" label="请求头">
          <a-input v-model="form.requestHeader" />
        </a-form-item>
        <a-form-item field="requestParams" label="请求参数">
          <a-input v-model="form.requestParams" />
        </a-form-item>
        <a-form-item field="responseHeader" label="响应头">
          <a-input v-model="form.responseHeader" />
        </a-form-item>
        <a-form-item field="responseParams" label="响应参数">
          <a-input v-model="form.responseParams" />
        </a-form-item>
        <a-form-item field="returnFormat" label="返回格式">
          <a-input v-model="form.returnFormat" />
        </a-form-item>
        <a-form-item field="requestExample" label="请求示例">
          <a-input v-model="form.requestExample" />
        </a-form-item>
        <a-form-item field="totalInvokes" label="总调用次数">
          <a-input v-model="form.totalInvokes" />
        </a-form-item>
        <a-form-item field="reduceScore" label="所需积分">
          <a-input v-model="form.reduceScore" />
        </a-form-item>
        <a-button type="primary" @click="onClickUpdate">提交</a-button>
      </a-form>
    </a-space>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from "vue";
import { InterfaceInfoControllerService } from "../../../generated";
import { useRoute, useRouter } from "vue-router";
import message from "@arco-design/web-vue/es/message";

const form = reactive({
  name: "",
  description: "",
  method: "",
  url: "",
  requestHeader: "",
  requestParams: "",
  responseHeader: "",
  responseParams: "",
  returnFormat: "",
  requestExample: "",
  totalInvokes: "",
  reduceScore: "",
});
const route = useRoute();
onMounted(() => {
  const id = route.query.id;
  InterfaceInfoControllerService.getInterfaceInfoByIdUsingGet(id as any).then(
    (res) => {
      form.name = res.data?.name as string;
      form.description = res.data?.description as string;
      form.method = res.data?.method as string;
      form.url = res.data?.url as string;
      form.requestHeader = res.data?.requestHeader as string;
      form.requestParams = res.data?.requestParams as string;
      form.responseHeader = res.data?.responseHeader as string;
      form.responseParams = res.data?.responseParams as string;
      form.returnFormat = res.data?.returnFormat as string;
      form.requestExample = res.data?.requestExample as string;
      form.totalInvokes = res.data?.totalInvokes as any;
      form.reduceScore = res.data?.reduceScore as any;
    }
  );
});
const router = useRouter();
const onClickUpdate = () => {
  InterfaceInfoControllerService.updateInterfaceInfoUsingPost({
    id: route.query.id as any,
    name: form.name,
    description: form.description,
    method: form.method,
    url: form.url,
    requestHeader: form.requestHeader,
    requestParams: form.requestParams as any,
    responseHeader: form.responseHeader,
    responseParams: form.responseParams as any,
    returnFormat: form.returnFormat,
    requestExample: form.requestExample,
    reduceScore: form.reduceScore as any,
    // avatarUrl, status
  }).then((res) => {
    if (res.code === 0) {
      message.success("更新成功");
      router.push("/");
    } else {
      message.error("更新失败");
    }
  });
};
</script>

<style>
.updateInterface {
  text-align: center;
  width: 50%;
  margin: 0 auto;
}
</style>
