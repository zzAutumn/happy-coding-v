<template>
  <div class="year-2017">
    <page-header></page-header>
    <Collapse accordion v-model="extend" @on-change="click">
      <Panel name="1">
          One
          <p slot="content">
            <img class="img-rotate" src="../../assets/2017.jpg" >
            <br>
            <span>(～￣▽￣)～</span>
          </p>
      </Panel>
      <Panel name="2">
          Two
          <p slot="content">
            <img class="img-rotate" src="../../assets/2017-1.jpg" >
            <br>
            <span>O(∩_∩)O哈哈~</span>
          </p>
      </Panel>
      <Panel name="3">
          Three
          <p slot="content">
            <img src="../../assets/2017-2.jpg" >
            <br>
            <span>(*^▽^*)</span>
          </p>
      </Panel>
      <Panel name="4">
          Four
          <p slot="content">
            <img class="img-rotate" src="../../assets/2017-3.jpg" >
            <br>
            <span>(～￣▽￣)～我跟毛主席照张相</span>
          </p>
      </Panel>
    </Collapse>
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
  },
  data () {
    return {
      extend: [1],
      spinShow: true,
      test: false
    }
  }
}
</script>

<style scoped>
.footer-layout{
  position: fixed;
}
.ivu-collapse{
  margin: 20px auto;
}
img{
  width: 100%;
  height: 341px;
}
/* .img-rotate{
  transform: rotate(180deg);
} */
</style>
