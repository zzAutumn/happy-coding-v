import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Year2010 from '@/components/years/Year2010'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/year-2010',
      name: 'Year2010',
      component: Year2010
    }
  ]
})
