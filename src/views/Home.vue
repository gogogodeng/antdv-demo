<template>
  <div class="home font">
    <div class="d-flex j-sb a-start" style="width:80%;margin:0 auto 20px auto;">
      <div style="width:400px;padding-right:15px">
        <Swiper></Swiper>
      </div>
      <div style="flex:1">
        <div class="d-flex j-sb a-center flex-wrap" style="white-space: nowrap;">
          <div class="border-default rounded px-2 bg-white" style="width: 49%;" v-for="t in first" :key="t">
            <Title :title="t"></Title>
            <CardList :list="list[t]" :name="t"></CardList>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex j-sb a-start" style="width:80%;margin:auto;">      
      <div class="d-flex j-sb a-center flex-wrap" style="width:100%;white-space: nowrap;">
        <div class="border-default rounded px-2 pb-3 bg-white" style="width: 32.8%;" v-for="t in second" :key="t">
          <Title :title="t"></Title>
          <CardList :list="list[t]" :name="t"></CardList>
        </div>
      </div>
    </div>
    <div class="d-flex j-sb a-start" style="width:80%;margin:20px auto 0 auto;">      
      <div class="d-flex j-sb a-center flex-wrap" style="width:100%;white-space: nowrap;overflow:hidden;height:140px">
        <div class="px-2" style="width: 20%;margin-bottom:10px" v-for="t in list['最新']" :key="t">
          <img :src="require('@/assets/'+t.img)" alt="" style="width:100%;height:130px">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from '@/components/Swiper.vue'
import Main from '@/components/Main.vue'
import CardList from '@/components/CardList.vue'
import data from '@/assets/js/data.js'
import Title from '@/components/Title.vue'

export default {
  name: 'Home',
  components: { Swiper, Main, CardList, Title },
  data () {
    return {
      types: data.types,
      list: data.list
    }
  },
  computed:{
    first() {
      return this.types.filter(f=>{
        return f == '房屋信息' || f == '最新'
      })
    },
    second() {
      return this.types.filter(f=>{
        return f == '台式电脑' || f == '笔记本' || f == '数码相机'
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .home {
    padding: 20px 0;
    background: #eeeeee;
  }
  .border-bottom {
    position: relative;
  }
  .border-bottom::after {
    content: '';
    font-size: 24px;
    position: absolute;
    right: 0;
    top: 40%;
    color: #CECECE;
    width: 10px;
    height: 10px;
    background: url(../assets/images/sidebar_01.jpg) no-repeat center;
  }
</style>
