<template>
  <div class="swiper-content classify_content">
    <div class="tabItem">
      <div class="inner">
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1151036711657017346">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/3c8622c8-6d6b-4822-a1a0-af403f7fcc52.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(i,index) in caizhuang" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/98d432a7-51e8-45e9-809b-4bc185175dd3.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(f,index) in xiangfen" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/8e00ecc5-705c-4118-a9b4-b76ad3cc64c5.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(l,index) in meirong" :key="index">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            caizhuang:[],
            xiangfen:[],
            meirong:[]
        }
    },
    async created(){
        //分类奶粉辅食
        let fenleimeizhuang = await this.$axios(
            "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/fenleimeizhuang"
        );
        //纸彩妆
        this.caizhuang = fenleimeizhuang.data.data.categoryList[0].childs;
        //香氛
        this.xiangfen = fenleimeizhuang.data.data.categoryList[1].childs;
        //美容工具
        this.meirong = fenleimeizhuang.data.data.categoryList[2].childs;

        // console.log(this.yingyang)
    }
}
</script>

