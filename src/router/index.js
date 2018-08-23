import Vue from 'vue'
import Router from 'vue-router'
import main from '@/pages/main'
import factory from '@/pages/factory/factory'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: 'main'},
    {
      path: '/main',
      name: 'main',
      component: main
    },
    {
      path: '/factory',
      name: 'factory',
      component: factory
    }
  ]
})
