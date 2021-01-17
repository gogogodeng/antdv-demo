<template>
  <div class="" style="width: 70%;margin: 30px auto;">
    <div class="border-bottom pb-1 mb-1" style="border-width: 3px;"><span class="font-lg font-weight">结算</span></div>
    <div class="d-flex j-start a-start">
      <div class="flex-3">
        <a-form ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
          
          <a-form-item ref="mail" label="邮寄地址" name="mail" required><a-input v-model:value="form.mail" /></a-form-item>
          <a-form-item ref="type" label="类型" name="type">
            <a-radio-group v-model:value="form.radiovalue">
              <a-radio value="1" key="1" checked>{{ '在线支付' }}</a-radio>
              <a-radio value="2" key="2">{{ '货到付款' }}</a-radio>
            </a-radio-group>
          </a-form-item>
          <!-- <a-form-item label="上传图片">
            <a-upload-dragger name="file" :multiple="true" action="https://www.mocky.io/v2/5cc8019d300000980a055e76" @change="handleChange">
              <p class="ant-upload-drag-icon"><inbox-outlined /></p>
              <p class="ant-upload-text">点击或拖拽文件到这里上传</p>
              <p class="ant-upload-hint">支持单张文件上传</p>
            </a-upload-dragger>
          </a-form-item> -->
          <a-form-item ref="desc" label="备注" name="desc"><textarea class="border-default" name="" id="" cols="34" rows="3" :value="form.desc"></textarea></a-form-item>
          <a-form-item ref="phone" label="电话" name="phone" required><a-input v-model:value="form.phone" /></a-form-item>
          <!-- <a-form-item ref="wx" label="微信" name="wx" required><a-input v-model:value="form.wx" /></a-form-item> -->
          <!--     <a-form-item ref="pwd" label="登录密码" name="pwd" required><a-input-password v-model:value="form.pwd" /></a-form-item>
              <a-form-item ref="pwd2" label="确认密码" name="pwd2" required><a-input-password v-model:value="form.pwd2" /></a-form-item> -->
          <!-- <a-form-item label="验证码" name="code" required>
            <a-input v-model:value="form.code" />
            <img src="../assets/images/code.jpg" alt="" />
          </a-form-item> -->
          <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
            <label style="margin-right: 20px;font-size: 20px;" for=""> 总计金额 {{money}} </label> 
            <a-button type="primary" @click="onSubmit">立即购买</a-button>
            <!-- <a-button style="margin-left: 10px;" @click="resetForm">Reset</a-button> -->
          </a-form-item>
        </a-form>
      </div>
      <div class="flex-1">

      </div>
    </div>
  </div>
</template>
<script>
import { InboxOutlined } from '@ant-design/icons-vue'
import { Form, Radio, Input, Button, Upload } from 'ant-design-vue'
import data from '@/assets/js/data.js'

export default {
  components: {
    InboxOutlined,
    [Radio.name]: Radio,
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button,
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Input.Password.name]: Input.Password,
    [Button.name]: Button,
    [Upload.Dragger.name]: Upload.Dragger
  },
  data () {
    return {
      radiolist: data.types,
      labelCol: { span: 4 },
      wrapperCol: { span: 8 },
      other: '',
      money: 0,
      form: {
        name: '',
        mail: '',
        pwd: '',
        pwd2: '',
        code: '',
        radiovalue: '1',
        desc: '',
        new: '',
        type: '',
        phone: '',
        wx: ''
      },
      rules: {
        name: [{ required: true, message: 'Please input Activity name', trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }],
        region: [{ required: true, message: 'Please select Activity zone', trigger: 'change' }],
        date1: [{ required: true, message: 'Please pick a date', trigger: 'change', type: 'object' }],
        type: [
          {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change'
          }
        ],
        resource: [{ required: true, message: 'Please select activity resource', trigger: 'change' }],
        desc: [{ required: true, message: 'Please input activity form', trigger: 'blur' }]
      }
    }
  },
  methods: {
    onSubmit () {
      // this.$refs.ruleForm
      //   .validate()
      //   .then(() => {
      //     console.log('values', this.form)
      //   })
      //   .catch(error => {
      //     console.log('error', error)
      //   })
    },
    resetForm () {
      this.$refs.ruleForm.resetFields()
    }
  },
  created() {
    this.money = this.$route.query.money
  }
}
</script>
