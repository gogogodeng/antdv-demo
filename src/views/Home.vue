<template>
  <div class="home font">
    <Swiper></Swiper>
    <Main></Main>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import Main from '@/components/Main.vue'

export default {
  name: 'Home',
  components: { Swiper, Main }
}
</script>

<style lang="less">
</style>
