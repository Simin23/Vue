import Vue from 'vue'
//第三方组件

import {
    //搜索框
    Search,
    //宫格
    Grid,
    GridItem,
    //分割线
    Divider,
    //下拉菜单
    DropdownMenu,
    DropdownItem,
    //标签栏
    Tabbar,
    TabbarItem
} from 'vant';

export default () => {
    Vue.use(Search);
    Vue.use(Grid).use(GridItem);
    Vue.use(Divider);
    Vue.use(DropdownMenu).use(DropdownItem);
    Vue.use(Tabbar).use(TabbarItem);
}