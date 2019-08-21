<template>
  <div>
    <div class="wrapper">
      <div class="container">
        <section id="common_header" class="common_header">
          <header class="common_header_bar">
            <!--返回根据情况选择是否有-->
            <a
              id="common_header_goback"
              class="common_header_goback"
              href="javascript:history.go(-1);"
            >
              <span></span>
            </a>
            <div class="header_title">购物车</div>
            <!--购物车如果为空没有右边按钮-->
            <a href="javascript:;" class="border-right-btn action-btn" style="display: none;">编辑</a>
          </header>
        </section>
        <div class="main">
          <div class="cartNullFill">
            <img
              class="carNullIcon"
              src="http://3g.baobeigezi.com/imgs//default/gouwuchequesheng2x.png"
            />
            <p>百万好货等你选</p>
          </div>
        </div>
      </div>
      <div class="water cartRecommend">
        <div class="cartRecommend_tit">大家都在看</div>
        <div class="today_golbal">
          <ul class="clearfix">
            <li class="lis" v-for="(i,index) in car" :key="index">
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
      car: []
    };
  },
  components: {
    Footer
  },
  async created() {
    let car = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/car"
    );
    this.car = car.data.data;
    // console.log(this.car)
  }
};
</script>

