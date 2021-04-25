import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import typeList from '@/components/leftContent/typeList'
import dispose from '@/components/leftContent/dispose'
import nonCommercial from '@/components/rightContent/build_manage/build_list/non_commercial'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'header',
      component: header,
      redirect:'/typeList',
      children: [{
        path: '/typeList',
        name: 'typeList',
        component: typeList,
        redirect:'/rightContent/build_manage/non_commercial',
        children: [{
          path: '/rightContent/build_manage/non_commercial',
          name: 'non_commercial',
          component: nonCommercial,
        }]
      },
        {
          path: '/dispose',
          name: 'dispose',
          component: dispose
        }]
    }

  ]
})
