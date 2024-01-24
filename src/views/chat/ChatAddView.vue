<template>
  <div class="chat">
    <a-row class="grid-demo">
      <a-col :span="9">
        <a-form :model="form" layout="horizontal">
          <a-form-item field="file" label="图标文件">
            <a-upload :custom-request="myUpload" :limit="1" />
          </a-form-item>
          <a-form-item field="name" label="图表名称">
            <a-input v-model="form.name" placeholder="输入图表名称" />
          </a-form-item>
          <a-form-item field="chartType" label="图表类型">
            <a-input v-model="form.chartType" placeholder="输入图表类型" />
          </a-form-item>
          <a-form-item field="goal" label="分析目标">
            <a-input v-model="form.goal" placeholder="输入分析目标" />
          </a-form-item>
          <a-form-item>
            <a-button type="primary" @click="submit">提交</a-button>
          </a-form-item>
        </a-form>
        <div>
          {{ form }}
        </div>
      </a-col>
      <a-col :span="15">
        <v-chart class="chart" :option="option" autoresize />
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
import { RequestOption } from "@arco-design/web-vue";
import { ChartControllerService } from "../../../generated";

import VChart from "vue-echarts";
import { ref } from "vue";

use([GridComponent, LineChart, CanvasRenderer]);

import { use } from "echarts/core";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

use([
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  LineChart,
  CanvasRenderer,
]);

const option = ref({
  title: {
    text: "用户增长情况",
    subtext: "",
    left: "center",
  },
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["用户数"],
  },
  xAxis: {
    data: [
      "1号",
      "2号",
      "3号",
      "4号",
      "5号",
      "6号",
      "7号",
      "8号",
      "9号",
      "10号",
      "11号",
      "12号",
    ],
  },
  yAxis: {
    type: "value",
    axisLabel: {
      formatter: "{value} 人",
    },
  },
  series: [
    {
      name: "用户数",
      data: [26, 53, 84, 23, 57, 48, 62, 89, 14, 35, 78, 34],
      type: "line",
    },
  ],
});

const file = ref();
const form = ref({
  name: "",
  chartType: "",
  goal: "",
});
const myUpload = (options: RequestOption) => {
  file.value = options.fileItem.file;
};

const submit = () => {
  ChartControllerService.genChartByAiUsingPost(
    file.value,
    form.value.chartType,
    form.value.goal,
    form.value.name
  ).then((res) => {
    console.log(res.data.genChart);
    option.value = res.data.genChart;
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
  height: 80vh;
  margin-left: 20px;
}
</style>
