<template>
  <div class="swiper-content classify_content">
    <div class="tabItem">
      <div class="inner">
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1151036711657017346">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/93a8b811-5a49-4ab5-aaa5-a1634174b6ac.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(i,index) in jiankang" :key="index">
              <a
                href="/categoryThree?q=1151041137260105729&amp;title=Pre段&amp;sort=0"
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/730b38a5-a61a-4ee7-a1f6-31abeb4861de.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(f,index) in buchong" :key="index">
              <a
                href="/categoryThree?q=1157119161655103489&amp;title=米粉米糊&amp;sort=0"
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/3104e214-482c-4afe-8b38-aa3bd9b8d160.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(l,index) in nvshi" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/0a404580-bf84-44a8-91d3-5d97ccbd609f.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(y,index) in nanshi" :key="index">
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
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1157118864010514433">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/624fdda9-7a7f-43cd-a58f-acb590f6addc.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(l,index) in guanai" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/1c91852d-1b36-4fcf-ba63-6e9dac42202d.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(y,index) in yiyao" :key="index">
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
            jiankang:[],
            buchong:[],
            nvshi:[],
            nanshi:[],
            guanai:[],
            yiyao:[]
        }
    },
    async created(){
        let fenleiyingyang = await this.$axios(
            "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/fenleiyingyang"
        );
        //健康养护
        this.jiankang = fenleiyingyang.data.data.categoryList[0].childs;
        //营养补充
        this.buchong = fenleiyingyang.data.data.categoryList[1].childs;
        //女士必备
        this.nvshi = fenleiyingyang.data.data.categoryList[2].childs;
        //男士必备
        this.nanshi = fenleiyingyang.data.data.categoryList[3].childs;
        //关爱老年
        this.guanai = fenleiyingyang.data.data.categoryList[4].childs;
        //医药保健
        this.yiyao = fenleiyingyang.data.data.categoryList[5].childs;
        // console.log(this.yingyang)
    }
}
</script>

