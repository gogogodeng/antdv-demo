<template>
  <div class="top bg-lightmuted">
    <div class="d-flex j-sb w-100">
      <div>欢迎访问</div>
      <div class="d-flex j-end a-center">
        <router-link to="/register"> <span class="">注册</span> </router-link> &nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/login"> <span class="">登录</span> </router-link>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
  .top {
    width: 100%;
    min-width: 900px;
    margin: 0 auto 10px auto;
    padding: 5px 10%;
    background-color: #fff;
  }
</style>
