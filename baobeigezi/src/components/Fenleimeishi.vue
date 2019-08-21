<template>
  <div class="swiper-content classify_content">
    <div class="tabItem">
      <div class="inner">
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1151036711657017346">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/5cfa74f5-7bf7-4061-8da5-666ae1287a4f.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(i,index) in jiushui" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/e12698df-51f4-4b30-a63d-f05fe4096e9e.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(f,index) in liangyou" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/e6aca0da-60fb-4ca5-87b9-413d2f173fcb.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(l,index) in shipin" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/3cacde7a-ccfa-4031-b419-11538bdcaa43.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(y,index) in lingshi" :key="index">
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
            jiushui:[],
            liangyou:[],
            shipin:[],
            lingshi:[]
        }
    },
    async created(){
        let fenleimeishi = await this.$axios(
            "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/fenleimeishi"
        );
        //冲饮酒水
        this.jiushui = fenleimeishi.data.data.categoryList[0].childs;
        //粮油副食
        this.liangyou = fenleimeishi.data.data.categoryList[1].childs;
        //生鲜食品
        this.shipin = fenleimeishi.data.data.categoryList[2].childs;
        //休闲零食
        this.lingshi = fenleimeishi.data.data.categoryList[3].childs;

        // console.log(this.yingyang)
    }
}
</script>

