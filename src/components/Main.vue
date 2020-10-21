<template>
  <div class="main">
    <template v-for="t in types" :key="t">
      <Title :title="t"></Title>
      <CardList :list="list[t]" :name="t"></CardList>
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
