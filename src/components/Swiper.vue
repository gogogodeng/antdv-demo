<template>
  <div class="position-relative" style="height: 400px;">
    <div class="position-absolute py-3" style="background-color: rgba(0,0,0,0.6);height: 100%;width: 200px;top: 0;left: 10%;z-index: 9;">
      <div class="text-white px-2 py-1 font-md hover click" v-for="t in types" :key="t" @click="link(t)">
        <!-- <AppstoreAddOutlined />  -->
        {{t}}
      </div>
    </div>
    <Carousel autoplay>
      <div v-for="(s,i) in swiper" :key="i">
        <img :src="require('@/assets/'+s)" alt="" style="width: 100%;height: 100%;">
      </div>
    </Carousel>
    <div class="position-absolute p-3 bg-white shadow-sm rounded" style="height: 80%;width: 250px;top: 10%;right: 10%;z-index: 9;">
      <div class="d-flex j-start a-center">
        <div>
          <img src="../assets/images/user.jpg" alt="" class="rounded-circle" style="width: 50px;height: 50px;">
        </div>
        <div class="pl-2">
          <div>
            hi,欢迎光临
          </div>
          <!-- <div class="d-flex j-start" style="">
            <router-link class="text-primary mr-2" to="/register">注册</router-link>
            <router-link class="text-primary" to="/login">登录</router-link>
          </div> -->
        </div>
      </div>
      <div class="text-center pt-2 d-flex j-sa a-center">
        <router-link to="/login">
          <Button size="middle" class="bg-danger text-white" block>登录</Button>
        </router-link>
        <router-link to="/register">
          <Button size="middle" block>注册</Button>
        </router-link>
      </div>
      <!-- <div>
        <div class="border-bottom mt-2 mb-1">
          最新
        </div>
        <div class="nowrap text-overflow mb-0 hover click" v-for="(h,i) in hot" :key="i" @click="detail(i)">
          <span class="text-primary">*</span> {{h.title}}
        </div>
      </div> -->
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
