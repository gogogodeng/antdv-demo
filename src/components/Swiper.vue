<template>
  <div class="position-relative d-flex a-center j-center" style="height: 400px;width: 80%;margin: auto;">
    <div class="py-3" style="background-color: rgba(0,0,0,0.6);height: 100%;width: 200px;top: 0;left: 10%;z-index: 9;">
      <div class="text-white px-2 py-1 font-md hover click" v-for="t in types" :key="t" @click="link(t)">
        <AppstoreAddOutlined /> {{t}}
      </div>
    </div>
    <div class="flex-1">
      <Carousel autoplay style="width: 100%;">
        <div v-for="(s,i) in swiper" :key="i">
          <img :src="require('@/assets/'+s)" alt="" style="width: 100%;height: 400px;">
        </div>
      </Carousel>
    </div>
  </div>
</template>

<script>
import { Carousel, Button } from 'ant-design-vue'
import { AppstoreAddOutlined } from '@ant-design/icons-vue'
import data from '@/assets/js/data.js'
export default {
  components: {
    Carousel, Button, AppstoreAddOutlined
  },
  data () {
    return {
      types: data.types,
      swiper: data.swiper,
      hot: data.list[data.types[0]]
    }
  },
  methods: {
    link (t) {
      this.$router.push('/list?name=' + t)
    },
    detail (i) {
      this.$router.push('/detail?name=' + data.types[0] + '&index=' + i)
    }
  }
}
</script>

<style lang="less" scoped>
  .ant-carousel ::v-deep(.slick-slide) {
    text-align: center;
    height: 400px;
    background: #364d79;
    overflow: hidden;
  }
  .hover:hover {
    background-color: var(--white);
  }
</style>
