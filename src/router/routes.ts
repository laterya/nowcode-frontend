import { RouteRecordRaw } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NoAuthView from "@/views/NoAuthView.vue";
import ACCESS_ENUM from "@/access/accessEnum";
import UserLayout from "@/layouts/UserLayout.vue";
import UserLoginView from "@/views/user/UserLoginView.vue";
import UserRegisterView from "@/views/user/UserRegisterView.vue";
import PostListView from "@/views/post/PostListView.vue";
import PostAddView from "@/views/post/PostAddView.vue";
import PostUpdateView from "@/views/post/PostUpdateView.vue";
import ChatGenView from "@/views/chat/ChatGenView.vue";
import AddChartView from "@/views/chat/AddChartView.vue";
import MyChartsView from "@/views/chat/MyChartsView.vue";
import UpdateInterfaceInfoView from "@/views/interfaces/UpdateInterfaceInfoView.vue";
import InterfaceDetailView from "@/views/interfaces/InterfaceDetailView.vue";
import InterfaceInfoView from "@/views/interfaces/InterfaceInfoView.vue";
import AdminView from "@/views/admin/AdminView.vue";

export const routes: Array<RouteRecordRaw> = [
  {
    path: "/user",
    name: "用户布局",
    component: UserLayout,
    children: [
      {
        path: "/user/login",
        name: "用户登陆",
        component: UserLoginView,
      },
      {
        path: "/user/register",
        name: "用户注册",
        component: UserRegisterView,
      },
    ],
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/",
    name: "主页",
    component: HomeView,
  },
  {
    path: "/chat",
    name: "智能分析(同步)",
    component: ChatGenView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/chat/async",
    name: "智能分析(异步)",
    component: AddChartView,
  },
  {
    path: "/myChart",
    name: "我的图表",
    component: MyChartsView,
  },
  {
    path: "/interfaceInfo",
    name: "在线接口",
    component: InterfaceInfoView,
  },
  {
    path: "/interfaceInfoDetail",
    component: InterfaceDetailView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/updateInterfaceInfo",
    component: UpdateInterfaceInfoView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/admin",
    name: "管理员界面",
    component: AdminView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/about",
    name: "关于我的",
    component: () => import("../views/user/AboutMeView.vue"),
    meta: {
      access: ACCESS_ENUM.USER,
      hideInMenu: true,
    },
  },
  {
    path: "/noAuth",
    name: "无权限",
    component: NoAuthView,
    meta: {
      hideInMenu: true,
    },
  },
  // {
  //   path: "/hide",
  //   name: "用户登陆可见",
  //   component: HideView,
  //   meta: {
  //     access: ACCESS_ENUM.USER,
  //   },
  // },
];
