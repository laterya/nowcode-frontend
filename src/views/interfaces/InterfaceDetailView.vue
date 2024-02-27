<template>
  <div class="interfaceDetail">
    <a-image width="200" src="https://t.mwm.moe/moez/" />
    <a-descriptions
      style="margin-top: 20px"
      :data="data"
      :size="'large'"
      :column="1"
    />
    <a-button type="primary" style="margin-top: 10px" @click="handleClick">
      在线调用
    </a-button>
    <a-modal v-model:visible="visible" @ok="handleOk">
      <template #title>调用结果</template>
      <div>
        <a-image
          width="200"
          :src="pic"
          style="display: block; margin: 0 auto"
        />
        图片地址：{{ pic }}
      </div>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { InterfaceInfoControllerService } from "../../../generated";
import { useRoute } from "vue-router";

const visible = ref(false);
const pic = ref("");
const route = useRoute();

const handleClick = () => {
  visible.value = true;
  InterfaceInfoControllerService.invokeInterfaceUsingPost({
    id: route.query.id as any,
  }).then((res) => {
    pic.value = res.data as string;
    loadData();
  });
};
const handleOk = () => {
  visible.value = false;
};

const data = ref([
  {
    label: "接口名称",
    value: "",
  },
  {
    label: "接口描述",
    value: "",
  },
  {
    label: "请求方式",
    value: "",
  },
  {
    label: "请求路径",
    value: "",
  },
  {
    label: "请求头",
    value: "",
  },
  {
    label: "请求参数",
    value: "",
  },
  {
    label: "响应头",
    value: "",
  },
  {
    label: "响应参数",
    value: "",
  },
  {
    label: "返回格式",
    value: "",
  },
  {
    label: "请求示例",
    value: "",
  },
  {
    label: "总调用次数",
    value: "",
  },
  {
    label: "所需积分",
    value: "",
  },
]);

const loadData = () => {
  const interfaceInfoId = route.query.id;
  InterfaceInfoControllerService.getInterfaceInfoByIdUsingGet(
    interfaceInfoId as any
  ).then((res) => {
    console.log(res.data?.name);
    data.value[0].value = res.data?.name as string;
    data.value[1].value = res.data?.description as string;
    data.value[2].value = res.data?.method as string;
    data.value[3].value = res.data?.url as string;
    data.value[4].value = res.data?.requestHeader as string;
    data.value[5].value = res.data?.requestParams as string;
    data.value[6].value = res.data?.responseHeader as string;
    data.value[7].value = res.data?.responseParams as string;
    data.value[8].value = res.data?.returnFormat as string;
    data.value[9].value = res.data?.requestExample as string;
    data.value[10].value = res.data?.totalInvokes as any;
    data.value[11].value = res.data?.reduceScore as any;
  });
};

onMounted(() => {
  loadData();
});
</script>

<style scoped>
.interfaceDetail {
  text-align: center;
  width: 30%;
  margin: 0 auto;
}
</style>
