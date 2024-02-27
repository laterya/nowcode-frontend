<template>
  <div class="addChat">
    <a-form :model="form" layout="horizontal">
      <a-form-item field="file" label="图表文件">
        <a-upload :custom-request="myUpload" :limit="1" />
      </a-form-item>
      <a-form-item field="name" label="图表名称">
        <a-input v-model="form.name" placeholder="输入图表名称" />
      </a-form-item>
      <a-form-item field="chartType" label="图表类型">
        <a-select placeholder="Please select ..." v-model="form.chartType">
          <a-option>曲线图</a-option>
          <a-option>柱状图</a-option>
          <a-option>雷达图</a-option>
        </a-select>
      </a-form-item>
      <a-form-item field="goal" label="分析目标">
        <a-input v-model="form.goal" placeholder="输入分析目标" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="submit">提交</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { RequestOption } from "@arco-design/web-vue";
import { ChartControllerService } from "../../../generated";

import { ref } from "vue";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";

const file = ref();
const form = ref({
  name: "",
  chartType: "",
  goal: "",
});
const myUpload = (options: RequestOption) => {
  file.value = options.fileItem.file;
};
const router = useRouter();
const submit = () => {
  ChartControllerService.genChartByAiAsyncMqUsingPost(
    file.value,
    form.value.chartType,
    form.value.goal,
    form.value.name
  ).then((res) => {
    if (res.code === 0) {
      message.success("添加成功，请到我的图表中查看结果");
    }
    router.push({
      path: "/myChart",
      replace: true,
    });
  });
};
</script>

<style scoped>
.addChat {
  text-align: center;
  width: 90%;
}
</style>
