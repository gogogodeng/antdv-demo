<template>
  <Anchor>
    <div class="nav bg-primary text-white">
      <div class="d-flex j-start font-md p-0" style="white-space: nowrap;">
        <div class="border-right">
          <router-link to="/" class="d-block px-2 text-white click hover w-100 h-100" active-class="active">首页</router-link>
        </div>
        <div class="border-right" v-for="t in types" :key="t">
          <router-link :to="'/list?name='+t" :key="t" class="d-block px-2 text-white click hover w-100 h-100" :class="{active:$route.query.name == t}">{{t}}</router-link>
        </div>
				<div class="border-right">
					<a class="d-block px-2 text-white click hover w-100 h-100" href="xy.html" target="_blank">用户协议</a>
				</div>
				<div class="border-right">
					<a class="d-block px-2 text-white click hover w-100 h-100" href="cs.html" target="_blank">安全监管措施</a>
				</div>
        <div class="border-right">
        	<a class="d-block px-2 text-white click hover w-100 h-100" href="wq.html" target="_blank">维权中心</a>
        </div>
      </div>
    </div>
  </Anchor>
</template>

<script>
import { Anchor } from 'ant-design-vue'
import data from '@/assets/js/data.js'

export default {
  components: {
    Anchor
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
    background-color: var(--secondary);
    border: none;
  }
</style>
