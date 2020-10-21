<template>
  <div>
    <Item :item="item" :name="name" :index="index" v-for="(item,index) in list" :key="index"></Item>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'
import data from '@/assets/js/data.js'
// import { reactive, getCurrentInstance } from 'vue'

export default {
  components: {
    Item
  },
  data () {
    return {
      name: this.$route.query.name,
      list: data.list[this.$route.query.name]
    }
  },
  updated () {
    this.name = this.$route.query.name
    this.list = data.list[this.$route.query.name]
  },
  mounted () {
    window.scrollTo(0, 0)
  }
  // setup () {
  //   const { ctx } = getCurrentInstance()
  //   var name = ctx.$root.$route.query.name
  //   const state = reactive({
  //     list: data.list[name]
  //   })
  //   return {
  //     state
  //   }
  // }
}
</script>

<style>
</style>
