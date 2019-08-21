<template>
  <div class="swiper-content classify_content">
    <div class="tabItem">
      <div class="inner">
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1151036711657017346">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/57ef5636-bcb6-4d8e-81fc-8caa211bd571.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(i,index) in xiangbao" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/c0fc3da6-efc5-4fee-982d-c9b0f44fe199.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(f,index) in peishi" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/60c21509-02a8-4099-9f9f-501a062ae58d.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(l,index) in fushi" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/8c486b39-9f06-4e1f-b5b3-5178c132bbe1.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(y,index) in jujia" :key="index">
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
          <a class="bannerBox" href="javascript:;" id="1157118756992847873">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/776050f9-45f9-4f22-a656-a6b58e6d447c.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(f,index) in jiazhuang" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/1971c54d-71fd-4bc0-b3d5-66cf9be89e0f.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(l,index) in neiyi" :key="index">
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
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/c82bfaf2-d28c-49c3-b6e9-50c5375063ec.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(y,index) in chongwu" :key="index">
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
            xiangbao:[],
            peishi:[],
            fushi:[],
            jujia:[],
            jiazhuang:[],
            neiyi:[],
            chongwu:[]
        }
    },
    async created(){
        let fenleijiaju = await this.$axios(
            "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/fenleijiaju"
        );
        //潮流箱包
        this.xiangbao = fenleijiaju.data.data.categoryList[0].childs;
        //手表配饰
        this.peishi = fenleijiaju.data.data.categoryList[1].childs;
        //服饰鞋帽
        this.fushi = fenleijiaju.data.data.categoryList[2].childs;
        //居家生活
        this.jujia = fenleijiaju.data.data.categoryList[3].childs;
        //家装家纺
        this.jiazhuang = fenleijiaju.data.data.categoryList[4].childs;
        //内衣
        this.neiyi = fenleijiaju.data.data.categoryList[5].childs;
        //宠物生活
        this.chongwu = fenleijiaju.data.data.categoryList[6].childs;
        // console.log(this.yingyang)
    }
}
</script>

