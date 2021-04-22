import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import typeList from '@/components/leftContent/typeList'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header
    },
    {
      path: '/',
      name: 'typeList',
      component: typeList
    }
  ]
})
