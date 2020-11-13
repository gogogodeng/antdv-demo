<template>
  <div class="home font">
    <div class="d-flex j-sb a-start" style="width:80%;margin:auto;">
      <div style="width:300px">
        <div class="py-2">
          <div class="font-mdg py-1 mr-5 border-bottom" v-for="t in types" :key="t">
            <router-link :to="'/list?name='+t" :key="t" class="d-block click hover w-100 h-100" :class="{active:$route.query.name == t}">{{t}}</router-link>
          </div>
        </div>
        <div>
          <Title title="最新"></Title>
          <CardList :list="list['最新']" name="最新" max="20"></CardList>
        </div>
      </div>
      <div style="flex:1">
        <br>
        <Swiper></Swiper>
        <Main></Main>
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
  }
}
</script>

<style lang="less" scoped>
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
