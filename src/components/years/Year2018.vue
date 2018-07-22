<template>
  <div class="year-2018">
    <page-header></page-header>
    <Row style="background: #e3e8ee;padding:16px;">
      <Tabs type="card">
          <TabPane label="H" icon="happy-outline">
            <img src="../../assets/2018.jpeg" >
            <p>终于去了迪士尼~~~</p>
          </TabPane>
          <TabPane label="A" icon="earth">
            <img src="../../assets/2018-2.jpg"/>
          </TabPane>
          <TabPane label="H" icon="planet">
            <img src="../../assets/2018-1.jpg" >
          </TabPane>
          <TabPane label="H" icon="cube">
            <img src="../../assets/2018-3.jpg" >
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
  height: 258px;
}
</style>
