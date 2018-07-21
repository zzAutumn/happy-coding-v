<template>
  <div class="year-2010">
    <page-header></page-header>
    <Card>
      <p slot="title">
        O(∩_∩)O哈哈~熟悉的背影~~
      </p>
      <div>
        <img src="../../assets/2010.jpeg" >
        <img src="../../assets/2010-1.jpeg" >
        <p>高中的同桌生活，时而想起依旧觉得很开心。</p>
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
</style>
