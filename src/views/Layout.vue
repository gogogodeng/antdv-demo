<template>
  <div class="home font">
    <Top></Top>
    <Header></Header>
    <Nav></Nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import Header from '@/components/Header.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: { Top, Header, Nav, Footer }
}
</script>

<style lang="less">
</style>
