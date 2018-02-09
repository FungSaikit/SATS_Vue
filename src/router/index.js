import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HouseList from '@/components/houselist'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: '主页',
      component: Index
    }, 
    {
      path: '/house_list/:type', 
      name: '购房租房', 
      component: HouseList
    }
  ]
})
