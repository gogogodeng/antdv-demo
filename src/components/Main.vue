<template>
  <div class="main">
    <div class="d-flex j-sb a-center flex-wrap" style="white-space: nowrap;">
      <div style="width: 33%;" v-for="t in showtypes" :key="t">
        <Title :title="t"></Title>
        <CardList :list="list[t]" :name="t"></CardList>
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
  props: ['showtypes'],
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
    width: 100%;
    margin: 0px auto;
  }
</style>
