<template>
  <div>
    <router-view></router-view>
    <!-- 标签栏 -->
    <van-tabbar :route="true" v-model="active">
      <!-- 声明式导航 :url="t.url" -->
      <van-tabbar-item
        v-for="(t,index) in tabbarItem"
        :key="index"
        @click="navTo(t.url)"
        :icon="t.icon"
        v-text="t.title"
      ></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //记录你在第几项
      active: 0,
      tabbarItem: [
        {
          title: "首页",
          url: "/eleme/index",
          icon: "home-o"
        },
        {
          title: "订单",
          url: "/eleme/order",
          icon: "search"
        },
        {
          title: "我的",
          url: "/eleme/mine",
          icon: "home-o"
        }
      ]
    };
  },
  methods:{
    navTo(url){
      //编程式导航
      this.$router.push(url)
    }
  }
};
</script>


