<template>
  <div>
    <!-- 轮播图 -->
    <van-swipe :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(b,index) in baobeibanner" :key="index">
        <a :href="b.url" class="swiper-slide swiper-slide-duplicate">
          <img class="swiper-lazy swiper-lazy-loaded" :src="b.img" />
        </a>
      </van-swipe-item>
    </van-swipe>
    <!-- 搜索框 -->
    <van-search
      placeholder="请输入搜索关键词"
      v-model="value"
      :style="{position: 'absolute',top:0,width:'100%',height:'40px'}"
      background="none"
      shape="round"
    />
    <a href="javascript:;" class="baozheng clearfix"></a>
    <!-- 活动 -->
    <div class="activeList">
      <!-- 热门活动 -->
      <div class="hotActive">
        <div class="activeTit">
          <span class="leftIcon icon"></span>
          <span class="tit">热门活动</span>
          <span class="rightIcon icon"></span>
        </div>
        <div class="activeImg" id="hotTop">
          <a
            href="http://sale.baobeigezi.com/ERP_PHP/test/activity_html/2019/07/c9fa05b22bd424d9f21d098781d9292a.html"
          >
            <img
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/faf9f9e0-717d-4080-aac6-c9e46df278c9.jpg"
              alt
            />
          </a>
        </div>
        <div class="pList clearfix" id="hotList">
          <a
            href="http://sale.baobeigezi.com/ERP_PHP/test/activity_html/2019/07/dc47f3dfb89e784ffc028cb48af35b55.html"
            class="lis fl"
            id="FirstLis"
          >
            <div class="pName text-overflow">限时秒杀专场</div>
            <div class="plangName text-overflow">【七夕礼遇】潘多拉手链限时秒！</div>
            <div class="pImg">
              <img
                src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/7fb055cc-af57-4692-82e0-00dbeca55e37.jpg"
                alt
              />
            </div>
          </a>
          <a
            href="http://sale.baobeigezi.com/ERP_PHP/test/activity_html/2019/07/cd59d1c9069d20d16f9b730e42b67d36.html"
            class="lis fl lis2"
            id="FirstLis"
          >
            <div class="pName text-overflow">夏日防晒亮白榜</div>
            <div class="plangName text-overflow">OLAY小白瓶188元！</div>
            <div class="pImg">
              <img
                src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/fcfdffc8-3abc-4278-a367-3c9d731bb6ba.jpg"
                alt
              />
            </div>
          </a>
          <a
            href="http://sale.baobeigezi.com/ERP_PHP/test/activity_html/2019/07/e93cda7d0cfa9564312797767b356b01.html"
            class="lis fl lis3"
            id="FirstLis"
          >
            <div class="pName text-overflow">大牌奶粉囤货</div>
            <div class="plangName text-overflow">德国爱他美低至103元</div>
            <div class="pImg">
              <img
                src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/dece3f0e-28da-4a81-9272-b2ec6d3226a7.jpg"
                alt
              />
            </div>
          </a>
          <a
            href="http://sale.baobeigezi.com/ERP_PHP/test/activity_html/2019/07/0a1f2dba4f2eca5770d2246bc7d094da.html"
            class="lis fl lis4"
            id="FirstLis"
          >
            <div class="pName text-overflow">宝宝用品专场</div>
            <div class="plangName text-overflow">妙思乐洗护买一发二</div>
            <div class="pImg">
              <img
                src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/3f36c33b-bd73-4e75-b596-c31efe3bac83.jpg"
                alt
              />
            </div>
          </a>
          <a
            href="http://sale.baobeigezi.com/ERP_PHP/test/activity_html/2019/07/d9dcb12dc73208ad3f260a7514e3f801.html"
            class="lis fl lis5"
            id="FirstLis"
          >
            <div class="pName text-overflow">每日上新</div>
            <div class="plangName text-overflow">七夕必BUY好物精选</div>
            <div class="pImg">
              <img
                src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/8b2056af-fa3a-4d76-9949-17f8e18553a1.jpg"
                alt
              />
            </div>
          </a>
        </div>
      </div>
      <!-- 国家馆 -->
      <div class="jingXuan">
        <div class="activeImg" id="coutryImg">
          <a
            href="http://sale.baobeigezi.com/ERP_PHP/test/activity_html/2019/08/132e97ede35b455c23762aab8bff8c25.html"
          >
            <img
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/c3415f84-e93a-4b39-bcc2-7841acc955a0.jpg"
              alt
            />
          </a>
        </div>
        <div class="activeTit">
          <span class="leftIcon icon"></span>
          <span class="tit">国家馆</span>
          <span class="rightIcon icon"></span>
        </div>
        <van-swipe indicator-color="white">
          <van-swipe-item class="countryList">
            <a v-for="(g,index) in guojiaguan01" :key="index" :href="g.url" class="coutryImg">
              <img :src="g.img" alt />
            </a>
          </van-swipe-item>
          <van-swipe-item class="countryList">
            <a v-for="(g,index) in guojiaguan02" :key="index" :href="g.url" class="coutryImg">
              <img :src="g.img" alt />
            </a>
          </van-swipe-item>
          <van-swipe-item class="countryList">
            <a v-for="(g,index) in guojiaguan03" :key="index" :href="g.url" class="coutryImg">
              <img :src="g.img" alt />
            </a>
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 精选分类 -->
      <div class="jingXuan">
        <div class="activeTit">
          <span class="leftIcon icon"></span>
          <span class="tit">精选分类</span>
          <span class="rightIcon icon"></span>
        </div>
        <div class="jingXuanHeader">
          <div class="jingXuanHeaderLeft" id="jingXuanHeaderLeft">
            <a
              href="http://3g.baobeigezi.com/categoryThree?q=1151041139957043202&amp;title=奶粉囤货&amp;sort=0"
            >
              <div class="classHeader">奶粉囤货</div>
              <div class="classPrice text-overflow">大牌奶粉低至5折</div>
              <div class="pImg">
                <img
                  src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/9c5777d2-7ea2-4066-a3d0-a1780710e78a.jpg"
                  alt
                />
              </div>
            </a>
          </div>
          <div class="jingXuanHeaderRight">
            <a
              href="http://3g.baobeigezi.com/categoryThree?q=1151040851992907778&amp;title=纸尿裤&amp;sort=0"
            >
              <div>
                <div class="classHeader">纸尿裤</div>
                <div class="classPrice text-overflow">爱儿适纸尿裤低至83.5元</div>
              </div>
              <div class="pImg">
                <img
                  src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/986e6c1e-64bb-42fd-9ac0-aa51c97a2066.jpg"
                  alt
                />
              </div>
            </a>
            <a
              href="http://3g.baobeigezi.com/categoryThree?q=1151041152477040641&amp;title=防晒修复&amp;sort=0"
            >
              <div>
                <div class="classHeader">防晒修复</div>
                <div class="classPrice text-overflow">安耐晒防晒霜限时秒</div>
              </div>
              <div class="pImg">
                <img
                  src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/4f324023-7c84-4755-89c3-f15908359b43.jpg"
                  alt
                />
              </div>
            </a>
          </div>
        </div>
        <ul class="jingXuanList">
          <li v-for="(j,index) in jingxuan" :key="index">
            <a :href="j.url">
              <div class="pImg">
                <img :src="j.img" alt />
              </div>
              <div class="classHeader text-overflow">{{j.title}}</div>
              <div class="classPrice text-overflow">{{j.tag}}</div>
            </a>
          </li>
        </ul>
      </div>
      <!-- 本周最热 -->
      <div class="hotWeek">
        <div class="activeTit">
          <span class="leftIcon icon"></span>
          <span class="tit">本周最热</span>
          <span class="rightIcon icon"></span>
        </div>
      </div>
      <van-swipe indicator-color="#ccc">
        <van-swipe-item>
          <div class="hotWeekPlist">
            <a v-for="(h,index) in hot01" :key="index" :href="h.url" class="lis fl">
              <div class="pImg">
                <img :src="h.img" alt />
              </div>
              <div class="pName text-overflow">{{h.title}}</div>
              <div class="pPrice text-overflow">{{h.price}}</div>
            </a>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="hotWeekPlist">
            <a v-for="(h,index) in hot02" :key="index" :href="h.url" class="lis fl">
              <div class="pImg">
                <img :src="h.img" alt />
              </div>
              <div class="pName text-overflow">{{h.title}}</div>
              <div class="pPrice text-overflow">{{h.price}}</div>
            </a>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="hotWeekPlist">
            <a v-for="(h,index) in hot03" :key="index" :href="h.url" class="lis fl">
              <div class="pImg">
                <img :src="h.img" alt />
              </div>
              <div class="pName text-overflow">{{h.title}}</div>
              <div class="pPrice text-overflow">{{h.price}}</div>
            </a>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="hotWeekPlist">
            <a v-for="(h,index) in hot04" :key="index" :href="h.url" class="lis fl">
              <div class="pImg">
                <img :src="h.img" alt />
              </div>
              <div class="pName text-overflow">{{h.title}}</div>
              <div class="pPrice text-overflow">{{h.price}}</div>
            </a>
          </div>
        </van-swipe-item>
        <van-swipe-item>
          <div class="hotWeekPlist">
            <a v-for="(h,index) in hot05" :key="index" :href="h.url" class="lis fl">
              <div class="pImg">
                <img :src="h.img" alt />
              </div>
              <div class="pName text-overflow">{{h.title}}</div>
              <div class="pPrice text-overflow">{{h.price}}</div>
            </a>
          </div>
        </van-swipe-item>
      </van-swipe>
      <!-- 热门品牌 -->
      <div class="hotBrand" id="hotBrand">
        <div class="activeTit">
          <span class="leftIcon icon"></span>
          <span class="tit">热门品牌</span>
          <span class="rightIcon icon"></span>
        </div>
        <van-swipe indicator-color="#ccc">
          <van-swipe-item v-for="(i,index) in hotpai" :key="index">
            <div class="hotWeekPlist hotBrand">
              <div class="brandImg">
                <img :src="i.imgb" alt />
              </div>
              <div class="pr brandPr">
                <a :href="i.url" class="fenSi clearfix">
                  <img :src="i.imgm" alt class="pr fenImg" />
                  <div class="fenSiRiht fl">
                    <div class="fenName">{{i.title}}</div>
                    <div class="span1 text-overflow">{{i.tag}}</div>
                  </div>
                  <span class="goEvent pr">进入专场 &gt;</span>
                </a>
                <div>
                  <a
                    v-for="(item,index) in i.shangpin"
                    :key="index"
                    :href="item.url"
                    class="lis fl"
                  >
                    <div class="pImg">
                      <img :src="item.img" alt />
                    </div>
                    <div class="pName text-overflow">{{item.title}}</div>
                    <div class="pPrice text-overflow">{{item.price}}</div>
                  </a>
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
    <!-- 商品 -->
    <div class="waterFull">
      <div class="waterFullNav">
        <van-tabs>
          <van-tab title="奶粉辅食">
            <Naifen />
          </van-tab>
          <van-tab title="宝宝用品">
            <Baobao />
          </van-tab>
          <van-tab title="美容护肤">
            <Meirong />
          </van-tab>
          <van-tab title="美妆香氛">
            <Meizhuang />
          </van-tab>
          <van-tab title="个护清洁">
            <Qingjie />
          </van-tab>
          <van-tab title="营养保健">
            <Yingyang />
          </van-tab>
          <van-tab title="环球美食">
            <Meishi />
          </van-tab>
          <van-tab title="数码家电">
            <Jiadian />
          </van-tab>
          <van-tab title="时尚家居">
            <Jiaju />
          </van-tab>
        </van-tabs>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Naifen from "../components/Naifen";
