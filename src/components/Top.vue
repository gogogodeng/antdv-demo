<template>
  <div class="top">
    <div class="d-flex j-sb w-100">
      <div>欢迎访问</div>
      <div class="d-flex j-end a-center" v-if="!haslogin">
        <router-link to="/register">注册</router-link> &nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/login">登录</router-link>
      </div>
      <div class="d-flex j-end a-center" v-if="haslogin">
        您好，{{userinfo.name}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState([ 'haslogin','userinfo' ])
  },
  created() {
    if(this.$store.state.userinfo.name) {
      this.$store.state.haslogin = true
    } else {
      this.$store.state.haslogin = false
    }
  }
}

</script>

<style lang="less" scoped>
  .top {
    width: 100%;
    min-width: 900px;
    margin: auto;
    padding: 10px 10%;
    background-color: #fff;
  }
</style>
