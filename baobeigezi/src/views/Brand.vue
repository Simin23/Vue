<template>
  <div>
    <Navbar />
    <div class="searchBrand_01" style="margin-top: 38px">
      <a href="/brandAll" class="brandTotal" style="bottom: 50px;">全部</a>
      <div class="swiper-content classify_content">
        <div class="tabItem brand_floor first" v-for="(i,index) in brand" :key="index">
          <div class="brand">
            <h2>{{i.firstName}}</h2>
          </div>
          <ul class="clearfix">
            <li v-for="(i,index) in i.brandList" :key="index">
              <a href="/brandDetail?sort=0&amp;q=1138348044551458818">
                <img :src="i.logo" alt="Adidas阿迪达斯" />
                <span>{{i.name}}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default {
  data() {
    return {
      brand: []
    };
  },
  components: {
    Navbar,
    Footer
  },
  async created() {
    let brand = await this.$axios(
      "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/brand"
    );
    this.brand = brand.data.data.filterBrand;
    this.brandList = brand.data.data.brandList;
    // console.log(this.brand);
  }
};
</script>

