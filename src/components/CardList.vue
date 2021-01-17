<template>
  <div class="d-flex j-sb">
    <div style="width: 25%;" v-if="side=='left'">
      <img :src="sideurl" alt="">
    </div>
    <div class="j-sb a-center flex-wrap flex-1">
      <div class="text-left click mb-1" style="width: 100%;" v-for="(item,index) in list" :key="index" @click="link(index)">
        <div class="w-100" v-if="index<=max-1">
          <div class="d-flex w-100 hover">
            <div class="p">
              <img :src="require('@/assets/'+item.img)" alt="" style="width: 50px;height: 50px;">
            </div>
            
            <div class="text-left ">
              <div style="width: 200px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">{{item.title}}</div>
              <div class="text-light-muted mt-1"> {{ index<=3?'21-01-17':'21-01-15' }} </div>
            </div>
          </div>
          
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
      default: 5
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

<style scoped>
  .hover:hover {
    background-color: rgba(226, 226, 226,0.6);
  }
</style>
