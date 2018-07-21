<template>
  <div class="year-2017">
    <page-header></page-header>
    <Collapse accordion v-model="extend">
      <Panel name="1">
          One
          <p slot="content">
            <img class="img-rotate" src="../../assets/2017.jpeg" >
            <br>
            <span>(～￣▽￣)～</span>
          </p>
      </Panel>
      <Panel name="2">
          Two
          <p slot="content">
            <img class="img-rotate" src="../../assets/2017-1.jpeg" >
            <br>
            <span>O(∩_∩)O哈哈~</span>
          </p>
      </Panel>
      <Panel name="3">
          Three
          <p slot="content">
            <img src="../../assets/2017-2.jpeg" >
            <br>
            <span>(*^▽^*)</span>
          </p>
      </Panel>
      <Panel name="4">
          Four
          <p slot="content">
            <img class="img-rotate" src="../../assets/2017-3.jpeg" >
            <br>
            <span>(～￣▽￣)～我跟毛主席照张相</span>
          </p>
      </Panel>
    </Collapse>
  </div>
</template>

<script>
import PageHeader from '@/components/pages/PageHeader'
export default {
  components: {
    PageHeader
  },
  data () {
    return {
      extend: 1
    }
  }
}
</script>

<style scoped>
.ivu-collapse{
  margin: 20px auto;
}
img{
  width: 100%;
  height: 341px;
}
.img-rotate{
  transform: rotate(90deg);
}
</style>
