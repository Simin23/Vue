<template>
  <div class="swiper-content classify_content">
    <div class="tabItem">
      <div class="inner">
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1151036711657017346">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/7f93d15d-9921-44db-8f20-64f4d51f4d22.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(i,index) in shijin" :key="index" @click="navto('list')">
              <a
                href="javascript:void(0)"
                :id="i.id"
              >
                <img
                  :src="i.image"
                  alt="Pre段"
                />
                <span>{{i.name}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1157118756992847873">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/890eb6a7-0a65-494f-bad9-7f21cbe5b314.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(f,index) in yongpin" :key="index">
              <a
                href="##"
                :id="f.id"
              >
                <img
                  :src="f.image"
                  alt="米粉米糊"
                />
                <span>{{f.name}}</span>
              </a>
            </li>
           
          </ul>
        </div>
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1157118864010514433">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/5653ee5a-1e24-4f30-a111-e757c5a35ab9.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(l,index) in wanju" :key="index">
              <a
                href="/categoryThree?q=1157119838137618433&amp;title=鱼肠肉肠&amp;sort=0"
                :id="l.id"
              >
                <img
                  :src="l.image"
                  alt="鱼肠肉肠"
                />
                <span>{{l.name}}</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1157118977583878146">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/f1ef6b5d-50f9-4d8e-b72e-15aa44925816.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(y,index) in bibei" :key="index">
              <a
                href="/categoryThree?q=1157120082862673921&amp;title=鱼油DHA&amp;sort=0"
                :id="y.id"
              >
                <img
                  :src="y.image"
                  alt="鱼油DHA"
                />
                <span>{{y.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            shijin:[],
            yongpin:[],
            wanju:[],
            bibei:[]
        }
    },
    async created(){
        //分类奶粉辅食
        let fenleibaobao = await this.$axios(
            "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/fenleibaobao"
        );
        //纸尿裤/湿巾
        this.shijin = fenleibaobao.data.data.categoryList[0].childs;
        //用品
        this.yongpin = fenleibaobao.data.data.categoryList[1].childs;
        //玩具
        this.wanju = fenleibaobao.data.data.categoryList[2].childs;
        //必备
        this.bibei = fenleibaobao.data.data.categoryList[3].childs;

        // console.log(this.yingyang)
    },
    methods: {
    navto(name) {
      this.$router.push({
        name
      });
    }
  }
}
</script>

