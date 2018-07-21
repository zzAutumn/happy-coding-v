<template>
  <div class="future">
    <page-header></page-header>
    <div  class="card-container" style="background:#eee;padding: 20px">
      <Card :bordered="false">
          <p slot="title">谈谈未来</p>
          <p> </p>
      </Card>
    </div>
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
.card-container{
  margin: 10px auto;
}
</style>
