<template>
  <div class="admin">
    <a-tabs v-model:active-key="activeKey" @change="onTabChange(activeKey)">
      <a-tab-pane key="addInterfaceInfo" title="新增接口">
        <AddInterfaceInfoView />
      </a-tab-pane>
      <a-tab-pane key="updateInterfaceInfo" title="接口管理">
        <a-table :columns="icolumns" :data="idata" pagination="false">
          <template #optional="{ record }">
            <div class="button-container">
              <a-button @click="ihandClick(record.id)" type="primary"
                >点击修改
              </a-button>
              <a-popconfirm
                content="确认删除吗？"
                @ok="iconfirmDelete(record.id)"
              >
                <a-button style="margin-left: 30px" type="outline"
                  >点击删除
                </a-button>
              </a-popconfirm>
            </div>
          </template>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="userAdmin" title="用户管理">
        <a-table :columns="columns" :data="data" pagination="false">
          <template #optional="{ record }">
            <a-popconfirm content="确认删除吗？" @ok="confirmDelete(record.id)">
              <a-button style="margin-left: 30px" type="outline"
                >点击删除
              </a-button>
            </a-popconfirm>
          </template>
        </a-table>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  BaseResponse_boolean_,
  InterfaceInfoControllerService,
  UserControllerService,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import AddInterfaceInfoView from "@/views/interfaces/AddInterfaceInfoView.vue";

// todo 接口管理封装成组件
const activeKey = ref("addInterfaceInfo");
const onTabChange = (activeKey: string) => {
  if (activeKey === "updateInterfaceInfo") {
    loadIData();
  }
};

const loadIData = () => {
  InterfaceInfoControllerService.listInterfaceInfoUsingGet().then((res) => {
    idata.value = res.data as any;
  });
};

const idata = ref([]);
const icolumns = [
  {
    title: "接口名称",
    dataIndex: "name",
  },
  {
    title: "接口描述",
    dataIndex: "description",
  },
  {
    title: "请求方式",
    dataIndex: "method",
  },
  {
    title: "请求路径",
    dataIndex: "url",
  },
  {
    title: "请求头",
    dataIndex: "requestHeader",
  },
  {
    title: "请求参数",
    dataIndex: "requestParams",
  },
  {
    title: "响应头",
    dataIndex: "responseHeader",
  },
  {
    title: "响应参数",
    dataIndex: "responseParams",
  },
  {
    title: "返回格式",
    dataIndex: "returnFormat",
  },
  {
    title: "请求示例",
    dataIndex: "requestExample",
  },
  {
    title: "总调用次数",
    dataIndex: "totalInvokes",
  },
  {
    title: "所需积分",
    dataIndex: "reduceScore",
  },
  {
    title: "操作",
    slotName: "optional",
  },
];
const router = useRouter();
const ihandClick = (id: number) => {
  router.push({
    path: "/updateInterfaceInfo",
    query: {
      id: id,
    },
  });
};

const iconfirmDelete = (id: number) => {
  InterfaceInfoControllerService.deleteInterfaceInfoUsingPost({ id: id }).then(
    (res) => {
      if (res.code === 0) {
        message.success("删除成功");
        loadIData();
      } else {
        message.error(res.message as string);
      }
    }
  );
};
const data = ref([]);

const columns = [
  {
    title: "用户id",
    dataIndex: "id",
  },
  {
    title: "用户账号",
    dataIndex: "userAccount",
  },
  {
    title: "用户名",
    dataIndex: "userName",
  },
  {
    title: "用户角色",
    dataIndex: "userRole",
  },
  {
    title: "创建时间",
    dataIndex: "createTime",
  },
  {
    title: "操作",
    slotName: "optional",
  },
];

onMounted(() => {
  UserControllerService.listUserByPageUsingPost({}).then((res) => {
    data.value = res.data.records;
  });
});

const confirmDelete = (id: number) => {
  UserControllerService.deleteUserUsingPost({ id: id }).then(
    (res: BaseResponse_boolean_) => {
      if (res.code === 0) {
        message.success("删除成功");
        UserControllerService.listUserByPageUsingPost({}).then((res) => {
          data.value = res.data.records;
        });
      } else {
        message.error("删除失败");
      }
    }
  );
};
</script>

<style scoped>
.admin {
  text-align: center;
  width: 80%;
  margin: 0 auto;
}

.button-container {
  display: flex;
  align-items: center;
}
</style>
