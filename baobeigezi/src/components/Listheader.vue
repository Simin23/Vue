<template>
  <section
    id="common_header"
    class="common_header"
    style="position: fixed;top:0;left:0;background: white;width: 320px"
  >
    <header class="common_header_bar">
      <a id="common_header_goback" class="common_header_goback" href="javascript:history.go(-1);">
        <span></span>
      </a>
      <div class="header_title">1段</div>
      <a href="javascript:;" class="keyWord border-right-btn top-search-btn top-right-search-btn">
        <!--<i class="search-category-icon search-icon"></i>-->
      </a>
      <div class="header-nav">
        <a href="javascript:;" class="slideDownBtn">
          <span class="search-category-icon nav-icon"></span>
        </a>
        <div class="headerNavBar hide">
          <div class="footerBar">
            <a href="/index" class="item">
              <span class="con-icon home1"></span>
              <span class="item-text">首页</span>
            </a>
            <a href="/category" class="item current">
              <span class="con-icon you1"></span>
              <span class="item-text">分类</span>
            </a>
            <a href="/car" class="item">
              <span class="con-icon car1"></span>
              <span class="item-text">购物车</span>
            </a>
            <a href="/mycenter" class="item">
              <span class="con-icon my1"></span>
              <span class="item-text">我的</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  </section>
</template>
<style>
.common_header {
  background: white;
  width: 320px;
}
</style>
