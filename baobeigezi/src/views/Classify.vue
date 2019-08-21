<template>
  <div>
    <Navbar />
    <div class="searchClass">
      <van-tabs>
        <van-tab title="奶粉辅食">
          <Fenleinaifen />
        </van-tab>
        <van-tab title="宝宝用品">
          <Fenleibaobao />
        </van-tab>
        <van-tab title="美容护肤">
          <Fenleimeirong />
        </van-tab>
        <van-tab title="美妆香氛">
          <Fenleimeizhuang />
        </van-tab>
        <van-tab title="个护清洁">
          <Fenleiqingjie />
        </van-tab>
        <van-tab title="营养保健">
          <Fenleiyingyang />
        </van-tab>
        <van-tab title="环球美食">
          <Fenleimeishi />
        </van-tab>
        <van-tab title="数码家电">
          <Fenleijiadian />
        </van-tab>
        <van-tab title="时尚家居">
          <Fenleijiaju />
        </van-tab>
      </van-tabs>品牌
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Fenleinaifen from '../components/Fenleinaifen'
import Fenleibaobao from '../components/Fenleibaobao'
import Fenleimeirong from '../components/Fenleimeirong'
import Fenleimeizhuang from '../components/Fenleimeizhuang'
import Fenleiqingjie from '../components/Fenleiqingjie'
import Fenleiyingyang from '../components/Fenleiyingyang'
import Fenleimeishi from '../components/Fenleimeishi'
import Fenleijiadian from '../components/Fenleijiadian'
import Fenleijiaju from '../components/Fenleijiaju'
import Footer from "../components/Footer";
export default {
  components: {
    Navbar,
    Fenleinaifen,
    Fenleibaobao,
    Fenleimeirong,
    Fenleimeizhuang,
    Fenleiqingjie,
    Fenleiyingyang,
    Fenleimeishi,
    Fenleijiadian,
    Fenleijiaju,
    Footer
  },
  data(){
    return{
      
    }
  }
};
</script>
