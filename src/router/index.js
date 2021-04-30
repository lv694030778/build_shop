import Vue from 'vue'
import Router from 'vue-router'
import header from '@/components/header'
import typeList from '@/components/leftContent/typeList'
import dispose from '@/components/leftContent/dispose'
import rightHeader from '@/components/rightContent/rightHeader'
import nonCommercial from '@/components/rightContent/build_manage/build_list/non_commercial'
import archives from '@/components/rightContent/build_manage/build_list/archives'
import buildArchives from '@/components/rightContent/build_manage/build_list/archives/build_archives'
import buildEdit from '@/components/rightContent/build_manage/build_list/archives/build_edit'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: '楼盘管理',
      props: true,
      component: header,
      redirect:'/typeList',
      children: [{
        path: '/typeList',
        name: '楼盘列表',
        props: true,
        component: typeList,
        redirect:'/rightHeader',
        children: [{
          path: '/rightHeader',
          name: '非商业',
          props: true,
          component: rightHeader,
          redirect:'/non_commercial',
          children: [{
            path: '/non_commercial',
            name: '列表',
            props: true,
            component: nonCommercial,
          },{
            path: '/archives',
            name: '楼盘信息',
            props: true,
            component: archives,
            redirect:'/buildArchives',
            children: [{
              path: '/buildArchives',
              name: '楼盘档案',
              props: true,
              component: buildArchives,
            }, {
              path: '/buildEdit',
              name: '创建楼盘',
              props: true,
              component: buildEdit,
            }]
          }
          ]
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
