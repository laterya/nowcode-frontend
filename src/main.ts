import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ArcoVue from "@arco-design/web-vue";
import "@arco-design/web-vue/dist/arco.css";
// 引入全局权限校验
import "@/access/index";
import "@/assets/icons/ali.css";
import "echarts";
const pinia = createPinia();
const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ArcoVue);
app.mount("#app");
