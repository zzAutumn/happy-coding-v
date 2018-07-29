<template>
  <div class="future">
    <page-header></page-header>
    <div  class="card-container" style="background:#eee;padding: 20px">
      <Card :bordered="false">
          <p slot="title">谈谈未来</p>
          <div class="weather-img">
            <img src="../../assets/weather3.svg">
          </div>
          <h5 class="title">en~~~</h5>
          <h5></h5>
      </Card>
    </div>
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
.card-container{
  margin: 10px auto;
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
