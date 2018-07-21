<template>
  <div class="hello">
    <page-header></page-header>
    <page-content></page-content>
  </div>
</template>

<script>
import PageHeader from '@/components/pages/PageHeader'
import PageContent from '@/components/pages/PageContent'
export default {
  name: 'HelloWorld',
  components: {
    PageHeader,
    PageContent
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
