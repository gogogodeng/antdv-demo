<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <!-- <router-view/> -->
  <Layout></Layout>
</template>

<script>
import Layout from '@/views/Layout.vue'
export default {
  components: {
    Layout
  },
  mounted(){
    document.getElementById('app').style.display = 'block';
    document.getElementById('appLoading').style.display = 'none';	
	}
}
</script>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
