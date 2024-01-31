<template>
  <div class="personmain">
    <div class="back1">
      <!-- 导航信息 -->
      <div class="header">
        <!-- 导航左边 -->
        <ol class="headerleft">
          <!-- <img src="../assets/personal/img/pbac.png"> -->
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
      <div class="main1">
        <!-- 个人信息 -->
        <div class="bodyleft" v-for="item in personals" v-bind:key="item">
          <!-- 头像 -->
          <el-avatar :src="item.image" />
          <div class="name">
            <h1>{{ item.name }}</h1>
            <p>{{ item.fans }}粉丝·{{ item.attention }}关注</p>
          </div>
          <div class="infor">
            <h3>
              <img src="../assets/personal/img/approve.png" />{{ item.state }}
            </h3>
            <p>
              {{ item.identity }}&nbsp;&nbsp;|&nbsp;&nbsp; IP属地：{{
                item.ip
              }}&nbsp;&nbsp;|&nbsp;&nbsp;
              <img src="../assets/personal/img/qq.png" />
              <img src="../assets/personal/img/weibo.png" />
            </p>
          </div>
          <div class="ibtngroup">
            <el-button>编辑个人信息</el-button>
            <el-button>分享</el-button>
          </div>
        </div>
        <!-- 自选股票 -->
        <div class="bodyright">
          <div class="table">
            <div class="btngroup">
              <button class="tbtn">
                <p>01</p>
                自选股票
                <img src="../assets/index/img/x2.png" />
                <div class="line1">
                  <div class="dot1"></div>
                  <div class="dot1"></div>
                </div>
              </button>
              <button class="tbtn">
                <p>02</p>
                自选组合
                <img src="../assets/index/img/x2.png" />
                <div class="line2">
                  <div class="dot2"></div>
                  <div class="dot2"></div>
                </div>
              </button>
              <button class="mbtn">更多></button>
            </div>
            <div class="sbtngroup">
              <el-button
                >行情<el-icon><CaretBottom /></el-icon
              ></el-button>
              <el-button
                >多股同列<el-icon><CaretBottom /></el-icon
              ></el-button>
              <el-button
                >盈利预测<el-icon><CaretBottom /></el-icon
              ></el-button>
              <el-button
                >财务数据<el-icon><CaretBottom /></el-icon
              ></el-button>
              <el-button
                >盈亏一览<el-icon><CaretBottom /></el-icon
              ></el-button>
            </div>
            <div class="table-container">
              <el-table
                :data="tableData"
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
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="back2">
      <div class="publish">
        <div class="btngroup2">
          <el-button round>全部</el-button>
          <el-button round>我关注的股</el-button>
          <el-button round>我关注的人</el-button>
          <el-button round>我的发言</el-button>
          <el-button round>我的收藏</el-button>
        </div>
        <div class="speakerboard">
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
          <div class="board">
            <div class="top">
              <el-input
                type="text"
                id="title"
                v-model="currentArticle.title"
                maxlength="40"
                placeholder="请输入标题"
                show-word-limit
                @input="changeTitle"
                style="background-color: transparent"
              >
              </el-input>
            </div>
            <div class="bottom">
              <el-input
                type="textarea"
                id="content"
                rows="5"
                v-model="currentArticle.content"
                placeholder="请输入内容"
                @input="changeTitle"
                textareaStyle="{border:'none'}"
              >
              </el-input>
            </div>
          </div>
          <div class="owngroup">
            <p>
              发布至
              <el-input
                type="text"
                id="guba"
                v-model="currentArticle.guba"
                placeholder="请输入个股代码或股吧关键字"
                @input="changeTitle"
              ></el-input>
              <el-button type="submit" @click="article">发布</el-button>
            </p>
          </div>
        </div>
        <!-- 已发布文章列表 -->
        <div class="lists">
          <div class="item" v-for="(article, index) in articles" :key="index">
            <!-- v-for="(article, index) in articles" :key="index" -->
            <el-avatar :size="60" :src="url"> </el-avatar>
            <div class="underline"></div>
          </div>
        </div>
      </div>
    </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import axios from "axios";
import { Search, Refresh, CaretBottom } from "@element-plus/icons-vue";
import Bottom from "./Bottom.vue";
export default {
  name: "person",
  data() {
    return {
      personals: [
        {
          image: require("../assets/personal/img/avatar.png"),
          name: "王百万",
          fans: "0",
          attention: "34",
          state: "未认证",
          identity: "投资者",
          ip: "云南",
        },
      ],
      articles: [], //存储已发表的文章
      currentArticle: {
        title: "",
        content: "",
        guba: "",
      },
      url: '../assets/personal/img/avatar.png"',
    };
  },
  computed() {},
  methods: {
    GetRouterInfo(url) {
      var that = this;
      that.$router.push({ path: "/" + url + "" });
      this.className = "lun-img-two";
      setTimeout(() => {
        this.className = "lun-img";
      }, 300);
    },
    changeTitle() {
      //强制刷新渲染
      this.$forceUpdate();
    },
    article() {
      if (this.currentArticle.title && this.currentArticle.content) {
        this.articles.push({ ...this.currentArticle });
        this.currentArticle.title = "";
        this.currentArticle.content = "";
      } else {
        alert("请填写完整的文章信息");
      }
    },
    // fetchStocks() {
    //   // 这里替换为你的后端API接口
    //   const apiUrl = "https://api.example.com/stocks";
    //   fetch(apiUrl)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       this.stocks = data;
    //     })
    //     .catch((error) => {
    //       console.error("Error fetching stocks:", error);
    //     });
    // },
    // selectAllChange() {
    //   if (this.selectAll) {
    //     this.stocks.forEach((stock) => (stock.selected = true));
    //   } else {
    //     this.stocks.forEach((stock) => (stock.selected = false));
    //   }
    // },
    // selectStock(stock) {
    //   stock.selected = !stock.selected;
    //   if (!this.selectAll) {
    //     this.selectAll = this.stocks.every((s) => s.selected);
    //   }
    // },
    // getRowColor(stock) {
    //   return stock.index % 2 === 0 ? "#136183" : "transparent";
    // },
  },
  components: {
    Search,
    Refresh,
    CaretBottom,
    Bottom
  },
  mounted() {
    // this.fetchStocks();
  },
};
</script>

<style src="@/assets/personal/css/personal.css" scoped>

</style>