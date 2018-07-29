<template>
  <div class="year-2016">
    <page-header></page-header>
    <h2 class="title">
        毕业的成都行~~~
    </h2>
    <Carousel autoplay>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../../assets/2016.jpeg" >
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../../assets/2016-1.jpeg" >
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../../assets/2016-2.jpeg" >
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">
            <img src="../../assets/2016-3.jpeg" >
          </div>
        </CarouselItem>
    </Carousel>
    <div>
      <div class="weather-img">
        <img src="../../assets/weather.svg">
      </div>
      <h5 class="title">
        看了可爱的panda,游宽窄巷子,冒着暴雨爬峨眉~
      </h5>
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
.title{
  margin: 10px;
}
.demo-carousel{
  width: 100%;
  height: 280px;
}
.weather-img{
  width: 40px;
  height: 40px;
  margin: 10px;
}
img{
  width: 100%;
  height: 100%;
}
h5[class='title']{
  text-indent: 2em;
}
</style>
