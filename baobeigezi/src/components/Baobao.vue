<template>
  <div>
    <!-- <van-list></van-list> -->
    <div class="waterList">
      <div class="water">
        <div class="today_golbal">
          <van-list
            class="clearfix"
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
          >
            <li class="lis" v-for="(i,index) in baobao" :key="index">
              <a data-track="main-fall-goods" :href="i.nationsImage" :id="i.goodsId">
                <div class="imgDiv">
                  <img class="lazy" :src="i.mainImg" alt style="display: inline;" />
                </div>
                <div class="waterButtom pr">
                  <div class="waterName text-overflow2">{{i.name}}</div>
                  <div class="waterPrice">￥{{i.salePrice}}</div>
                </div>
              </a>
            </li>
          </van-list>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [],
      //列表
      loading: false,
      finished: false,
      baobao: []
    };
  },
  methods: {
    async onLoad() {
      //获取商品数据
      let baobao = await this.$axios(
        "https://www.easy-mock.com/mock/5d402c1499acfe0359e0187d/example/baobao"
      );
      this.baobao = [...this.baobao, ...baobao.data.data.goodsList];    
      // 加载状态结束
      this.loading = false;
      this.$toast.clear();
      // 数据全部加载完成
      if (this.baobao.length >= 40) {
        this.finished = true;
      }
    }
  },
  created() {
    this.$toast({
      mask: true,
      message: "加载中..."
    });

    //首次加载
    this.onLoad();
    this.$toast.clear();
  }
};
</script>
<style>
li {
  list-style: none;
}
</style>

