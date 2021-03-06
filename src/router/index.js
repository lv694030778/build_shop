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
import buildPlan from '@/components/rightContent/build_manage/build_list/archives/build_plan'
import property from '@/components/rightContent/build_manage/build_list/archives/property'
import sellingPrice from '@/components/rightContent/build_manage/build_list/selling_price'
import buildTags from '@/components/rightContent/build_manage/build_list/build_tags'
import periphery from '@/components/rightContent/build_manage/build_list/periphery'
import salesStatus from '@/components/rightContent/build_manage/build_list/salesStatus/salesStatus'
import houseLayout from '@/components/rightContent/build_manage/build_list/houseLayout/houseLayout'
import dynatown from '@/components/rightContent/build_manage/build_list/dynatown/dynatown'
import forensicsList from '@/components/rightContent/build_manage/obtain_evidence/forensics_list'
import evidenceHead from '@/components/rightContent/build_manage/obtain_evidence/add_evidence/evidenceHead'
import basicInformation from '@/components/rightContent/build_manage/obtain_evidence/add_evidence/basicInformation'
import timeAxis from '@/components/rightContent/build_manage/obtain_evidence/add_evidence/timeAxis'
import information from '@/components/rightContent/build_manage/obtain_evidence/add_evidence/information'
import roomPrice from '@/components/rightContent/build_manage/obtain_evidence/add_evidence/roomPrice'
import dynamicLeft from '@/components/rightContent/build_manage/contentMgt/dynamicLeft'
import dynamicRight from '@/components/rightContent/build_manage/contentMgt/dynamicRight'

Vue.use(Router)
/* eslint-disable */
export default new Router({
  routes: [
    {
      path: '/',
      name: '',
      props: true,
      component: header,
      redirect:'/typeList',
      children: [
        {
        path: '/typeList',
        name: '????????????',
        props: true,
        component: typeList,
        redirect:'/rightHeader',
        children: [
          {
          path: '/rightHeader',
          name: '????????????',
          props: true,
          component: rightHeader,
          redirect:'/non_commercial',
          children: [{
            path: '/non_commercial',
            name: '?????????',
            props: true,
            component: nonCommercial,
          },
            {
            path: '/archives',
            name: '????????????',
            props: true,
            component: archives,
            redirect:'/buildArchives',
            children: [
              {
              path: '/buildArchives',
              name: '????????????',
              props: true,
              component: buildArchives,
            }, {
              path: '/buildEdit',
              name: '????????????',
              props: true,
              component: buildEdit,
            }, {
              path: '/buildPlan',
              name: '????????????',
              props: true,
              component: buildPlan,
            }, {
              path: '/property',
              name: '????????????',
              props: true,
              component: property,
            }, {
              path: '/sellingPrice',
              name: '????????????',
              props: true,
              component: sellingPrice,
            }, {
              path: '/buildTags',
              name: '????????????',
              props: true,
              component: buildTags,
            }, {
              path: '/periphery',
              name: '????????????',
              props: true,
              component: periphery,
            },
              {
                path: '/buildArchives',
                name: '????????????',
                props: true,
                component: buildArchives,
              }]
          },
            {
              path: '/archives',
              name: '????????????',
              props: true,
              component: archives,
              redirect:'/salesStatus',
              children: [{
                path: '/salesStatus',
                name: '????????????',
                props: true,
                component: salesStatus,
              }]
            },
            {
              path: '/archives',
              name: '????????????',
              props: true,
              component: archives,
              redirect:'/houseLayout',
              children: [{
                path: '/houseLayout',
                name: '?????????',
                props: true,
                component: houseLayout
              }]
            },
            {
              path: '/archives',
              name: '????????????',
              props: true,
              component: archives,
              redirect:'/dynatown',
              children: [{
                path: '/dynatown',
                name: '',
                props: true,
                component: dynatown
              }]
            },
          ]
        },
          {
            path: '/rightHeader',
            name: '????????????',
            props: true,
            component: rightHeader,
            redirect:'/forensicsList',
            children: [{
              path: '/forensicsList',
              name: '????????????',
              component: forensicsList
            },
              {
                path: '/evidenceHead',
                name: '????????????',
                component: evidenceHead,
                redirect:'/basicInformation',
                children: [{
                  path: '/basicInformation',
                  name: '????????????',
                  component: basicInformation
                }, {
                  path: '/timeAxis',
                  name: '?????????',
                  component: timeAxis
                }, {
                  path: '/information',
                  name: '????????????',
                  component: information
                }, {
                  path: '/roomPrice',
                  name: '????????????',
                  component: roomPrice
                }]
              }
            ]
          },
          {
            path: '/rightHeader',
            name: '????????????',
            props: true,
            component: rightHeader,
            redirect:'/forensicsList',
            children: [{
              path: '/dynamicLeft',
              name: '????????????',
              component: dynamicLeft,
              redirect:'/dynamicRight',
              children: [{
                path: '/dynamicRight',
                name: '',
                component: dynamicRight,
              }]
            }
            ]
          }
        ]
      },
        {
          path: '/dispose',
          name: '????????????',
          component: dispose
        }]
    }

  ]
})
