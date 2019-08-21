import Vue from 'vue'
//自定义组件
import App from './App.vue'
//全局引入
import axios from 'axios'
// Vue继承axios
Vue.prototype.$axios = axios
//全局引入vuerouter
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
//定义路由组件
import Eleme from './views/Eleme'
// import Detail from './views/Detail'
const Detail = () => import('./views/Detail')
//嵌套组件
import Index from './views/Eleme/Index'
import Order from './views/Eleme/Order'
import Mine from './views/Eleme/Mine'


const routes = [{
    path: '/eleme',
    component: Eleme,
    //嵌套路由，先引进底部选项卡，再去找首页
    children: [{
        //第二层路由的path是没有/ 
        path: 'index',
        component: Index
      },
      {
        path: 'order',
        component: Order
      },
      {
        path: 'mine',
        component: Mine
      }
    ]
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/',
    redirect: '/eleme/index'
  }
]
const router = new VueRouter({
  routes // (缩写) 相当于 routes: routes
})


// 引入vant的组件
import Vant from './vant/index'
Vant()

Vue.config.productionTip = false

new Vue({
  //让容器装载这个路由插件
  router,
  render: h => h(App),
}).$mount('#app')