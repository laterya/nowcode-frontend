<template>
  <div class="interfaceList">
    <a-list :gridProps="{ gutter: 0, span: 8 }" :bordered="false">
      <a-card
        hoverable
        :style="{ width: '360px' }"
        v-for="(card, index) in interfaceInfo"
        :key="index"
      >
        <template #actions>
          <a-button type="primary" shape="round" @click="detailClick(index)"
            >查看详情
          </a-button>
        </template>
        <template #cover>
          <div
            :style="{
              height: '204px',
              overflow: 'hidden',
            }"
          >
            <img
              :style="{ width: '100%', transform: 'translateY(-20px)' }"
              alt="dessert"
              :src="card.avatarUrl"
            />
          </div>
        </template>
        <a-card-meta :title="card.name">
          <template #description>
            接口名： {{ card.name }} <br />
            描述：{{ card.description }} <br />
            积分数：{{ card.reduceScore }} <br />
          </template>
        </a-card-meta>
      </a-card>
    </a-list>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  InterfaceInfo,
  InterfaceInfoControllerService,
} from "../../../generated";
import { useRouter } from "vue-router";

const interfaceInfo = ref([]);

const loadData = () => {
  InterfaceInfoControllerService.listInterfaceInfoByPageUsingGet().then(
    (res) => {
      interfaceInfo.value = res.data.records;
    }
  );
};

onMounted(() => {
  loadData();
});

const router = useRouter();
const detailClick = (index: number) => {
  const element: InterfaceInfo = interfaceInfo.value[index];
  router.push({
    path: "/interfaceInfoDetail",
    query: {
      id: element.id,
    },
  });
};
</script>

<style scoped>
.interfaceList {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}
</style>
