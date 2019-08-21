<template>
  <div>
    <div class="g-user">
      <div class="m-uinfo">
        <section id="common_header" class="common_header">
          <header class="common_header_bar">
            <a id="common_header_goback" class="common_header_goback" href="/mycenter">
              <span></span>
            </a>
            <div class="header_title"></div>
            <a href="//3g.baobeigezi.com/kf.html" class="border-right-btn top-customerService-btn"></a>
          </header>
        </section>
        <div class="info clearfix" id="info">
          <img src="http://3g.baobeigezi.com/imgs/default/headImg.png" alt="用户头像" />
          <div class="ulogin clearfix">
            <a class="login col" @click="navto('login')">登录</a>
            <a class="register col" @click="navto('register')">注册</a>
          </div>
        </div>
        <div class="myNav">
          <div class="nav clearfix">
            <a href="javascript:;" class="navLink" data-open="0">
              <span class="navIcon navIcon1"></span>
              <span class="navTit">卡券</span>
            </a>
            <div class="line"></div>
            <a href="javascript:;" class="navLink" data-open="0">
              <span class="navIcon navIcon2"></span>
              <span class="navTit">种草</span>
            </a>
            <div class="line"></div>
            <a href="car" class>
              <span class="navIcon navIcon3"></span>
              <span class="navTit">购物车</span>
            </a>
            <div class="line"></div>
            <a href="address?origin=personalCenter" class>
              <span class="navIcon navIcon4"></span>
              <span class="navTit">收货地址</span>
            </a>
          </div>
        </div>
      </div>
      <div class="m-order item m-order1">
        <div class="order2">
          <a href="order?stutes=0" class="row tit">
            我的订单
            <span class="userIndex-icon arrow-right-icon"></span>
          </a>
          <div class="content clearfix">
            <a href="order?stutes=1" class="col col-img col1">
              <span class="userIndex-icon"></span>
              <span class="colTit">待付款</span>
            </a>
            <a href="order?stutes=3" class="col col-img col3">
              <span class="userIndex-icon"></span>
              <span class="colTit">待发货</span>
            </a>
            <a href="order?stutes=4" class="col col-img col2">
              <span class="userIndex-icon"></span>
              <span class="colTit">待收货</span>
            </a>
            <a href="order?stutes=5" class="col col-img col4">
              <span class="userIndex-icon"></span>
              <span class="colTit">已完成</span>
            </a>
            <a href="/serviceList" class="col col-img col5">
              <span class="userIndex-icon">
                <!--<i class="num">0</i>-->
              </span>
              <span class="colTit">退款/售后</span>
            </a>
          </div>
        </div>
      </div>
      <div class="activeImg" id="coutryImg" style="margin-bottom: 9px">
        <a
          href="http://sale.baobeigezi.com/ERP_PHP/test/activity_html/2019/07/99ab653a4dc7e1cbae3c8b1bfd522c21.html"
        >
          <img
            src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/cbc054d7-b350-4767-87ac-93ac9489184c.jpg"
            alt
          />
        </a>
      </div>
      <div class="m-initem item last">
        <a href="/help" class="row">
          <div class="tit">
            <span class="userIndex-icon kefu-icon tit-icon"></span>客服帮助
          </div>
          <span class="userIndex-icon arrow-right-icon"></span>
        </a>
        <a href="identity?origin=personalCenter" class="row">
          <div class="tit">
            <span class="userIndex-icon card-icon tit-icon"></span>身份证信息
          </div>
          <span class="userIndex-icon arrow-right-icon"></span>
        </a>
        <a href="//sales.baobeigezi.com/web_2019/6/3/mobiles/index.html" class="row">
          <div class="tit">
            <span class="userIndex-icon wx-icon tit-icon"></span>微信官方服务号
          </div>
          <span class="userIndex-icon arrow-right-icon"></span>
        </a>
      </div>
      <div class="water cartRecommend">
        <div class="cartRecommend_tit">大家都在看</div>
        <div class="today_golbal">
          <ul class="clearfix">
            <li class="lis" v-for="(i,index) in mycenter" :key="index">
              <a
                data-track="main-fall-goods"
                href="http://3g.baobeigezi.com/product?id=1151333030158143490"
                :id="i.id"
              >
                <div class="imgDiv">
                  <img class="lazy" :src="i.mainImg" alt style="display: inline;" />
                </div>
                <div class="waterButtom pr">
                  <div class="waterName text-overflow">{{i.name}}</div>
                  <div class="waterPrice">￥{{i.salePrice}}</div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Footer from "../components/Footer";
export default {
  data() {
    return {
      mycenter: []
    };
  },
  components: {
    Footer
  },
  async created() {
    let mycenter = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/mycenter"
    );
    this.mycenter = mycenter.data.data;
    // console.log(this.mycenter);
  },
  methods: {
    navto(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>
