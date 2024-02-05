<template>
  <div class="aistockmain">
    <div class="back1">
      <!-- 导航信息 -->
      <div class="header">
        <!-- 导航左边 -->
        <ol class="headerleft">
          <li @click="GetRouterInfo('person')">个人中心</li>
        </ol>
        <div class="headermiddle">
          <el-button
            class="btn"
            @click="GetRouterInfo('index')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >首页</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('aistocks')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >AI股票</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('investclass')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            style="display: none"
            >AI投资课堂</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('community')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            style="display: none"
            >AI股民社区</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('news')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >新闻资讯</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('help')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >帮助中心</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('hidedra')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >卧虎藏龙</el-button
          >
        </div>
        <div class="headerright">
          <input
            class="sinput"
            type="text"
            v-model="SearchText"
            placeholder="Search"
          />
          <i class="icon" @click="search"></i>
        </div>
      </div>
      <div class="bbody">
        <img src="../assets/Aistocks/img/title1.png" class="title1" />
        <!-- <button class="btn1">绑定账户 ></button> -->
        <div class="bbodyright">
          <div class="table">
            <div class="btngroup">
              <button class="tbtn">
                <p>01</p>
                智能推荐
                <img src="../assets/index/img/x2.png" />
                <div class="line1">
                  <div class="dot1"></div>
                  <div class="dot1"></div>
                </div>
              </button>
              <!-- <button class="tbtn" style="display: none;">
                <p>02</p>
                智能组合
                <img src="../assets/index/img/x2.png" />
                <div class="line2">
                  <div class="dot2"></div>
                  <div class="dot2"></div>
                </div>
              </button>
              <button class="tbtn" style="display: none;">
                <p>03</p>
                行业应用
                <img src="../assets/index/img/x2.png" />
                <div class="line2">
                  <div class="dot2"></div>
                  <div class="dot2"></div>
                </div>
              </button> -->
              <button
                class="mbtn"
                style="width: 80px"
                onclick="window.open('https://work.weixin.qq.com/kfid/kfcfd990537d8749f8d?enc_scene=ENC5JURwTPhxtzAA8XmkFjRdYUiFsy3jVXB1xtzZyz59b2pthsCKzHa2GQSLGpqSwqHNz')"
              >
                联系客服
              </button>
            </div>
            <div class="table-container">
              <el-table
                :data="tableData"
                :header-row-style="{ height: '60px', color: 'white' }"
                :row-style="{ height: '60px' }"
              >
                <el-table-column
                  fixed
                  prop="stockcode"
                  label="股票代码"
                  width="130"
                />
                <el-table-column prop="name" label="股票名称" width="120" />
                <el-table-column prop="price" label="最新价" width="120" />
                <el-table-column
                  prop="pricelimit"
                  label="涨跌幅(%)"
                  width="120"
                />
                <el-table-column
                  prop="turnoverrate"
                  label="换手率(%)"
                  width="120"
                />
                <el-table-column
                  prop="volumetran"
                  label="成交额(元)"
                  width="180"
                />
                <el-table-column
                  prop="circulationmarketvalue"
                  label="当日流通市值(元)"
                  width="180"
                />
                <!-- <el-table-column
                  fixed
                  prop="namecode"
                  label="名称代码"
                  width="120"
                />
                <el-table-column prop="name" label="股吧" width="80" />
                <el-table-column prop="price" label="最新价" width="80" />
                <el-table-column prop="pricelimit" label="涨跌幅" width="80" />
                <el-table-column prop="range" label="涨跌额" width="80" />
                <el-table-column prop="masterhand" label="总手" width="80" />
                <el-table-column prop="presentsale" label="现手" width="80" />
                <el-table-column prop="buy" label="买入价" width="80" />
                <el-table-column prop="sale" label="卖出价" width="80" />
                <el-table-column prop="yesclosing" label="昨收" width="80" />
                <el-table-column prop="volumetran" label="成交额" width="80" />
                <el-table-column
                  prop="turnoverrate"
                  label="换手率"
                  width="80"
                />
                <el-table-column prop="swing" label="振幅" width="80" />
                <el-table-column prop="ratio" label="量比" width="80" />
                <el-table-column prop="acceleration" label="涨速" width="80" />
                <el-table-column prop="peratio" label="市盈率" width="80" />
                <el-table-column prop="earings" label="每股收益" width="120" />
                <el-table-column
                  prop="trade"
                  label="所属行业版块"
                  width="120"
                />
                <el-table-column align="right" fixed="right">
                  <template #header> 加自选 </template>
                  <template #default="scope">
                    <el-button
                      size="small"
                      class="cbtn"
                      @click="handleEdit(scope.$index, scope.row)"
                      >+自选</el-button
                    >
                  </template>
                </el-table-column> -->
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="back2">
      <div class="canleft">
        <div class="table">
          <div class="btngroup">
            <button class="tbtn" @click="fetchforeCastData">
              <p>01</p>
              智能组合1
              <img src="../assets/index/img/x2.png" />
              <div class="line1">
                <div class="dot1"></div>
                <div class="dot1"></div>
              </div>
            </button>
            <button class="tbtn">
              <p>02</p>
              智能组合2
              <img src="../assets/index/img/x2.png" />
              <div class="line2">
                <div class="dot2"></div>
                <div class="dot2"></div>
              </div>
            </button>
            <button class="tbtn">
              <p>03</p>
              智能组合3
              <img src="../assets/index/img/x2.png" />
              <div class="line2">
                <div class="dot2"></div>
                <div class="dot2"></div>
              </div>
            </button>
            <button class="mbtn" style="display: none">新建组合></button>
          </div>
          <div class="btngroup">
            <button class="bbtn" @click="showchose" style="display: none">
              我的自选<el-icon><CaretBottom /></el-icon>
            </button>
            <button class="bbtn">
              智能预测<el-icon><CaretBottom /></el-icon>
            </button>
          </div>
          <div class="table-container" v-show="ownshow">
            <!-- 我的自选 -->
            <el-table
              :data="ownData"
              style="width: 90%"
              height="100%"
              :header-row-style="{ height: '60px', color: 'white' }"
              :row-style="{ height: '60px' }"
            >
              <el-table-column
                fixed
                prop="namecode"
                label="名称代码"
                width="120"
              />
              <el-table-column prop="name" label="股吧" width="80" />
              <el-table-column prop="price" label="最新价" width="80" />
              <el-table-column prop="pricelimit" label="涨跌幅" width="80" />
              <el-table-column prop="range" label="涨跌额" width="80" />
              <el-table-column prop="masterhand" label="总手" width="80" />
              <el-table-column prop="presentsale" label="现手" width="80" />
              <el-table-column prop="buy" label="买入价" width="80" />
              <el-table-column prop="sale" label="卖出价" width="80" />
              <el-table-column prop="yesclosing" label="昨收" width="80" />
              <el-table-column prop="volumetran" label="成交额" width="80" />
              <el-table-column prop="turnoverrate" label="换手率" width="80" />
              <el-table-column prop="swing" label="振幅" width="80" />
              <el-table-column prop="ratio" label="量比" width="80" />
              <el-table-column prop="acceleration" label="涨速" width="80" />
              <el-table-column prop="peratio" label="市盈率" width="80" />
              <el-table-column prop="earings" label="每股收益" width="120" />
              <el-table-column prop="trade" label="所属行业版块" width="120" />
              <el-table-column align="right" fixed="right">
                <template #header> 加自选 </template>
                <template #default="scope">
                  <el-button
                    size="small"
                    class="cbtn"
                    @click="handleEdit(scope.$index, scope.row)"
                    >+自选</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
          </div>
          <div class="table-container" v-show="forecast">
            <!-- 我的自选 -->
            <el-table
              :data="forecastData"
              style="width: 90%"
              height="100%"
              :header-row-style="{ height: '60px', color: 'white' }"
              :row-style="{ height: '60px' }"
            >
              <el-table-column
                fixed
                prop="ts_code"
                label="股票代码"
                width="180"
              />
              <el-table-column prop="his_low" label="历史最低价" width="120" />
              <el-table-column prop="his_high" label="历史最高价" width="120" />
              <el-table-column
                prop="weight_avg"
                label="加权平均成本"
                width="120"
              />
              <el-table-column prop="winner_rate" label="胜率" width="120" />
              <!-- <el-table-column
                prop="classify"
                label="报告分类"
                width="80"
              />
              <el-table-column
                prop="org_name"
                label="机构名称"
                width="80"
              />
              <el-table-column
                prop="quarter"
                label="预测报告期"
                width="80"
              />
              <el-table-column
                prop="op_rt"
                label="预测营业收入（万元）"
                width="80"
              />
              <el-table-column
                prop="op_pr"
                label="预测营业利润"
                width="80"
              />
              <el-table-column
                prop="tp"
                label="预测利润总额"
                width="80"
              />
              <el-table-column
                prop="np"
                label="预测净利润"
                width="80"
              />
              <el-table-column prop="eps" label="预测每股收益" width="80" />
              <el-table-column prop="pe" label="预测市盈率" width="80" />
              <el-table-column prop="rd" label="预测股息率" width="80" />
              <el-table-column prop="roe" label="预测净资产收益率" width="80" />
              <el-table-column prop="max_price" label="预测最高目标价" width="120" />
              <el-table-column prop="min_price" label="预测最低目标价" width="120" /> -->
            </el-table>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="back3">
      <div class="btngroup">
        <button class="group1" @click="showAI">AI对话</button>
        <button class="group1" @click="shownews">财经快讯</button>
        <button class="group1">热榜</button>
        <button class="group1">投顾</button>
      </div>
      <div class="body4">
        
        <div class="aibody" v-show="Aidialog">
          <div class="aileft">
            <ChatWindowSimple></ChatWindowSimple>
          </div>
          <div class="airight">
            <h1>大家都在问我</h1>
            <ul>
              <li
                v-for="item in questions"
                v-bind:key="item"
                @click="selectItem(item)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>
       
        <div class="newbody" v-show="newsList">
          <div class="newbtngroup">
            <button class="nbtn" @click="showflashnew">
              动态<el-icon><CaretBottom /></el-icon>
            </button>
            <button class="nbtn">
              关注<el-icon><CaretBottom /></el-icon>
            </button>
            <button class="refesh">
              刷新<el-icon><Refresh /></el-icon>
            </button>
          </div>
          <div class="quicklist" v-show="newsflash">
            <ul v-for="item in newsflashlists" v-bind:key="item">
              <li>{{ item.headline }}</li>
              <el-tag>{{ item.state }}</el-tag>
              <text>{{ item.source }}</text>
              <text>{{ item.read }}评</text>
            </ul>
          </div>
        </div>
      </div>
    </div> -->
    <div class="back4" style="display: none">
      <div class="classbody">
        <img src="../assets/index/img/classtitle.png" class="img1" />
        <button class="bodybtn">更多></button>
        <div class="coursenew">
          <div class="imagebac">
            <img class="cimg" src="../assets/index/img/R-C1.jpg" />
            <img class="cimg" src="../assets/index/img/R-C1.jpg" />
            <img
              class="cimg"
              src="../assets/index/img/R-C1.jpg"
              style="margin-right: 0"
            />
          </div>
          <div class="courselist">
            <p class="p1">金融界/2023-12-12</p>
            <p class="p2">投资课堂</p>
            <p class="p3">运用数字科技服务</p>
          </div>
          <div class="courselist">
            <p class="p1"></p>
            <p class="p2"></p>
            <p class="p3"></p>
          </div>
          <div class="courselist" style="margin-right: 0">
            <p class="p1"></p>
            <p class="p2"></p>
            <p class="p3"></p>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import axios from "axios";