import Baobao from "../components/Baobao";
import Meirong from "../components/Meirong";
import Meizhuang from "../components/Meizhuang";
import Qingjie from "../components/Qingjie";
import Yingyang from "../components/Yingyang";
import Meishi from "../components/Meishi";
import Jiadian from "../components/Jiadian";
import Jiaju from "../components/Jiaju";
import Footer from "../components/Footer";
export default {
  components: {
    Naifen,
    Baobao,
    Meirong,
    Meizhuang,
    Qingjie,
    Yingyang,
    Meishi,
    Jiadian,
    Jiaju,
    Footer
  },
  data() {
    return {
      value: "",
      baobeibanner: [],
      guojiaguan01: [],
      guojiaguan02: [],
      guojiaguan03: [],
      jingxuan: [],
      hot01: [],
      hot02: [],
      hot03: [],
      hot04: [],
      hot05: [],
      hotpai: []
    };
  },
  methods: {
    navto(path) {
      this.$router.push({
        path
      });
    }
  },
  async created() {
    //获取轮播数据
    let baobeibanner = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/baobeigezibanner"
    );
    this.baobeibanner = baobeibanner.data;
    //获取国家馆数据
    let guojiaguan01 = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/guojiaguan01"
    );
    this.guojiaguan01 = guojiaguan01.data;

    let guojiaguan02 = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/guojiaguan02"
    );
    this.guojiaguan02 = guojiaguan02.data;

    let guojiaguan03 = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/guojiaguan03"
    );
    this.guojiaguan03 = guojiaguan03.data;
    //获取精选数据
    let jingxuan = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/jingxun"
    );
    this.jingxuan = jingxuan.data;
    //获取本周最热数据
    let hot01 = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/hot01"
    );
    this.hot01 = hot01.data;

    let hot02 = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/hot02"
    );
    this.hot02 = hot02.data;

    let hot03 = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/hot03"
    );
    this.hot03 = hot03.data;

    let hot04 = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/hot04"
    );
    this.hot04 = hot04.data;

    let hot05 = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/hot05"
    );
    this.hot05 = hot05.data;
    //热门品牌
    let hotpai = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/hotpai"
    );
    this.hotpai = hotpai.data;
    // console.log(this.title);
  }
};
</script>


<style >
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item {
  overflow: hidden;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>

