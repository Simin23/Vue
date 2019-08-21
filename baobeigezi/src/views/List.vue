<template>
  <div>
    <Listheader />
    <div class="listShop">
      <div class="changeStyle_box">
        <div class="nav2 clearfix nav2_four" style="width:100%;border-bottom: none;">
          <a href="javascript:;" class="syn on">
            <span>
              综合
              <i class="search-category-icon triangleDown"></i>
            </span>
          </a>

          <a href="javascript:;" class="sort3 price">
            <span>
              价格
              <i class="search-category-icon"></i>
            </span>
          </a>

          <a href="javascript:;" class="sort4 price">
            <span>销量</span>
          </a>
          <a href="javascript:;" class="sift">
            <span>筛选</span>
            <i class="search-category-icon triangleDown"></i>
          </a>
        </div>
      </div>
      <!-- 筛选 -->
      <div class="searchTemp" id="subSearchTemp" style="display: none;">
        <div class="shadel"></div>
        <div class="searchTempBody">
          <div class="searchTempList">
            <div class="option">
              <a href="javascript:;" class="sort0" style="color: rgb(238, 93, 88);">
                综合排序
                <i class="search-category-icon success-icon"></i>
              </a>
            </div>
            <div class="option">
              <a href="javascript:;" class="sort1">新品优先</a>
            </div>
          </div>
        </div>
      </div>
      <div class="searchTemp" style="display: none;" id="mainSearchTemp">
        <div class="shadel"></div>
        <div class="searchTempBody">
          <div class="searchTempList">
            <div class="option">
              <div class="optionChild">
                <div class="optionChildBox clearfix">
                  <a
                    href="javascript:;"
                    class="goodsType1"
                    attribute_name="goodsType"
                    categoryid="1"
                    attribute_value="1"
                  >有货</a>
                  <a
                    href="javascript:;"
                    class="goodsType2"
                    attribute_name="goodsType"
                    categoryid="2"
                    attribute_value="2"
                  >秒杀</a>
                  <a
                    href="javascript:;"
                    class="goodsType3"
                    attribute_name="goodsType"
                    categoryid="3"
                    attribute_value="3"
                  >预售</a>
                </div>
              </div>
            </div>
            <div class="option">
              <div class="optionTit clearfix">
                <div class="optionTitText">价格区间</div>
              </div>
              <div class="optionChild">
                <div class="optionChildBox clearfix">
                  <div class="seacrhBox">
                    <input
                      type="number"
                      placeholder="最低价"
                      name="priceBegin"
                      class="searchTxt"
                      value
                    />
                    <i class="search-icon-close search-category-icon"></i>
                  </div>
                  <div class="middle">&nbsp;—&nbsp;</div>
                  <div class="seacrhBox">
                    <input placeholder="最高价" type="number" name="priceEnd" value class="searchTxt" />
                    <i class="search-icon-close search-category-icon"></i>
                  </div>
                </div>
              </div>
            </div>

            <div class="option">
              <div class="optionTit clearfix">
                <a href="javascript:;" class="switch">
                  <span class="optionTitOptions">全部</span>
                </a>
                <div class="optionTitText">分类</div>
              </div>

              <div class="optionChild">
                <div class="optionChildTit">洗护喂养</div>
                <div class="optionChildBox clearfix">
                  <a
                    href="javascript:;"
                    attribute_name="t"
                    categoryid="1151040922671124482"
                    attribute_value="1151040922671124482"
                    class
                  >书/餐/背包</a>
                </div>
              </div>
            </div>

            <div class="option">
              <div class="optionTit clearfix">
                <a href="javascript:;" class="switch">
                  <span class="optionTitOptions">全部</span>
                </a>
                <div class="optionTitText">品牌</div>
              </div>
              <div class="optionChild">
                <div class="optionChildBox clearfix">
                  <a
                    href="javascript:;"
                    attribute_name="b"
                    brandid="1138357911102164994"
                    attribute_value="1138357911102164994"
                    class
                  >其他</a>

                  <a
                    href="javascript:;"
                    attribute_name="b"
                    brandid="1138358034737664001"
                    attribute_value="1138358034737664001"
                    class
                  >杯具熊</a>

                  <a
                    href="javascript:;"
                    attribute_name="b"
                    brandid="1138357872900444162"
                    attribute_value="1138357872900444162"
                    class
                  >Beddy Bear杯具熊</a>
                </div>
              </div>
            </div>

            <div class="option">
              <div class="optionTit clearfix">
                <a href="javascript:;" class="switch">
                  <span class="optionTitOptions">全部</span>
                </a>
                <div class="optionTitText">国家</div>
              </div>
              <div class="optionChild">
                <div class="optionChildBox clearfix">
                  <a
                    href="javascript:;"
                    attribute_name="country"
                    nationsid="1128905392529760257"
                    attribute_value="1128905392529760257"
                    class
                  >韩国</a>

                  <a
                    href="javascript:;"
                    attribute_name="country"
                    nationsid="1128904902949625857"
                    attribute_value="1128904902949625857"
                    class
                  >中国</a>
                </div>
              </div>
            </div>
          </div>
          <div class="searchTempBtn clearfix">
            <a href="javascript:;" class="reload">重置</a>
            <a href="javascript:;" class="submit">确定</a>
          </div>
        </div>
      </div>
      <div class="waterList">
        <div class="water">
          <div class="today_golbal">
            <ul class="clearfix" id="listShopCont">
              <li class="lis" v-for="(i,index) in list" :key="index" @click="toDetail(index)">
                <a 
                  data-track="main-fall-goods"
                  href="javascript:void(0)"
                  :id="i.goodsId"
                >
                  <div class="imgDiv">
                    <img
                      class="lazy"
                      :src="i.mainImg"
                      alt
                      style="display: inline;"
                    />
                  </div>
                  <div class="waterButtom pr">
                    <div class="waterName text-overflow2">{{i.name}}</div>
                    <div class="waterPrice">￥{{i.marketPrices}}</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Listheader from "../components/Listheader";
export default {
  data(){
    return{
      list:[]
    }
  },
  components: {
    Listheader
  },
  async created() {
    this.$axios({
      method: "post",
      headers: { "content-type": "application/x-www-form-urlencoded" }, //局部更改
      url: "http://localhost:3000/find/list"
    }).then(res => {
      // console.log(res);
      this.list = res.data[0].data.goodsList;
      console.log(this.list)
    });
  },
  methods:{
    toDetail(index){
      let id = this.list[index].goodsId;
      console.log(id)
      this.$router.push({
        path:'/detail/'+id
      })
    }
  }
};
</script>


