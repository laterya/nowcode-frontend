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
import UserAdminView from "@/views/admin/UserAdminView.vue";

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
    path: "/list",
    name: "论坛",
    component: PostListView,
  },
  {
    path: "/list/:category",
    component: PostListView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/addPost",
    component: PostAddView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/updatePost",
    component: PostUpdateView,
    meta: {
      hideInMenu: true,
    },
  },
  {
    path: "/admin",
    name: "管理员界面",
    component: UserAdminView,
    meta: {
      access: ACCESS_ENUM.ADMIN,
    },
  },
  {
    path: "/myPost",
    name: "我的文章",
    component: () => import("../views/post/MyPostView.vue"),
    meta: {
      access: ACCESS_ENUM.USER,
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
