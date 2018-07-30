<template>
  <div class="year-2018">
    <page-header></page-header>
    <Row style="background: #e3e8ee;padding:16px;">
      <Tabs type="card">
          <TabPane label="H" icon="happy-outline">
            <img src="../../assets/2018.jpeg" >
            <div class="weather-img">
              <img src="../../assets/weather2.svg">
            </div>
            <h5 class="title">终于去了迪士尼~~~</h5>
          </TabPane>
          <TabPane label="A" icon="earth">
            <img src="../../assets/2018-2.jpg"/>
            <div class="weather-img">
              <img src="../../assets/weather2.svg">
            </div>
            <h5 class="title">以后还要一起去更多的地方~~~</h5>
          </TabPane>
          <TabPane label="H" icon="planet">
            <img src="../../assets/2018-1.jpg" >
            <div class="weather-img">
              <img src="../../assets/weather2.svg">
            </div>
            <h5 class="title">然后给你拍很多照片~~~</h5>
          </TabPane>
          <TabPane label="H" icon="cube">
            <img src="../../assets/2018-3.jpg" >
            <div class="weather-img">
              <img src="../../assets/weather2.svg">
            </div>
            <h5 class="title">等老的时候再看，哈哈哈~~~</h5>
          </TabPane>
          <TabPane label="Y" icon="bowtie">
            <img  class="img-height" src="../../assets/2018-4.jpeg" >
          </TabPane>
      </Tabs>
    </Row>
    <page-footer class="footer-layout"></page-footer>
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
.footer-layout{
  position: fixed;
}
.ivu-row{
  margin: 20px auto;
}
img{
  width: 100%;
}
.img-height{
  height: 298px;
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
