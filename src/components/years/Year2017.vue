<template>
  <div class="year-2017">
    <page-header></page-header>
    <Collapse accordion>
      <Panel name="1">
          One
          <p slot="content">
            <img class="img-rotate" src="../../assets/2017.jpeg" >
          </p>
      </Panel>
      <Panel name="2">
          Two
          <p slot="content">
            <img class="img-rotate" src="../../assets/2017-1.jpeg" >
          </p>
      </Panel>
      <Panel name="3">
          Three
          <p slot="content">
            <img src="../../assets/2017-2.jpeg" >
          </p>
      </Panel>
      <Panel name="4">
          Four
          <p slot="content">
            <img class="img-rotate" src="../../assets/2017-3.jpeg" >
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
