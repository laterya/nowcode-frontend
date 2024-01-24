<template>
  <div class="about">
    <a-space size="large">
      <a-avatar :size="100" :image-url="avatarUrl" />
    </a-space>
    <a-descriptions
      style="margin-top: 20px"
      :data="data"
      size="large"
      :column="1"
    />
    <a-button type="primary" @click="handleClick">修改个人信息</a-button>
    <a-modal
      v-model:visible="visible"
      title="个人信息修改"
      @cancel="handleCancel"
      @ok="handleBeforeOk"
    >
      <a-form :model="form">
        <a-form-item field="avatar" label="用户头像">
          <a-upload
            list-type="picture-card"
            image-preview
            action="http://localhost:8101/api/file/upload"
            @success="uploadSuccess"
            with-credentials
            limit="1"
            :data="uploadFileRequest"
          />
        </a-form-item>
        <a-form-item field="name" label="用户名">
          <a-input v-model="form.name" />
        </a-form-item>
        <a-form-item field="profile" label="个人简介">
          <a-input v-model="form.profile" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import {
  BaseResponse_boolean_,
  BaseResponse_UserVO_,
  UserControllerService,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { FileItem, UploadRequest } from "@arco-design/web-vue";
import { useUserStore } from "@/stores/user";

const uploadFileRequest: UploadRequest = {
  biz: "user_avatar",
};

const visible = ref(false);
const form = reactive({
  name: "",
  profile: "",
  avatar: "",
});
const uploadSuccess = (fileItem: FileItem) => {
  form.avatar = fileItem.response.data;
};

const handleClick = () => {
  visible.value = true;
  form.name = data.value[0].value;
  form.profile = data.value[1].value;
  form.avatar = avatarUrl.value;
};

const handleCancel = () => {
  visible.value = false;
};
const store = useUserStore();
const handleBeforeOk = () => {
  console.log(form);
  UserControllerService.updateMyUserUsingPost({
    userAvatar: form.avatar,
    userName: form.name,
    userProfile: form.profile,
  }).then((res: BaseResponse_boolean_) => {
    if (res.code === 0) {
      message.success("更新成功");
      loadAllData();
      visible.value = false;
      store.setLoginUser({ userAvatar: form.avatar });
    } else {
      message.error(res.message as string);
    }
  });
};

const data = ref([
  {
    label: "用户昵称",
    value: "",
  },
  {
    label: "用户简介",
    value: "",
  },
  {
    label: "用户角色",
    value: "",
  },
  {
    label: "创建时间",
    value: "",
  },
]);

const avatarUrl = ref("");

const loadAllData = () => {
  UserControllerService.getLoginUserUsingGet().then(
    (res: BaseResponse_UserVO_) => {
      data.value[0].value = res.data?.userName as string;
      data.value[1].value = res.data?.userProfile as string;
      data.value[2].value = res.data?.userRole as string;
      data.value[3].value = res.data?.createTime as string;
      avatarUrl.value = res.data?.userAvatar as string;
    }
  );
};

onMounted(() => {
  loadAllData();
});
</script>

<style scoped>
.about {
  text-align: center;
  width: 40%;
  margin: 0 auto;
}
</style>
