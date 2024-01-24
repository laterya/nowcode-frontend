<template>
  <div class="userAdmin">
    <a-table :columns="columns" :data="data" pagination="false">
      <template #optional="{ record }">
        <a-popconfirm content="确认删除吗？" @ok="confirmDelete(record.id)">
          <a-button style="margin-left: 30px" type="outline"
            >点击删除
          </a-button>
        </a-popconfirm>
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  BaseResponse_boolean_,
  UserControllerService,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";

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
