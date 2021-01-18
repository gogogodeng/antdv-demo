<template>
  <div>
    <div class="w-100 bg-dark text-white py-1">
      <div class="d-flex j-sa a-center dd" style="width: 85%;margin: auto;">
        <div class="d-flex a-center j-center">
          <div>
            <i class="i1"></i>
          </div>
          <div>
            <h3>正品保障</h3>
            <p>正品保障、提供发票</p>
          </div>
        </div>
        <div class="d-flex a-center j-center">
          <div>
            <i class="i2"></i>
          </div>
          <div>
            <h3>急速物流</h3>
            <p>如约送货、送货入户</p>
          </div>
        </div>
        <div class="d-flex a-center j-center">
          <div>
            <i class="i3"></i>
          </div>
          <div>
            <h3>售后无忧</h3>
            <p>退换无忧、维修无忧</p>
          </div>
        </div>
        <div class="d-flex a-center j-center">
          <div>
            <i class="i4"></i>
          </div>
          <div>
            <h3>特色服务</h3>
            <p>专属客户在线服务</p>
          </div>
        </div>
      </div>
    </div>
    <footer class="text-center border-top py-3 bg-light">
      <p>{{webinfo.webname}}</p>
      <p>{{webinfo.address}}</p>
      <p><a :href="webinfo.beianlink">{{webinfo.beian}}</a> &nbsp;&nbsp;客服电话：027-86645212 &nbsp;&nbsp;/&nbsp;&nbsp; 投诉邮箱：liuhe@blueraise.cn</p>
      <p>
        <a href="xy.html" target="_blank">用户协议</a> &nbsp;&nbsp;&nbsp;&nbsp;
        <a href="cs.html" target="_blank">安全监管措施</a>
      </p>
    </footer>
  </div>
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

<style lang="less" scoped>
  p {
    padding: 0;
    margin: 0;
  }
  h3 {
    color: #fff;
  }
  .i1 {
    width: 50px;
    height: 50px;
    display: inline-block;
    background: url(../assets/images/inco.png) -6px -32px;
    margin: 15px;
    margin-left: 0px;
  }
  .i2 {
    width: 50px;
    height: 50px;
    display: inline-block;
    background: url(../assets/images/inco.png) -81px -32px;
    margin: 15px;
    margin-left: 100px;
  }
  .i3 {
    width: 50px;
    height: 50px;
    display: inline-block;
    background: url(../assets/images/inco.png) -161px -32px;
    margin: 15px;
    margin-left: 100px;
  }
  .i4 {
    width: 50px;
    height: 50px;
    display: inline-block;
    background: url(../assets/images/inco.png) -241px -32px;
    margin: 15px;
    margin-left: 100px;
  }
</style>
