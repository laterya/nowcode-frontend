<template>
  <div class="chat">
    <a-row class="grid-demo">
      <a-col :span="9">
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
      </a-col>
      <a-col :span="12" style="margin-left: 30px">
        <a-card hoverable title="生成图表">
          <a-empty v-if="display" />
          <v-chart v-else class="chart" :option="option" autoresize />
        </a-card>
        <a-card style="margin-top: 10px" title="分析结果" hoverable>
          <a-empty v-if="display" />
          <p v-else>{{ resValue }}</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { RequestOption } from "@arco-design/web-vue";
import { ChartControllerService } from "../../../generated";

import VChart from "vue-echarts";
import { ref } from "vue";

const display = ref(true);
const option = ref<any>({});
const file = ref();
const form = ref({
  name: "",
  chartType: "",
  goal: "",
});
const myUpload = (options: RequestOption) => {
  file.value = options.fileItem.file;
};
const resValue = ref("");
const submit = () => {
  ChartControllerService.genChartByAiUsingPost(
    file.value,
    form.value.chartType,
    form.value.goal,
    form.value.name
  ).then((res) => {
    option.value = JSON.parse(res.data.genChart);
    resValue.value = res.data.genResult;
    display.value = false;
  });
};
</script>

<style scoped>
.chat {
  text-align: center;
  width: 90%;
  margin: 0 auto;
}

.chart {
  height: 50vh;
}
</style>
