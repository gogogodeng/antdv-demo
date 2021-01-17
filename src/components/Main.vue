<template>
  <div class="main">
    <div class="d-flex a-start j-start flex-wrap">
      <div class="bg-white" v-for="t in types" :key="t" style="width: 25%;padding: 10px;">
        <Title :title="t"></Title>
        
          <div>
            <CardList :list="list[t]" :name="t"></CardList>
          </div>
        <!-- <hr> -->
        </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import CardList from '@/components/CardList.vue'
import data from '@/assets/js/data.js'

export default {
  components: {
    Title,
    CardList
  },
  data () {
    return {
      types: data.types,
      list: data.list
    }
  }
}
</script>

<style lang="less" scoped>
  .main {
    width: 80%;
    margin: 20px auto;
  }
</style>
