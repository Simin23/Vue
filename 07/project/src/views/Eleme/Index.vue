<template>
  <div>
    <!-- 输入框 -->
    <van-search
      :style="{position:'fixed',top:'0',width:'100%',zIndex:'999'}"
      placeholder="请输入搜索关键词"
      v-model="value"
      background="#0af"
    />
    <!-- 宫格 -->
    <van-grid :style="{marginTop:'15%',fontSize: '11px'}" :column-num="5">
      <van-grid-item
        v-for="(k,index) in elemeggComputed"
        :to="`/detail/${index}`"
        :key="index"
        :icon="k.image_hash"
        :text="k.name"
      />
    </van-grid>
    <!-- 推荐 -->
    <div class="index-1ECZ3_0">
      <section id="activity-lego" class="index-1y1Q5_0">
        <div class="index-3xB2N_0">
          <div class="index-Q3GS5_0 index-1xT5J_0">
            <h3 scan-data="{item.title}" class="index-1qvN6_0">品质套餐</h3>
            <div class="index-2W67h_0">搭配齐全吃得好</div>
            <div class="index-1DFa7_0">立即抢购 &gt;</div>
            <img
              src="https://fuss10.elemecdn.com/e/ee/df43e7e53f6e1346c3fda0609f1d3png.png?imageMogr/format/webp/thumbnail/!282x188r/gravity/Center/crop/282x188/"
            />
          </div>
        </div>
      </section>
    </div>
    <!-- 分割线 -->
    <van-divider>推荐商家</van-divider>
    <!-- 导航 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="xiala|handleMenu" />
      <span class="s1">距离最近</span>
      <span class="s1">品质联盟</span>
      <span class="s1">筛选</span>
    </van-dropdown-menu>
    <!-- 商品 -->
    <ul class="_2db1e1m154ODnjL1-ivQvq">
      <li data-watch="999732134318439" v-for="(k,index) in list" :key="index">
        <a class="FcKg0z7ZA3tlZo-vSxopN" role="logo" :aria-label="k.shopName">
          <div class="_2q5HWkq__CHgEQLE76bhCF" role="logo" :aria-label="k.shopName">
            <div>
              <div class="_2igkDNMjpxxIgHzE1Ptqyk lazyimage-holder" style="height: 57px;">
                <img :src="k.picUrl" alt="icon" class="lazyimage-img" />
              </div>
            </div>
          </div>
          <div class="_2L_M6YlchG3yfnSSg7L6mL">
            <div class="_3ce4X4pC6NTjqy4_fKHA8E">{{k.shopName}}</div>
            <div class="_21yyPg0MxIEFMCg8RnTeUo">
              <div>
                <div class="D11MX3M-SDa4TXs8lmgHq" style="height: 10px;">
                  <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                  <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                  <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                  <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                  <i class="_1ukqM-8qHp61SdF68btTCh" style="transform: scale(0.833333);"></i>
                </div>
                <span class="_34MB4leIjAhG3LXl-DN8Ed _19QQt5prXpFQr9QhCVfwC5">5.0</span>
                <span
                  class="_1V9_Khfd3oEDl7_xSgGuGL _34MB4leIjAhG3LXl-DN8Ed mtsi-num"
                >{{k.monthSalesTip}}</span>
              </div>
              <div class="_20HnNmr2Skt7lyGyrsg5R7">
                <span class="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">{{k.deliveryTimeTip}}</span>
                <span
                  class="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num"
                >{{k.distance}}</span>
              </div>
            </div>
            <div class="_1wRyOmTit2wxvwxcfx4tf1">
              <span class="_34MB4leIjAhG3LXl-DN8Ed mtsi-num">{{k.minPriceTip}}</span>
              <span
                class="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num"
              >{{k.shippingFeeTip}}</span>
              <span
                class="_34MB4leIjAhG3LXl-DN8Ed _3jD4JjJGIR519uivFOA_ud mtsi-num"
              >{{k.averagePriceTip}}</span>
              <span class="_3WMYBNt0cX8jtjuQLqQ-0V"></span>
            </div>
            <div class="_3ZkFiqxxif60zXGdUj4atX">
              <img
                src="http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png"
                alt="icon"
              />
              <span class="_2W4nejgMhUSSXvLmQtEOL-">大众点评高分店铺</span>
            </div>
          </div>
          <!-- react-empty: 2580 -->
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      elemegg: [],
      value1: 0,
      xiala: [],
      list: []
    };
  },
  computed: {
    elemeggComputed() {
      return this.elemegg.slice(0, 10);
    }
  },
  async created() {
    //获取宫格数据
    let elemegg = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/elemegg"
    );
    this.elemegg = elemegg.data[0].entries;
    //获取导航数据
    let xiala = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/xiala"
    );
    this.xiala = xiala.data.data.categories;
    // console.log(xiala);
    //获取商品数据
    let list = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/elemegl"
    );
    this.list = list.data.data.shopList;
    // console.log(list);
  },
  //过滤器
  filters: {
    handleMenu(xiala) {
      //   console.log(xiala);
      let newXiala = [];
      xiala.forEach((element, index) => {
        element.text = element.name;
        element.value = index;
        newXiala.push(element);
      });
      return newXiala;
    }
  }
};
</script>
<style scoped>
.index-1ECZ3_0 {
  margin-bottom: 0.213333rem;
  margin-bottom: 2.133333vw;
  font-size: 0;
  padding: 0 0.266667rem;
  padding: 0 2.666667vw;
}
*,
::after,
::before {
  -webkit-box-sizing: inherit;
  box-sizing: inherit;
  -webkit-tap-highlight-color: transparent;
}
.index-1y1Q5_0 {
  background: #fff;
}
.index-3xB2N_0 {
  margin-bottom: 0.08rem;
  margin-bottom: 0.8vw;
}
.index-3xB2N_0,
.index-QE-ye_0 {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  
}
.index-3xB2N_0 .index-1xT5J_0 {
  height: 2.933333rem;
  height: 22.333333vw;
}
.index-3xB2N_0 .index-Q3GS5_0 {
  /* height: 3.733333rem; */
  /* height: 37.333333vw; */
  padding: 0.32rem 0 0 0.4rem;
  padding: 3.2vw 0 0 4vw;
  z-index: 0;
}
.index-3xB2N_0 .index-Q3GS5_0,
.index-QE-ye_0 .index-Q3GS5_0 {
  position: relative;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(5%, #f4f4f4),
    color-stop(95%, #fafafa)
  );
  background: -webkit-linear-gradient(bottom, #f4f4f4 5%, #fafafa 95%);
  background: linear-gradient(0deg, #f4f4f4 5%, #fafafa 95%);
}
.index-3xB2N_0 .index-Q3GS5_0 .index-1qvN6_0 {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.133333rem;
  margin-bottom: 1.333333vw;
  color: #333;
  line-height: 1.2;
}
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
  font-weight: 400;
}
.index-3xB2N_0 .index-Q3GS5_0 .index-2W67h_0 {
  font-size: 0.746667rem;
  color: #777;
  margin-bottom: 0.24rem;
  margin-bottom: 2.4vw;
}
.index-3xB2N_0 .index-Q3GS5_0 .index-1DFa7_0 {
  font-size: 0.72rem;
  color: #af8260;
  font-weight: 700;
}
.index-3xB2N_0 .index-1xT5J_0 img {
  top: 0.24rem;
  top: 2.4vw;
  right: 0.373333rem;
  right: 3.733333vw;
  width: 3.76rem;
  width: 37.6vw;
  height: 2.506667rem;
  height: 25.066667vw;
}
.index-3xB2N_0 .index-Q3GS5_0 img {
  position: absolute;
  right: 0;
  bottom: -0.2rem;
  bottom: -2vw;
  width: 3.2rem;
  width: 32vw;
  height: 2.133333rem;
  height: 21.333333vw;
}
img {
  max-width: 100%;
}
.s1 {
  line-height: 50px;
  margin-right: 18px;
}

/* 商品 */
._2db1e1m154ODnjL1-ivQvq {
  background: #fff;
  overflow: hidden;
}
ul,
ol {
  list-style: none;
}
.FcKg0z7ZA3tlZo-vSxopN {
  padding: 0 10px;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  text-decoration: none;
  box-sizing: border-box;
  margin-bottom: 25px;
  margin-top: 10px;
  position: relative;
}
._2q5HWkq__CHgEQLE76bhCF {
  width: 76px;
  height: 57px;
  position: relative;
  box-sizing: border-box;
  margin-right: 8px;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  border-radius: 2px;
  overflow: hidden;
}
element.style {
  height: 57px;
}
._2q5HWkq__CHgEQLE76bhCF ._2igkDNMjpxxIgHzE1Ptqyk {
  display: block;
  width: 100%;
}
.lazyimage-holder {
  position: relative;
}
.lazyimage-holder .lazyimage-img {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
._2q5HWkq__CHgEQLE76bhCF::after {
  content: "";
  position: absolute;
  border: 1px solid #e4e4e4;
  left: 0;
  top: 0;
  width: 200%;
  height: 200%;
  box-sizing: border-box;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scale(0.5);
  transform: scale(0.5);
}
._2L_M6YlchG3yfnSSg7L6mL {
  -webkit-flex: 1 0;
  -ms-flex: 1 0;
  flex: 1 0;
  min-width: 0;
}
._2L_M6YlchG3yfnSSg7L6mL ._3ce4X4pC6NTjqy4_fKHA8E {
  font-size: 16px;
  color: #333;
  line-height: 1.4;
  white-space: nowrap;
  width: 80%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
}
._2L_M6YlchG3yfnSSg7L6mL ._21yyPg0MxIEFMCg8RnTeUo {
  margin-top: 4px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
element.style {
  height: 10px;
}
.D11MX3M-SDa4TXs8lmgHq {
  display: inline-block;
  height: 12px;
}
element.style {
  transform: scale(0.833333);
}
._1ukqM-8qHp61SdF68btTCh {
  background: url(../../assets/star.png) no-repeat;
  width: 12px;
  height: 12px;
  float: left;
  background-position: 40% 5.66%;
  background-size: 126% 379%;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
._19QQt5prXpFQr9QhCVfwC5 {
  margin-left: 4px;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
._1V9_Khfd3oEDl7_xSgGuGL {
  margin-left: 10px;
}
.mtsi-num {
  font-family: mtsi-font;
}
._20HnNmr2Skt7lyGyrsg5R7 {
  -webkit-flex: 1 0;
  -ms-flex: 1 0;
  flex: 1 0;
  text-align: right;
}
._34MB4leIjAhG3LXl-DN8Ed {
  font-size: 11px;
  color: #333;
  line-height: 1.4;
}
.mtsi-num {
  font-family: mtsi-font;
}
._3jD4JjJGIR519uivFOA_ud:not(:first-child):before {
  content: "";
  display: inline-block;
  margin: 0 3px;
  height: 6px;
  width: 1px;
  background: #ccc;
}
._1wRyOmTit2wxvwxcfx4tf1 {
  margin-top: 4px;
}
._3ZkFiqxxif60zXGdUj4atX {
  position: relative;
  padding-right: 4px;
  display: inline-block;
  line-height: 15px;
  margin-top: 10px;
  white-space: nowrap;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 11px;
}
._3ZkFiqxxif60zXGdUj4atX img {
  width: 15px;
  height: 15px;
  vertical-align: bottom;
  margin-left: 2px;
}
._2W4nejgMhUSSXvLmQtEOL- {
  vertical-align: bottom;
  line-height: 15px;
  height: 15px;
  display: inline-block;
  /* position: absolute; */
}
</style>

