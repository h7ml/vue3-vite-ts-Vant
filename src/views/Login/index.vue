<!--
 * @Author: your name
 * @Date: 2021-03-01 09:42:46
 * @LastEditTime: 2021-03-01 09:44:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \my-vue-app\src\views\Login\index.vue
-->
<template>
  <h1>登录页</h1>
  vuex:{{ $store.state.num }}
  <div>
    <van-button type="primary" @click="goLogin">跳转到首页</van-button>
  </div>
</template>
<script lang="ts" setup="props">
import { useRouter } from "vue-router";
const router = useRouter();
const goLogin = () => {
  router.push("/");
};
</script>