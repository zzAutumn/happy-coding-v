import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Year2010 from '@/components/years/Year2010'
import Year2012 from '@/components/years/Year2012'
import Year2016 from '@/components/years/Year2016'
import Year2017 from '@/components/years/Year2017'

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
    },
    {
      path: '/year-2012',
      name: 'Year2012',
      component: Year2012
    },
    {
      path: '/year-2016',
      name: 'Year2016',
      component: Year2016
    },
    {
      path: '/year-2017',
      name: 'Year2017',
      component: Year2017
    }
  ]
})
