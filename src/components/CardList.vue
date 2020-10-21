<template>
  <div class="d-flex j-sb">
    <div style="width: 25%;" v-if="side=='left'">
      <img :src="sideurl" alt="">
    </div>
    <div class="d-flex j-sb a-center flex-wrap flex-1">
      <div class="text-center click mb-1" :style="{width: 100/(max/2) +'%' }" v-for="(item,index) in list" :key="index" @click="link(index)">
        <div v-if="index<=max-1">
          <img :src="require('@/assets/'+item.img)" alt="" style="width: 85%;height: 160px;">
          <div class="text-center" style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{item.title}}</div>
        </div>
      </div>
    </div>
    <div style="width: 25%;" v-if="side=='right'">
      <img :src="sideurl" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    name: {
      type: String,
      default: ''
    },
    max: {
      type: Number,
      default: 8
    },
    side: {
      type: String,
      default: 'none'
    },
    sideurl: {
      type: String,
      default: ''
    }
  },
  methods: {
    link (index) {
      this.$router.push('/detail?name=' + this.name + '&index=' + index)
    }
  }
}
</script>

<style>
</style>
