<template>
  <Layout>
    <Content>
      <Row>
        <h2 class="timeline-title">Our Time Line</h2>
        <my-time-line></my-time-line>
      </Row>
    </Content>
  </Layout>
</template>

<script>
import MyTimeLine from '@/components/toolView/MyTimeLine'
export default {
  components: {
    MyTimeLine
  }
}
</script>

<style scoped>
.ivu-layout-content{
  background: #fff;
}
.timeline-title{
  margin: 10px;
}
</style>
