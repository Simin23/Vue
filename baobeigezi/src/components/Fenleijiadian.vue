<template>
  <div class="swiper-content classify_content">
    <div class="tabItem">
      <div class="inner">
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1151036711657017346">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/cf3831d3-a7fd-4cfd-b5e0-2ff89f1b78ae.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(i,index) in gehu" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/72e41e26-72ea-49b1-942c-ec6c62047658.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(f,index) in shenghuo" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/1c9c8e17-b504-437f-9ea4-6fda5baec005.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(l,index) in chuwei" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/13eee4c9-7525-4ea0-86b7-d6bbd0d45fc4.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(y,index) in yingyin" :key="index">
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
            gehu:[],
            shenghuo:[],
            chuwei:[],
            yingyin:[]
        }
    },
    async created(){
        let fenleijiadian = await this.$axios(
            "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/fenleijiadian"
        );
        //个护电器
        this.gehu = fenleijiadian.data.data.categoryList[0].childs;
        //生活电器
        this.shenghuo = fenleijiadian.data.data.categoryList[1].childs;
        //厨卫电器
        this.chuwei = fenleijiadian.data.data.categoryList[2].childs;
        //数码影音
        this.yingyin = fenleijiadian.data.data.categoryList[3].childs;

        // console.log(this.yingyang)
    }
}
</script>

