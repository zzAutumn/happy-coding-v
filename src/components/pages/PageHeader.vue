<template>
  <Layout>
    <Header :style="{width: '100%',background: 'skyblue',color: '#fff'}" breakpoint="sm">
      <h1 class="page-title">Happy first anniversary</h1>
    </Header>
  </Layout>
</template>

<script>
export default {
  name: 'PageHeader'

}
</script>

<style scoped>
.page-title{
  text-align: center;
}
</style>
