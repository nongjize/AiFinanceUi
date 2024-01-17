<template>
  <div class="topimg">
    <img src="../assets/index/img/0.png" />
  </div>
  <div class="indexmain">
    <div class="back1">
      <!-- 导航信息 -->
      <div class="header">
        <!-- 个人中心 -->
        <ol class="headerleft">
          <li @click="GetRouterInfo('login')">个人中心</li>
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
            >AI投资课堂</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('community')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
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
        <div class="bbodyleft">
          <img src="../assets/index/img/title1.png" class="title1" />
          <button class="btn1">绑定账户 ></button>
        </div>
        <div class="bbodyright">
          <ChatWindowSimple class="chatwindow"></ChatWindowSimple>
        </div>
      </div>
    </div>
    <div class="back2">
      <img src="../assets/index/img/11.png" class="quoimg" />
      <div class="quomain">
        <img
          src="../assets/index/img/left.png"
          class="left"
          @click="sprevPage"
          :disabled="scurrentPage == 1"
        />
        <div class="carousel">
          <div class="box" v-for="stock in stocks" :key="stock.id">
            <div class="indexs">
              <p class="p1">{{ stock.name }}</p>
              <p class="p2">{{ stock.num1 }}</p>
              <text class="text1">{{ stock.num2 }}</text>
              <text class="text1">{{ stock.num3 }}</text>
            </div>
            <img src="../assets/index/img/head.png" />
          </div>
        </div>
        <img
          src="../assets/index/img/right.png"
          class="right"
          @click="snextPage"
          :disabled="scurrentPage == stockPages"
        />
      </div>
    </div>
    <div class="back3">
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
          <button class="tbtn">
            <p>02</p>
            智能组合
            <img src="../assets/index/img/x2.png" />
            <div class="line2">
              <div class="dot2"></div>
              <div class="dot2"></div>
            </div>
          </button>
          <button class="tbtn">
            <p>03</p>
            行业应用
            <img src="../assets/index/img/x2.png" />
            <div class="line2">
              <div class="dot2"></div>
              <div class="dot2"></div>
            </div>
          </button>
          <button class="mbtn">更多></button>
        </div>
        <div class="table-container">
          <el-table
            :data="tableData"
            style="width: 100%"
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
      </div>
    </div>
    <div class="back4">
      <div class="btngroup">
        <h1>财经快讯</h1>
      </div>
      <!-- 财经快讯 -->
      <div class="newbody">
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
    <div class="back5">
      <div class="classbody">
        <img src="../assets/index/img/classtitle.png" class="img1" />
        <button class="bodybtn" @click="GetRouterInfo('investclass')">更多></button>
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
import { CaretBottom, Refresh } from "@element-plus/icons";
import ChatWindowSimple from "./chatwindowSimple.vue";
import Bottom from "./Bottom.vue";

export default {
  name: "index",
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

      newsflash: true,
      //假定的虚拟数据
      stocks: [
        {
          id: 1,
          name: "上证指数",
          num1: "3017.78",
          num2: "29.96",
          num3: "0.99%",
        },
        {
          id: 2,
          name: "深圳",
          num1: "3017.78",
          num2: "29.96",
          num3: "0.99%",
        },
        {
          id: 3,
          name: "上证指数",
          num1: "3017.78",
          num2: "29.96",
          num3: "0.99%",
        },
        {
          id: 4,
          name: "上证指数",
          num1: "3017.78",
          num2: "29.96",
          num3: "0.99%",
        },
        {
          id: 5,
          name: "上证指数",
          num1: "3017.78",
          num2: "29.96",
          num3: "0.99%",
        },
      ],
      questions: ["每年几月份是最佳的融资窗口?"],
      spagesize: 5, //行情指数每页行情指数显示的数据条数
      scurrentPage: 1, //当前页码
      //存储智能推荐的表格数据
      tableData: [
        { namecode: "300地产", name: "股吧", price: "13.28", pricelimit: "" },
      ],
      chatList: [],
      inputMsg: "",
      showEmoji: false,
      frinedInfo: {},
      srcImgList: [],
      isSend: false,
      newsflashlists: [
        {
          headline: "中央金融工作会议：活跃资本市场",
          state: "焦点",
          source: "新华社",
          read: "408",
        },
        {
          headline: "中央金融工作会议：活跃资本市场",
          state: "焦点",
          source: "新华社",
          read: "408",
        },
        {
          headline: "中央金融工作会议：活跃资本市场",
          state: "焦点",
          source: "新华社",
          read: "408",
        },
        {
          headline: "中央金融工作会议：活跃资本市场",
          state: "新闻",
          source: "新华社",
          read: "408",
        },
        {
          headline: "中央金融工作会议：活跃资本市场",
          state: "焦点",
          source: "新华社",
          read: "408",
        },
      ],
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
    search() {
      const filteredItems = this.items.filter((item) =>
        item.includes(this.searchText)
      );
      console.log(filteredItems);
    },
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
    consult() {
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
    // sprevPage() {
    //   if (this.scurrentPage > 1) {
    //     this.scurrentPage--;
    //   }
    // },
    // snextPage() {
    //   if (this.scurrentPage < Math.ceil(this.totalItems / this.spageSize) {
    //     this.scurrentPage++;
    //   }
    // },
    // async getstockPageData() {
    //   const response = await axios.get('/api/items', {//
    //     params: {
    //       page: this.scurrentPage,
    //       size: 5,
    //     },
    //   });
    //   this.stocks = response.data.items;
    //   this.scurrentPage = response.data.scurrentPage;
    // },
    showAI() {
      this.Aidialog = true;
      this.newsList = false;
    },
    shownews() {
      this.Aidialog = false;
      this.newsList = true;
    },
    showflashnew() {
      this.newsflash = true;
    },
    
  },
  mounted() {
    
  },
  components: {
    ChatWindowSimple,
    CaretBottom,
    Refresh,
    Bottom
  },
  
  created() {
    // this.getstockPageData();
  },
  computed: {
    stockPages() {
      return Math.ceil(this.stocks.length / this.spageSize); // 总页数
    },
    getstockPageData() {
      const startIndex = (this.scurrentPage - 1) * this.spageSize;
      const endIndex = startIndex + this.pageSize;
      return this.stocks.slice(startIndex, endIndex); // 当前页的数据
    },
    
  },
};
</script>

<style style="scss" scoped>
@import url("../assets/index/css/index.css");
</style>