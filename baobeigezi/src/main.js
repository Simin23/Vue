import Vue from 'vue'
import App from './App.vue'
//全局引入
import axios from 'axios'
// Vue继承axios
Vue.prototype.$axios = axios

//解决跨域
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'; //全局更改
import qs from "qs"; //配合qs模块转化post请求的参数，记得先npm install qs
Vue.prototype.$qs = qs;



import router from './router'
//vant样式
import 'vant/lib/index.css'
//公共样式
import './assets/banner2.css'
import './assets/style.css'
import './assets/commen.css'
//首页
import './assets/shouye.css'
//分类
import './assets/classify.css'
//品牌
import './assets/brand.css'
//购物车
import './assets/cart.css'
//我的
import './assets/userIndex.css'
//列表页
import './assets/list.css'
//详情页
// import './assets/detail.css'

import {

} from 'element-ui';
import {
  //轮播图
  Swipe,
  SwipeItem,
  //搜索框
  Search,
  //标签页
  Tab,
  Tabs,
  //列表
  List,
  //标签栏
  Tabbar,
  TabbarItem,
  //图标
  Icon,
  //导航栏
  NavBar,
  //输入框
  Field,
  //单元格
  Cell,
  CellGroup,
  //商品导航
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';
Vue.use(Search);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Tab).use(Tabs);
Vue.use(List);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(Icon);
Vue.use(NavBar);
Vue.use(Field);
Vue.use(Cell).use(CellGroup);
Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')