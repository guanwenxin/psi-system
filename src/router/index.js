import HomeViewVue from '@/views/HomeView.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import MainView from '../views/MainView.vue'

//引入进货管理

import jhrkTab from '@/components/navbar/jxcgl/jhgl/jhrkTab.vue'
import thckTab from '@/components/navbar/jxcgl/jhgl/thckTab.vue'
import jhdjcxTab from '@/components/navbar/jxcgl/jhgl/jhdjcxTab.vue'
import thdjcxTab from '@/components/navbar/jxcgl/jhgl/thdjcxTab.vue'
import jhdqkccxTab from '@/components/navbar/jxcgl/jhgl/jhdqkccxTab.vue'
//引入销售管理

import xsckTab from '@/components/navbar/jxcgl/xsgl/xsckTab.vue'
import khthTab from '@/components/navbar/jxcgl/xsgl/khthTab.vue'
import xsdjcxTab from '@/components/navbar/jxcgl/xsgl/xsdjcxTab.vue'
import khthcxTab from '@/components/navbar/jxcgl/xsgl/khthcxTab.vue'
import xsdqkccxTab from '@/components/navbar/jxcgl/xsgl/xsdqkccxTab.vue'
//引入库存管理

import spbsTab from '@/components/navbar/jxcgl/kcgl/spbsTab.vue'
import spbyTab from '@/components/navbar/jxcgl/kcgl/spbyTab.vue'
import kcbjTab from '@/components/navbar/jxcgl/kcgl/kcbjTab.vue'
import bsbycxTab from '@/components/navbar/jxcgl/kcgl/bsbycxTab.vue'
import kcdqkccxTab from '@/components/navbar/jxcgl/kcgl/kcdqkccxTab.vue'
// 引入统计报表分析

import gystjTab from '@/components/navbar/tjbbfx/gystjTab.vue'
import khtjTab from '@/components/navbar/tjbbfx/khtjTab.vue'
import spcgtjTab from '@/components/navbar/tjbbfx/spcgtjTab.vue'
import spxstjTab from '@/components/navbar/tjbbfx/spxstjTab.vue'
import artjfxTab from '@/components/navbar/tjbbfx/artjfxTab.vue'
import aytjfxTab from '@/components/navbar/tjbbfx/aytjfxTab.vue'
//引入基础资料

import gysglTab from '@/components/navbar/jczl/gysglTab.vue'
import khglTab from '@/components/navbar/jczl/khglTab.vue'
import spglTab from '@/components/navbar/jczl/spglTab.vue'
import qckcTab from '@/components/navbar/jczl/qckcTab.vue'
//引入系统管理

import jsglTab from '@/components/navbar/xtgl/jsglTab.vue'
import yhglTab from '@/components/navbar/xtgl/yhglTab.vue'
import xtrzTab from '@/components/navbar/xtgl/xtrzTab.vue'
import xgmmTab from '@/components/navbar/xtgl/xgmmTab.vue'
import aqtcTab from '@/components/navbar/xtgl/aqtcTab.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomeViewVue
  },
  {
    path: '/main/:userId',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: MainView,
    children: [

      {
        // 当 /user/:id/profile 匹配成功
        // UserProfile 将被渲染到 User 的 <router-view> 内部
        path: 'jhrk',
        component: jhrkTab,
      },
      {
        path: 'thck',
        component: thckTab,
      },
      {
        path: 'jhdjcx',
        component: jhdjcxTab,
      },
      {
        path: 'thdjcx',
        component: thdjcxTab,
      },
      {
        path: 'jhdqkccx',
        component: jhdqkccxTab,
      },
      // 进货管理部分end
      {
        path: 'xsck',
        component: xsckTab,
      },
      {
        path: 'khth',
        component: khthTab,
      },
      {
        path: 'xsdjcx',
        component: xsdjcxTab,
      },
      {
        path: 'khthcx',
        component: khthcxTab,
      },
      {
        path: 'xsdqkccx',
        component: xsdqkccxTab,
      },
      // 销售管理部分end
      {
        path: 'spbs',
        component: spbsTab,
      },
      {
        path: 'spby',
        component: spbyTab,
      },
      {
        path: 'kcbj',
        component: kcbjTab,
      },
      {
        path: 'bsbycx',
        component: bsbycxTab,
      },
      {
        path: 'kcdqkccx',
        component: kcdqkccxTab,
      },
      // 库存管理部分end
      {
        path: 'gystj',
        component: gystjTab,
      },
      {
        path: 'khtj',
        component: khtjTab,
      },
      {
        path: 'spcgtj',
        component: spcgtjTab,
      },
      {
        path: 'spxstj',
        component: spxstjTab,
      },
      {
        path: 'artjfx',
        component: artjfxTab,
      },
      {
        path: 'aytjfx',
        component: aytjfxTab,
      },
      // 统计报表分析部分end
      {
        path: 'gysgl',
        component: gysglTab,
      },
      {
        path: 'khgl',
        component: khglTab,
      },
      {
        path: 'spgl',
        component: spglTab,
      },
      {
        path: 'qckc',
        component: qckcTab,
      },
      // 基础资料部分end
      {
        path: 'jsgl',
        component: jsglTab,
      },
      {
        path: 'yhgl',
        component: yhglTab,
      },
      {
        path: 'xtrz',
        component: xtrzTab,
      },
      {
        path: 'xgmm',
        component: xgmmTab,
      },
      {
        path: 'aqtc',
        component: aqtcTab,
      },

      // 路由重定向
      {
        path: '',
        redirect: 'jhrk'
      },
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
