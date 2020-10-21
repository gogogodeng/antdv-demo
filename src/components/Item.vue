<template>
  <div class="d-flex border-default" style="height: 150px;width: 80%;margin: 20px auto;">
    <div class="flex-1 click hover" @click="link">
      <img :src="require('@/assets/'+item.img)" style="width: 100%;height: 100%;" alt="">
    </div>
    <div class="flex-4 pl-2 pt-2">
      <div class="font-mdg font-weight mb-1">
        <span class="click hover" @click="link">{{item.title}}</span>
      </div>
      <div>{{item.desc}}</div>
      <div>新旧程度：{{item.isnew}}</div>
      <div>地区：{{item.address}}</div>
    </div>
    <div class="flex-1 text-right text-danger font-lgm font-weight p-2">
      {{item.price}} <span class="font">{{ item.price !='面议'?'元':'' }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'name', 'index'],
  methods: {
    link () {
      this.$router.push('/detail?name=' + this.name + '&index=' + this.index)
    }
  }
}
</script>

<style>
</style>
