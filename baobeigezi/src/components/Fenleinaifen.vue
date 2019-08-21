<template>
  <div class="swiper-content classify_content">
    <div class="tabItem">
      <div class="inner">
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1151036711657017346">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/d64099a7-07e1-4794-a6ee-c521d31e5948.png"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(i,index) in naifen" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/1331e1c4-c3d6-4fc0-b303-8bd4501a3da9.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(f,index) in fushi" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/a9da1677-22cf-487d-88d1-8de71edb4642.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(l,index) in lingshi" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/c73708b1-d0d3-46aa-ae39-5f214ba3ef05.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(y,index) in yingyang" :key="index">
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
            naifen:[],
            fushi:[],
            lingshi:[],
            yingyang:[]
        }
    },
    async created(){
        //分类奶粉辅食
        let fenleinaifen = await this.$axios(
            "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/fenleinaifen"
        );
        //奶粉
        this.naifen = fenleinaifen.data.data.categoryList[0].childs;
        //辅食
        this.fushi = fenleinaifen.data.data.categoryList[1].childs;
        //零食
        this.lingshi = fenleinaifen.data.data.categoryList[2].childs;
        //营养
        this.yingyang = fenleinaifen.data.data.categoryList[3].childs;

        // console.log(this.yingyang)
    }
}
</script>

