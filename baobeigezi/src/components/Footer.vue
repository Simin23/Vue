<template>
  <van-tabbar v-model="active">
    <van-tabbar-item name="home" icon="wap-home" @click="navto('home')">首页</van-tabbar-item>
    <van-tabbar-item name="search" icon="search" @click="navto('classify')">分类</van-tabbar-item>
    <van-tabbar-item name="friends" icon="shopping-cart-o" @click="navto('car')">购物车</van-tabbar-item>
    <van-tabbar-item name="setting" icon="contact" @click="navto('mycenter')">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  data() {
    return {
      active: "name"
    };
  },
  methods: {
    navto(name) {
      this.$router.push({
        name
      });
      // active = this.;
    }
  }
};
</script>

