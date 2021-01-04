<template>
  <div class="home font">
    <div style="width: 80%;margin: auto;">
      <div style="margin-bottom: 20px;">
        <Swiper></Swiper>
      </div>

      <div class="d-flex j-sb a-start mb-2">
        <div class="d-flex j-sb a-center flex-wrap" style="width:100%;white-space: nowrap;overflow:hidden;height:160px">
          <div class="px-2 click" style="width: 20%;margin-bottom:10px" v-for="(t,index) in list['最新']" :key="t"
            @click="link(index)">
            <img :src="require('@/assets/'+t.img)" alt="" style="width:100%;height:130px">
            <div style="width:100%;overflow:hidden;text-overflow: ellipsis;">{{t.title}}</div>
          </div>
        </div>
      </div>

      <div class="d-flex j-sb a-center flex-wrap" style="white-space: nowrap;">
        <div class="border-default rounded px-2 bg-white mb-2 pb-2" style="width: 100%;" v-for="t in types" :key="t">
          <Title :title="t"></Title>
          <CardList :list="list[t]" :name="t" max=9></CardList>
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

  function getMobile() {
    var prefixArray = new Array("130", "131", "132", "133", "135", "137", "138", "170", "187", "189");
    var i = parseInt(10 * Math.random());
    var prefix = prefixArray[i];
    for (var j = 0; j < 8; j++) {
      prefix = prefix + Math.floor(Math.random() * 10);
    }
    return prefix
  }

  export default {
    name: 'Home',
    components: { Swiper, Main, CardList, Title },
    data() {
      return {
        types: data.types,
        list: data.list
      }
    },
    methods: {
      link(index) {
        this.$router.push('/detail?name=最新&index=' + index)
      }
    },
    created() {
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