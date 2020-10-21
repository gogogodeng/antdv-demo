<template>
  <div class="header">
    <div class="d-flex j-start a-end" style="white-space: nowrap;">
      <div class="font-big font-weight text-muted">
        {{data.webtitle}}
      </div>
      <div class="d-flex text-center" style="margin-left: 100px;height: 40px;">
        <input placeholder="输入搜索信息" type="text" style="line-height: 30px;padding: 0 10px;width: 400px;" class="input font-md border-primary">
        <div class="d-flex j-sa a-center p-1 px-2 border-default click bg-primary text-white border-primary">
          <SearchOutlined />
          <div class="ml-1">
            搜索
          </div>
        </div>
      </div>
      <div class="" style="margin-left: 100px;">
        <div class="text-center" style="width: 200px;">
          <div class="p-1 px-2 border-default click bg-primary text-white border-primary text-center" @click="link">
            <SearchOutlined />
            <div class="ml-1 d-inline-block">
              免费发布信息
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchOutlined } from '@ant-design/icons-vue'
import data from '@/assets/js/data.js'

export default {
  components: {
    SearchOutlined
  },
  data () {
    return {
      data: data.webinfo
    }
  },
  methods: {
    link () {
      this.$router.push('/publish')
    }
  }
}
</script>

<style lang="less" scoped>
  .header {
    width: 80%;
    margin: 0px auto 20px auto;
  }
</style>
