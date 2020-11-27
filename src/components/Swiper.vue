<template>
  <div>
    <Carousel autoplay>
      <div v-for="(s,i) in swiper" :key="i">
        <img :src="require('@/assets/'+s)" alt="" style="width: 100%;height: 100%;">
      </div>
    </Carousel>
  </div>
</template>

<script>
import { Carousel } from 'ant-design-vue'
import data from '@/assets/js/data.js'
export default {
  components: {
    Carousel
  },
  data () {
    return {
      swiper: data.swiper
    }
  }
}
</script>

<style lang="less" scoped>
  .ant-carousel ::v-deep(.slick-slide) {
    text-align: center;
    height: 290px;
    background: #364d79;
    overflow: hidden;
  }
</style>
