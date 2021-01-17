<template>
  <div class="m-auto text-center" style="width: 80%;min-height: 500px;">
    <div style="margin:100px auto;" v-if="!cartlist.length">
      <p class="font-lg" >购物车内暂时没有商品</p>
    </div>
    <div class="mt-1 d-flex j-end" v-if="cartlist.length">
      <Button style="width: 100px;" @click="clear">清空购物车</Button>
    </div>
    <table class="mt-1" style="width: 100%;background-color: rgb(247, 247, 247);" v-if="cartlist.length">
      <tr style="background-color:  rgb(238, 238, 238);">
        <td class="p-1 border-default">商品</td>
        <td class="p-1 border-default">单价</td>
        <td class="p-1 border-default">购买数量</td>
        <td class="p-1 border-default">小计</td>
        <td class="p-1 border-default">操作</td>
      </tr>
      <tr class="p-2" v-for="(c,index) in cartlist" :key="index">
        <td class="d-flex j-start a-start px-2 py-1 a-center" style="max-width: 500px;height: 100px;">
          <img :src="require('@/assets/'+c.img)" width="80" height="80" alt="" srcset="">
          <div style="flex: 1 ;padding-left: 15px;width: 100%; height: 100%;overflow: hidden;">
            {{c.title}} 
          </div>
        </td>
        <td style="width: 200px;">￥{{c.price}}</td><td style="width: 200px;">
          <!-- <input type="number" :value="c.num" style="text-align: center;width: 80px;" > -->
          <InputNumber :min="1" v-model:value="c.num" @change="numchange"></InputNumber>
        </td>
        <td style="width: 200px;">￥{{ c.price * c.num }}</td><td>
          <span class="hover click" @click="del(c)">删除</span>
        </td>
      </tr>
    </table>
    <div class="py-1 d-flex j-end" v-if="cartlist.length">
      <div>一共{{total.max}}件商品 &nbsp;&nbsp;&nbsp;&nbsp; 总计: ￥ {{total.money}} </div> 
    </div>
    <div class="d-flex j-end" v-if="cartlist.length">
      <router-link to="/">
        <Button style="width: 100px;margin-right: 10px;">继续购物</Button>
      </router-link>
        <Button style="width: 100px;" @click="toend">去结算</Button>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import { Button,InputNumber } from 'ant-design-vue'

  export default {
    components: {
      Button,
      InputNumber
    },
    computed: {
      ...mapState([ 'cartlist' ]),
      total() {
        let money = 0, max = 0
        this.cartlist.forEach(c => {
          money += c.price * c.num
          max += c.num
        });
        return {money,max}
      }
    },
    methods:{
      del(item) {
        this.$store.commit('DEL_CART',item)
      },
      clear() {
        this.$store.commit('CLEAR_CART',item)
      },
      numchange(num) {
        console.log(num)
      },
      toend() {
        debugger
        if(this.$store.state.haslogin = true) {
          this.$router.push('/confirm?money='+this.total.money)
        } else {
          this.$router.push('/login')
        }
      }
    },
    created() {

    },
  }
</script>
<style>

</style>