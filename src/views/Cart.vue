<template>
  <div class="m-auto text-center" style="width: 80%;min-height: 500px;">
    <div class="mt-1 d-flex j-end">
      <button style="width: 100px;">清空购物车</button>
    </div>
    <table class="mt-1" style="width: 100%;background-color: rgb(247, 247, 247);">
      <tr style="background-color:  rgb(238, 238, 238);">
        <td class="p-1 border-default">商品</td>
        <td class="p-1 border-default">单价</td>
        <td class="p-1 border-default">购买数量</td>
        <td class="p-1 border-default">小计</td>
        <td class="p-1 border-default">操作</td>
      </tr>
      <tr class="p-2">
        <td class="d-flex j-start a-start px-2 py-1 a-center" style="max-width: 500px;height: 100px;">
          <img src="../assets/images/type1/1.jpg" width="80" height="80" alt="" srcset="">
          <div style="flex: 1 ;padding-left: 15px;width: 100%; height: 100%;overflow: hidden;">商品名称Lorem ipsum dolor sit amet consectetur </div>
        </td><td style="width: 200px;">￥11.00</td><td style="width: 200px;">
          <input type="number" value="10" style="text-align: center;width: 80px;">
        </td><td style="width: 200px;">￥110.00</td><td>删除</td>
      </tr>
    </table>
    <div class="py-1 d-flex j-end">
      <div>一共10件商品 &nbsp;&nbsp;&nbsp;&nbsp; 总计: ￥ 110.00 </div> 
    </div>
    <div class="d-flex j-end">
      <button style="width: 100px;margin-right: 10px;">继续购物</button>
      <button style="width: 100px;">去结算</button>
    </div>
  </div>
</template>
<script>

</script>
<style>

</style>