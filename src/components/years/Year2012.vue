<template>
  <div class="year-2012">
    <page-header></page-header>
    <Card>
      <p slot="title">
        大学的生活
      </p>
      <div>
        <img src="../../assets/2012.jpeg" >
        <img src="../../assets/2012-1.jpeg" >
        <div class="weather-img">
          <img src="../../assets/weather4.svg">
        </div>
        <h5 class="title">我在哈尔滨，你在重庆，每年最高兴最期待的是寒暑假可以和你还有丹哥老大一起约~~</h5>
      </div>
    </Card>
    <page-footer></page-footer>
  </div>
</template>

<script>
import PageHeader from '@/components/pages/PageHeader'
import PageFooter from '@/components/pages/PageFooter'
export default {
  components: {
    PageHeader,
    PageFooter
  }
}
</script>

<style scoped>
.ivu-card{
  width: 80%;
  margin: 20px auto;
}
img{
  width: 100%;
}
.weather-img{
  width: 40px;
  height: 40px;
}
.weather-img > img{
  width: 100%;
  height: 100%;
}
h5[class='title']{
  text-indent: 2em;
}
</style>
