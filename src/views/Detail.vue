<template>
  <div class="" style="width: 80%;margin: 30px auto;">
    <div class="d-flex a-start">
      <div>
        <img :src="require('@/assets/'+detail.img)" alt="" style="width: 300px;height: 300px;">
      </div>
      <div class="flex-4 ml-3">
        <div class="font-lgm font-weight">{{detail.title}}</div>
        <div class="pb-2 border-bottom"></div>
        <div class="py-2 d-flex j-sb a-start">
          <div class="flex-1 font text-left">
            <div class="mb-2 font-mdg text-danger">
              价格：￥{{detail.price}}
            </div>
            <div class="mb-2" v-if="detail.brand">
              品牌：{{detail.brand}}
            </div>
            <div class="mb-2">
              库存：{{detail.isnew}}
            </div>
            <div class="mb-2">
              销量：{{detail.address}}
            </div>
            <div class="mb-2">
              购买数量：<InputNumber :min="1" v-model:value="num"></InputNumber>
              &nbsp;&nbsp;&nbsp;&nbsp; 库存 126124 件
            </div>
            <div class="mb-2">
              <a-button size="large" class="bg-warning text-white" @click="onSubmit">
                立 即 购 买</a-button>
              <a-button type="danger" size="large" class="ml-3 bg-primary text-white" @click="onSubmit">
                加入购物车</a-button>
              <p class="m-1 text-warning font">友情提醒您：让你提前汇款，或者价格明显低于市价，均有骗子嫌疑，不要轻易相信。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex j-start a-start">
      <div class="flex-1 p-1 border-default">
        <div class="border-bottom pb-1 text-secondary font-weight">
          商家信息
        </div>
        <div class="text-gray mt-2">
          <p>商家名称：xxx</p>
          <p>描述相符：5 分</p>
          <p>服务态度：5 分</p>
          <p>发货速度：5 分</p>
          <p>联系方式：xxx</p>
        </div>
      </div>
      <div class="flex-4 p-2">
        <div class="pb-2 border-bottom font-mdg font-weight ">
          商品详情
        </div>
        <div class="p-3 font-md">
          {{detail.desc}}
          <div class="mt-3">
            <img :src="require('@/assets/'+detail.img)" alt="" style="width: 300px;">
          </div>
          <div class="text-warning font-md my-2">
            小贴士：本页信息由用户及第三方发布，真实性、合法性由发布人负责，请仔细甄别。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button,InputNumber } from 'ant-design-vue'
import { PhoneOutlined, WechatOutlined } from '@ant-design/icons-vue'
import data from '@/assets/js/data.js'

export default {
  components: {
    PhoneOutlined,
    WechatOutlined,
    [Button.name]: Button,
    InputNumber
  },
  data () {
    return {
      detail: data.list[this.$route.query.name][this.$route.query.index],
      types: data.types,
      num:1
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  },
  methods: {
    onSubmit() {
      this.$router.push('/cart')
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
