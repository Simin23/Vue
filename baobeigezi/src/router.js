import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

//首页
import Home from './views/Home.vue'
//分类页
import Classify from './views/Classify'
//品牌
import Brand from './views/Brand'
//购物车
import Car from './views/Car'
//我的
import Mycenter from './views/Mycenter'
//列表页
import List from './views/List'
//登录
import Register from './views/Register'
//注册
import Login from './views/Login'
//详情页
import Detail from './views/Detail'
export default new Router({
  routes: [{
    //首页
    path: '/',
    name: 'home',
    component: Home
  }, {
    //分类页
    path: '/classify',
    name: 'classify',
    component: Classify
  }, {
    //品牌
    path: '/brand',
    name: 'brand',
    component: Brand
  }, {
    //购物车
    path: '/car',
    name: 'car',
    component: Car
  }, {
    //我的
    path: '/mycenter',
    name: 'mycenter',
    component: Mycenter
  }, {
    //列表页
    path: '/list',
    name: 'list',
    component: List
  }, {
    //注册
    path: '/register',
    name: 'register',
    component: Register
  }, {
    //登录
    path: '/login',
    name: 'login',
    component: Login
  }, {
    //详情页
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }]
})