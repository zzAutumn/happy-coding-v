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
    <h3 class="title">
      看了可爱的panda,游宽窄巷子,冒着暴雨爬峨眉~
    </h3>
  </div>
</template>

<script>
import PageHeader from '@/components/pages/PageHeader'
export default {
  components: {
    PageHeader
  }
}
</script>

<style scoped>
.title{
  margin: 10px;
}
.demo-carousel{
  width: 100%;
  height: 280px;
}
img{
  width: 100%;
  height: 100%;
}
</style>
