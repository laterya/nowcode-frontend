<template>
  <div class="myChat">
    <a-list :gridProps="{ gutter: 0, span: 8 }" :bordered="false">
      <a-card
        hoverable
        :style="{ width: '360px' }"
        v-for="(card, index) in myCharts"
        :key="index"
      >
        <template #cover>
          <div
            :style="{
              height: '204px',
              overflow: 'hidden',
            }"
          >
            <v-chart
              v-if="card.status === 'succeed'"
              class="chart"
              :option="card.chartData"
              autoresize
            />
            <a-empty v-else></a-empty>
          </div>
        </template>
        <a-card-meta title="分析结果">
          <template #description>
            {{ card.genResult }}
          </template>
        </a-card-meta>
      </a-card>
    </a-list>
  </div>
</template>

<script setup lang="ts">
import VChart from "vue-echarts";
import { onMounted, ref } from "vue";
import { ChartControllerService } from "../../../generated";

const myCharts = ref([]);

const loadData = () => {
  ChartControllerService.listMyChartByPageUsingPost({}).then((res) => {
    console.log(res.data.records[0].chartData);
    for (let i = 0; i < res.data.records.length; i++) {
      res.data.records[i].chartData = JSON.parse(res.data.records[i].genChart);
    }
    myCharts.value = res.data.records;
    console.log(res.data.records[0].chartData);
  });
};

onMounted(() => {
  loadData();
});
</script>

<style scoped>
.myChat {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}
</style>
