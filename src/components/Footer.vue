<template>
  <footer class="text-center border-top py-3 bg-light">
    <p>{{webinfo.webname}}</p>
    <p>{{webinfo.address}}</p>
    <p><a :href="webinfo.beianlink">{{webinfo.beian}}</a> &nbsp;&nbsp;客服电话：13157177690 &nbsp;&nbsp;/&nbsp;&nbsp; 投诉邮箱：69503697@qq.com</p>
		<p>
			<a href="xy.html" target="_blank">用户协议</a> &nbsp;&nbsp;&nbsp;&nbsp;
			<a href="cs.html" target="_blank">安全监管措施</a>
		</p>
  </footer>
</template>

<script>
import data from '@/assets/js/data.js'

export default {
  data () {
    return {
      webinfo: data.webinfo
    }
  }
}
</script>

<style scoped>
  p {
    padding: 0;
    margin: 0;
  }
</style>
