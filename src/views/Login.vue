<template>
  <div class="" style="width: 70%;margin: 30px auto;">
    <div class="border-bottom pb-1 mb-1" style="border-width: 3px;"><span class="font-lg font-weight">账号登录</span></div>
    <a-form ref="ruleForm" :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
      <a-form-item ref="name" label="用户名" name="name" required><a-input v-model:value="form.name" /></a-form-item>
      <!-- <a-form-item ref="mail" label="邮箱" name="name" required><a-input v-model:value="form.mail" /></a-form-item> -->
      <a-form-item ref="pwd" label="登录密码" name="pwd" required><a-input-password v-model:value="form.pwd" /></a-form-item>
      <!-- <a-form-item ref="pwd2" label="确认密码" name="name" required><a-input v-model:value="form.pwd2" /></a-form-item> -->
      <a-form-item label="验证码" name="code" required>
        <a-input v-model:value="form.code" />
        <img src="../assets/images/code3.jpg" alt="">
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-checkbox v-model:checked="checked">
          下次自动登录
        </a-checkbox> <br>
        <a-button type="primary" @click="onSubmit">立即登录</a-button>
        <router-link to="/register" class="text-primary" style="margin-left: 20px;">免费注册</router-link>
        <!-- <a-button style="margin-left: 10px;" @click="resetForm">Reset</a-button> -->
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { Form, Radio, Input, Button, Checkbox } from 'ant-design-vue'

export default {
  components: {
    [Radio.Group.name]: Radio.Group,
    [Radio.Button.name]: Radio.Button,
    [Form.name]: Form,
    [Form.Item.name]: Form.Item,
    [Input.name]: Input,
    [Input.Password.name]: Input.Password,
    [Button.name]: Button,
    [Checkbox.name]: Checkbox
  },
  data () {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 5 },
      other: '',
      checked: true,
      form: {
        name: '',
        mail: '',
        pwd: '',
        pwd2: '',
        code: ''
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
  }
}
</script>
