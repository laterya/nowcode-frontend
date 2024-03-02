<template>
  <a-card title="欢迎使用Now Code 平台">
    <a-card :style="{ marginBottom: '20px' }" title="在线接口平台">
      <template #extra>
        <router-link to="/interfaceInfo">More</router-link>
      </template>
      提供了一些在线接口，用户可以在线调用接口进行测试，并提供SDK，方便用户集成至代码中
    </a-card>
    <a-card :style="{ marginBottom: '20px' }" title="智能图表分析平台">
      <template #extra>
        <router-link to="/chat/async">More</router-link>
      </template>
      用户上床图表的原数据，即可提供图表的智能分析，利用AIGC生成图表和分析结论，方便对excel的数据有直观感受
    </a-card>
  </a-card>
</template>

<script setup lang="ts"></script>
