<template>
  <!-- <Anchor> -->
    <div class="nav">
      <div class="d-flex j-start font-md p-0" style="white-space: nowrap;">
        <div class="px-2 bg-primary text-white" style="min-width: 200px;">
          栏目分类
        </div>
        <div class="">
          <router-link to="/" class="d-block px-2 click hover w-100 h-100" active-class="active">首页</router-link>
        </div>
        <div class="" v-for="(t,i) in types" :key="t">
          <router-link v-if="i<5" :to="'/list?name='+t" :key="t" class="d-block px-2 click hover w-100 h-100" :class="{active:$route.query.name == t}">{{t}}</router-link>
        </div>
				<div class="">
					<a class="d-block px-2 click hover w-100 h-100" href="xy.html" target="_blank">用户协议</a>
				</div>
				<div class="">
					<a class="d-block px-2 click hover w-100 h-100" href="cs.html" target="_blank">安全监管措施</a>
				</div>
        <div class="">
					<a class="d-block px-2 click hover w-100 h-100" href="wq.html" target="_blank">维权中心</a>
				</div>
      </div>
    </div>
</template>

<script>
// import { Anchor } from 'ant-design-vue'
import data from '@/assets/js/data.js'

export default {
  components: {
    // Anchor
  },
  data () {
    return {
      types: data.types
    }
  }
}
</script>

<style lang="less" scoped>
  .nav {
    line-height: 40px;
    padding: 0 10%;
  }
  .active {
    color: var(--primary);
    border: none;
  }
</style>
