<template>
  <div class="swiper-content classify_content">
    <div class="tabItem">
      <div class="inner">
        <div class="innerLi">
          <a class="bannerBox" href="javascript:;" id="1151036711657017346">
            <img
              class="banner"
              src="http://imagespro.baobeigezi.com/bbgz2019/brand-image/326d54b0-b5fb-406c-9fc8-ea2bfc3f6d2a.jpg"
              alt
            />
          </a>
          <ul class="clearfix classNav">
            <li v-for="(i,index) in fenleimeirong" :key="index">
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
      </div>
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            fenleimeirong:[]
        }
    },
    async created(){
        //分类奶粉辅食
        let fenleimeirong = await this.$axios(
            "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/fenleimeirong"
        );
        this.fenleimeirong = fenleimeirong.data.data.categoryList[0].childs;

        // console.log(this.fenleimeirong)
    }
}
</script>

