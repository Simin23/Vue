<template>
  <section id="common_header" class="common_header">
    <header class="common_header_bar">
      <a id="common_header_goback" class="common_header_goback" href="javascript:history.go(-1);">
        <span></span>
      </a>
      <div class="header_title">
        <a href="##" @click="navto('classify')" class="searchTit_class on">
          <span>分类</span>
        </a>
        <a href="##" @click="navto('brand')" class="searchTit_brand">
          <span>品牌</span>
        </a>
      </div>
      <a href="javascript:;" class="keyWord border-right-btn top-search-btn">
        <i class="search-icon"></i>
      </a>
    </header>
  </section>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    navto(name) {
      this.$router.push({
        name
      });
    }
  }
};
</script>