import { animation } from "@/util/util";
import { getforeCastData, getstockList } from "@/api/getData";
import HeadPortrait from "@/components/HeadPortrait.vue";
import FileCard from "@/components/FileCard.vue";
import { CaretBottom } from "@element-plus/icons";
import ChatWindowSimple from "./chatwindowSimple.vue";
import Bottom from "./Bottom.vue";
export default {
  name: "aistocks",
  data() {
    return {
      SearchText: "",
      items: ["最新咨询", "股票"],
      underline1: false,
      shine1: false,
      underline2: false,
      shine2: false,
      underline3: false,
      shine3: false,
      underline4: false,
      shine4: false,
      images: [{ url: require("../assets/index/img/teacher1.png") }],
      courseimages: [{ url: require("../assets/index/img/R-C1.jpg") }],
      Aidialog: false,
      newsList: true,
      newsflash: true,
      ownshow: false,
      forecast: true,
      chatList: [],
      inputMsg: "",
      srcImgList: [],
      isSend: false,
      newsflashlists: [],
      tableData: [
        {
          stockcode: "",
          name: "",
          price: "",
          pricelimit: "",
          turnoverrate: "",
          volumetran: "",
          circulationmarketvalue: "",
        },
        {
          stockcode: "",
          name: "",
          price: "",
          pricelimit: "",
          turnoverrate: "",
          volumetran: "",
          circulationmarketvalue: "",
        },
        {
          stockcode: "",
          name: "",
          price: "",
          pricelimit: "",
          turnoverrate: "",
          volumetran: "",
          circulationmarketvalue: "",
        },
        {
          stockcode: "",
          name: "",
          price: "",
          pricelimit: "",
          turnoverrate: "",
          volumetran: "",
          circulationmarketvalue: "",
        },
        {
          stockcode: "",
          name: "",
          price: "",
          pricelimit: "",
          turnoverrate: "",
          volumetran: "",
          circulationmarketvalue: "",
        },
        {
          stockcode: "",
          name: "",
          price: "",
          pricelimit: "",
          turnoverrate: "",
          volumetran: "",
          circulationmarketvalue: "",
        },
        {
          stockcode: "",
          name: "",
          price: "",
          pricelimit: "",
          turnoverrate: "",
          volumetran: "",
          circulationmarketvalue: "",
        },
      ],
      forecastData: [],
    };
  },
  methods: {
    GetRouterInfo(url) {
      var that = this;
      that.$router.push({ path: "/" + url + "" });
      this.className = "lun-img-two";
      setTimeout(() => {
        this.className = "lun-img";
      }, 300);
    },
    // search() {
    //   const filteredItems = this.items.filter((item) =>
    //     item.includes(this.searchText)
    //   );
    //   console.log(filteredItems);
    // },
    course() {
      this.underline1 = true;
      this.shine1 = true;
      this.underline2 = false;
      this.shine2 = false;
      this.underline3 = false;
      this.shine3 = false;
      this.underline4 = false;
      this.shine4 = false;
    },
    interflow() {
      this.underline2 = true;
      this.shine2 = true;
      this.underline1 = false;
      this.shine1 = false;
      this.underline3 = false;
      this.shine3 = false;
      this.underline4 = false;
      this.shine4 = false;
    },
    news() {
      this.underline2 = false;
      this.shine2 = false;
      this.underline1 = false;
      this.shine1 = false;
      this.underline3 = true;
      this.shine3 = true;
      this.underline4 = false;
      this.shine4 = false;
    },
    help() {
      this.underline2 = false;
      this.shine2 = false;
      this.underline1 = false;
      this.shine1 = false;
      this.underline3 = false;
      this.shine3 = false;
      this.underline4 = true;
      this.shine4 = true;
    },
    showAI() {
      this.Aidialog = true;
      this.newsList = false;
    },
    shownews() {
      this.Aidialog = false;
      this.newsList = true;
    },
    showchose() {
      this.ownshow = true;
    },
    showforecast() {
      this.ownshow = false;
      this.forecast = true;
    },
    async fetchforeCastData() {
      try {
        this.forecastData=await getforeCastData();
        // getforeCastData.then((res) => {
        //   this.forecastData = res.data.items;
        // });
      } catch (error) {
        console.error("获取盈利预测数据失败：", error);
      }
    },
    // fetchforeCastData(){
    //   getforeCastData().then((res)=>{
    //   var i=3
    //   this.forecastData.forEach(element =>{
    //       element.stockcode=res.data.items[i][1];//股票代码
    //       element.his_low=res.data.items[i][2];//历史最低价
    //       element.his_high=res.data.items[i][3];//历史最高价
    //       element.weight_avg=res.data.items[i][4];//加权平均成本
    //       element.winner_rate=res.data.items[i][5];//胜率

    //       i=i+2;
    //     }
    //     );

    // })

    // }
  },

  components: {
    HeadPortrait,
    FileCard,
    CaretBottom,
    ChatWindowSimple,
    Bottom,
  },
  props: {
    frinedInfo: Object,
    default() {
      return {};
    },
  },
  mounted() {
    this.fetchforeCastData();
    //智能推荐
    getstockList().then((res) => {
      var i = 3;
      this.tableData.forEach((element) => {
        element.stockcode = res.data.items[i][1];
        element.name = res.data.items[i][2];
        element.price = res.data.items[i][3];
        element.pricelimit = res.data.items[i][4]; //涨跌幅
        element.turnoverrate = res.data.items[i][5]; //换手率
        element.volumetran = res.data.items[i][6]; //总成交额
        element.circulationmarketvalue = res.data.items[i][13]; //当日流通市值
        i = i + 2;
      });
    });
    //智能组合1
    // getforeCastData().then((res)=>{
    //   var i=3
    //   this.forecastData.forEach(element =>{
    //       element.stockcode=res.data.items[i][1];//股票代码
    //       element.his_low=res.data.items[i][2];//历史最低价
    //       element.his_high=res.data.items[i][3];//历史最高价
    //       element.weight_avg=res.data.items[i][4];//加权平均成本
    //       element.winner_rate=res.data.items[i][5];//胜率

    //       i=i+2;
    //     }
    //     );
    //     console.log(this.forecastData)

    // })
  },
};
</script>

<style src="@/assets/Aistocks/css/aistocks.css" scoped>
</style>