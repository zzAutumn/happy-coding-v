<template>
  <Layout>
    <Footer>
      <div class="footer-btn">
        <Button type="ghost" size="small">
          <Icon type="chevron-left"></Icon>
          Backward
        </Button>
      </div>
      <div class="layout-footer-center">
        <p>
          CXL & YJJ @2010-2018
        </p>
      </div>  
    </Footer>  
  </Layout>  
</template>

<script>
export default {

}
</script>

<style scoped>
.ivu-layout{
  height: 65px;
}
.ivu-layout-footer{
  position: fixed;
  width: 100%;
  bottom: 0;
  padding: 10px;
  margin-top: 20px;
}
.layout-footer-center{
  text-align: center;
}
</style>
