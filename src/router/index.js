import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import HouseList from '@/components/houselist'
import HouseDetails from '@/components/housedetails'
import Register from '@/components/register'
import Login from '@/components/login'
import PostHouse from '@/components/posthouse'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '主页',
      component: Index
    },
    {
      path: '/index',
      name: '主页',
      component: Index
    },
    {
      path: '/house_list/:type',
      name: '购房租房',
      component: HouseList
    },
    {
      path: '/house_details/:id',
      name: '房屋信息',
      component: HouseDetails
    },
    {
      path: '/register',
      name: '注册账号',
      component: Register
    }, 
    {
      path: '/login',
      name: '登录',
      component: Login
    }, 
    {
      path: '/post_house/:ifs', 
      name: '发布房源',
      component: PostHouse
    }
  ]
})
