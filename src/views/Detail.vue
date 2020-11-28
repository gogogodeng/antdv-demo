<template>
  <div class="d-flex a-start" style="width: 80%;margin: 30px auto;">
    <div class="flex-4 border-default p-3">
      <div class="font-lgm font-weight">{{detail.title}}</div>
      <div class="pb-2 border-bottom"></div>
      <div class="p-3 d-flex j-sb a-start">
        <div>
          <img :src="require('@/assets/'+detail.img)" alt="" style="width: 200px;height: 200px;">
        </div>
        <div class="flex-1 ml-2 font-mdg text-left">
          <div class="mb-2" v-if="detail.brand">
            {{detail.brand}}
          </div>
          <div class="mb-2 text-danger">
            价格：{{detail.price}} <span class="font">{{ detail.price !='面议'?'元':'' }}</span>
          </div>
          <div class="mb-2">
            {{detail.isnew}}
          </div>
          <div class="mb-2">
            地址：{{detail.address}}
          </div>
          <div class="mb-2">
            <a-button type="primary" size="large" @click="onSubmit">
              <PhoneOutlined />电话联系TA</a-button>
            <a-button type="warning" size="large" class="ml-3 bg-warning text-white" @click="onSubmit">
              <WechatOutlined />微聊</a-button>
            <p class="m-1 text-warning font">友情提醒您：让你提前汇款，或者价格明显低于市价，均有骗子嫌疑，不要轻易相信。</p>
          </div>
        </div>
      </div>
      <div class="pb-2 border-bottom font-mdg font-weight">
        详情
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
    <div class="flex-1 ml-3 p-1 border-default">
      <div class="border-bottom pb-1 text-secondary font-weight">
        相关分类
      </div>
      <div class="d-flex j-start a-center p-2 flex-wrap">
        <div class="text-center w-50 mb-1" style="white-space: nowrap;" v-for="t in types" :key="t">
           <router-link :to="'/list?name='+t" class="click hover">{{t}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue'
import { PhoneOutlined, WechatOutlined } from '@ant-design/icons-vue'
import data from '@/assets/js/data.js'

export default {
  components: {
    PhoneOutlined,
    WechatOutlined,
    [Button.name]: Button
  },
  data () {
    return {
      detail: data.list[this.$route.query.name][this.$route.query.index],
      types: data.types
    }
  },
  mounted () {
    window.scrollTo(0, 0)
  }
}
</script>

<style>
</style>
