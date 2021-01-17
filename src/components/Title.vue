<template>
  <div class="my-2">
    <div class="title d-flex j-sb a-center">
      <div class="subtitle position-relative">
        <div class="position-absolute" style="white-space: nowrap;">
          <div class="text-left">
            {{title}}
          </div>
        </div>
      </div>
      <div class="more bg-light rounded font text-muted click">
        <div class="d-inline-block" @click="link">更多</div>
        <!-- <RightOutlined /> -->
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
import { RightOutlined } from '@ant-design/icons-vue'
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  components: {
    RightOutlined
  },
  methods: {
    link () {
      this.$router.push('/list?name=' + this.title)
    }
  }
}
</script>

<style lang="less" scoped>
  .title {
    font-size: 20px;
    font-weight: bold;
  }
  .subtitle {
    border-width: 6px;
    padding-bottom: 5px;
    width: 30px;
    height: 30px;
    > div {
      white-space: nowrap;
      top: -2px;
      left: 5px;
    }
  }
  .more {
    padding: 3px 20px;
  }
  hr {
    height: 0px;
    border-color: #f6fafc;
    border-width: .5px;
  }
</style>
