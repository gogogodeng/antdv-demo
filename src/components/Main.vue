<template>
  <div class="main">
    <template v-for="t in types" :key="t">
      <Title :title="t"></Title>
      <div class="d-flex j-start a-start">
        <div>
          <img :src="require('@/assets/'+typesimgs[t])" alt="" style="width: 185px;">
        </div>
        <div>
          <CardList :list="list[t]" :name="t"></CardList>
        </div>
      </div>
      <hr>
    </template>
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
      list: data.list,
      typesimgs: data.typesimgs
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
