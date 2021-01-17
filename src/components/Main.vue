<template>
  <div class="main">
    <div class="d-flex a-start j-start flex-wrap">
      <div class="bg-white" v-for="t in types" :key="t" style="width: 25%;padding: 10px;">
        <Title :title="t"></Title>
        
          <div>
            <CardList :list="list[t]" :name="t"></CardList>
          </div>
        <!-- <hr> -->
        </div>
    </div>
  </div>
</template>

<script>
import Title from '@/components/Title.vue'
import CardList from '@/components/CardList.vue'
import data from '@/assets/js/data.js'

let json = [{
					id: 101,
					title: '[营业员/促销/零售]直招酒水销售+包住+五险',
					info: [
						{
							key: '地址',
							value: '汉口'
						},
						{
							key: '福利',
							value: '包吃包住'
						}
					],
					img: ['image/zp/1.jpg'],
					desc: '<div class="des"> 岗位职责：<br>1、负责公司产品的销售及推广；<br>2、根据市场营销计划，完成部门销售指标；<br>3、开拓新市场,发展新客户,增加产品销售范围；<br>4、负责辖区市场信息的收集及竞争对手的分析；<br>5、负责销售区域内销售活动的策划和执行，完成销售任务；<br>6、管理维护客户关系以及客户间的长期战略合作计划。<br>任职资格：<br>1、1年以上销售行业工作经验，业绩突出者优先；<br>2、反应敏捷、表达能力强，具有较强的沟通能力及交际技巧，具有亲和力；<br>3、具备一定的市场分析及判断能力，良好的客户服务意识；<br>4、有责任心，能承受较大的工作压力；<br>5、有团队协作精神，善于挑战。 </div>',
					price: '3000元'
				},{
					id: 102,
					title: '[营业员/促销/零售]软件园网销社保双休',
					info: [
						{
							key: '地址',
							value: '汉口'
						},
						{
							key: '福利',
							value: '包吃包住'
						}
					],
					img: ['image/zp/2.jpg'],
					desc: '<div class="des"> 岗位职责：<br>1、负责公司产品的销售及推广；<br>2、根据市场营销计划，完成部门销售指标；<br>3、开拓新市场,发展新客户,增加产品销售范围；<br>4、负责辖区市场信息的收集及竞争对手的分析；<br>5、负责销售区域内销售活动的策划和执行，完成销售任务；<br>6、管理维护客户关系以及客户间的长期战略合作计划。<br>任职资格：<br>1、1年以上销售行业工作经验，业绩突出者优先；<br>2、反应敏捷、表达能力强，具有较强的沟通能力及交际技巧，具有亲和力；<br>3、具备一定的市场分析及判断能力，良好的客户服务意识；<br>4、有责任心，能承受较大的工作压力；<br>5、有团队协作精神，善于挑战。 </div>',
					price: '3000元'
				},{
					id: 103,
					title: '[营业员/促销/零售]手游推广GS包食宿5k',
					info: [
						{
							key: '地址',
							value: '汉口'
						},
						{
							key: '福利',
							value: '包吃包住'
						}
					],
					img: ['image/zp/3.jpg'],
					desc: '<div class="des"> 岗位职责：<br>1、负责公司产品的销售及推广；<br>2、根据市场营销计划，完成部门销售指标；<br>3、开拓新市场,发展新客户,增加产品销售范围；<br>4、负责辖区市场信息的收集及竞争对手的分析；<br>5、负责销售区域内销售活动的策划和执行，完成销售任务；<br>6、管理维护客户关系以及客户间的长期战略合作计划。<br>任职资格：<br>1、1年以上销售行业工作经验，业绩突出者优先；<br>2、反应敏捷、表达能力强，具有较强的沟通能力及交际技巧，具有亲和力；<br>3、具备一定的市场分析及判断能力，良好的客户服务意识；<br>4、有责任心，能承受较大的工作压力；<br>5、有团队协作精神，善于挑战。 </div>',
					price: '5000元'
				},{
					id: 104,
					title: '[营业员/促销/零售]汽车销售底薪5000包住',
					info: [
						{
							key: '地址',
							value: '汉口'
						},
						{
							key: '福利',
							value: '包吃包住'
						}
					],
					img: ['image/zp/4.jpg'],
					desc: '<div class="des"> 岗位职责：<br>1、负责公司产品的销售及推广；<br>2、根据市场营销计划，完成部门销售指标；<br>3、开拓新市场,发展新客户,增加产品销售范围；<br>4、负责辖区市场信息的收集及竞争对手的分析；<br>5、负责销售区域内销售活动的策划和执行，完成销售任务；<br>6、管理维护客户关系以及客户间的长期战略合作计划。<br>任职资格：<br>1、1年以上销售行业工作经验，业绩突出者优先；<br>2、反应敏捷、表达能力强，具有较强的沟通能力及交际技巧，具有亲和力；<br>3、具备一定的市场分析及判断能力，良好的客户服务意识；<br>4、有责任心，能承受较大的工作压力；<br>5、有团队协作精神，善于挑战。 </div>',
					price: '5000元'
        }]
      let newlist = []
        json.forEach(v=>{
          console.log(v)
          newlist.push({
            "title": v.title,
            "address": v.info[0].value,
            "img": v.img[0],
            "desc": v.desc,
            "price": v.price 
          })
        })
      
        console.log(JSON.stringify(newlist))

export default {
  components: {
    Title,
    CardList
  },
  data () {
    return {
      types: data.types,
      list: data.list
    }
  }
}
</script>

<style lang="less" scoped>
  .main {
    width: 80%;
    margin: 20px auto;
  }
</style>
