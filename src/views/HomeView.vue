<template>
  <a-card title="欢迎使用Now Code 平台">
    <a-card :style="{ marginBottom: '20px' }" title="论坛交流平台">
      <template #extra>
        <router-link to="/list">More</router-link>
      </template>
      提供了一个在线平台，让用户能够发表观点、讨论话题、分享信息和互相交流。
    </a-card>
  </a-card>
</template>

<script setup lang="ts"></script>
