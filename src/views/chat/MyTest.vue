<template>
  <div>
    {{ infoRef.newKey }}
    {{ infoRef.bar }}
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const infoRef = ref<any>(source()); // template 里必须绑定的是 infoRef 不能是 info !!
let info = infoRef.value; // Js里操作只操作 info 就可以不用 infoRef.value 了
function reset() {
  // 这样需要重置整个响应式对象就不需要 Object.assign和考虑深拷贝问题了
  infoRef.value = source();
  // 重新初始化整个响应式对象时，用来数据操作的实际变量也需要重新赋值！
  info = infoRef.value;
}

function source() {
  return {
    foo: 1,
    bar: 2,
    obj: { a: 1 },
  };
}

// 测试
setTimeout(() => {
  info.bar *= 110;
  info.newKey = 666;
}, 3000);
setTimeout(() => {
  reset();
}, 6000);
setTimeout(() => {
  info.bar = 987654321;
}, 8000);
</script>
