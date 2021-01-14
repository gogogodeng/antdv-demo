<template>
  <div class="p-2 border-default" style="width: 80%;margin: 20px auto;">
    <div class="click hover text-center" @click="link">
      <img :src="require('@/assets/'+item.img)" style="width: 150px;height: 150px;" alt="">
    </div>
    <div class="pl-2 pt-2">
      <div class="font-mdg font-weight mb-1">
        <span class="click hover text-overflow w-100" @click="link">
          {{item.title}}
        </span>
      </div>
      <div class="text-danger font-lgm font-weight">
        ￥{{item.price}} <span class="font">{{ item.price !='面议'?'元':'' }}</span>
      </div>
      <!-- <div>{{item.desc}}</div> -->
      <div>新旧程度：{{item.isnew}}</div>
      <div>品牌：{{item.address}}</div>
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
