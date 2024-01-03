<template>
  <div class="back1">
    <!-- 导航信息 -->
    <div class="header">
      <!-- 导航左边 -->
      <ol class="headerleft">
        <li @click="person">个人中心</li>
      </ol>
      <div class="headermiddle">
        <el-button
          class="btn"
          @click="index"
          onmouseout="this.style.color='white'"
          >首页</el-button
        >
        <el-button
          class="btn"
          @click="aistocks"
          onmouseout="this.style.color='white'"
          >AI股票</el-button
        >
        <el-button
          class="btn"
          @click="investclass"
          onmouseout="this.style.color='white'"
          >AI投资课堂</el-button
        >
        <el-button
          class="btn"
          @click="community"
          onmouseout="this.style.color='white'"
          >AI股民社区</el-button
        >
        <el-button
          class="btn"
          @click="news"
          onmouseout="this.style.color='white'"
          >新闻资讯</el-button
        >
        <el-button
          class="btn"
          @click="helps"
          onmouseout="this.style.color='white'"
          >帮助中心</el-button
        >
        <el-button
          class="btn"
          @click="hidedra"
          onmouseout="this.style.color='white'"
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
      <div class="helpmain">
        <div class="introduce">
          <h1 class="h1">AI智能股票投资是什么？</h1>
          <p class="p1">
            AI智能投资是指利用人工智能（AI）技术进行股票投资的一种方法。通过使用大数据、机器学习、深度学习等先进技术，<br />AI系统可以分析大量金融数据，识别潜在投资机会和风险，从而为投资者提供决策支持
          </p>
          <h1 class="h1">为什么选择AI智能投资</h1>
          <p class="p1">AI智能股票投资的主要优势包括：</p>
        </div>
        <div class="trait">
          <div class="trait1">
            <img src="../assets/Help/img/effient.png" class="pic" />
            <h1 class="h1">高效性</h1>
            <p class="p1">
              AI系统可以快速处理大量数据，<br />实时更新市场信息，帮助投资者迅速做出决策。
            </p>
          </div>
          <div class="trait2">
            <img src="../assets/Help/img/risk.png" class="pic" />
            <h1 class="h1">风险管理</h1>
            <p class="p1">
              AI系统可以实时监控投资组合的风险<br />及时调整投资策略，降低潜在损失
            </p>
          </div>
          <div class="trait3">
            <img src="../assets/Help/img/forecast.png" class="pic" />
            <h1 class="h1">预测能力</h1>
            <p class="p1">
              AI系统可以通过对历史数据的分析，<br />发现潜在的规律和趋势，从而预测未来的<br />市场走势
            </p>
          </div>
          <div class="trait4">
            <img src="../assets/Help/img/object.png" class="pic" />
            <h1 class="h1">客观性</h1>
            <p class="p1">
              AI系统基于数据和算法进行分析，<br />实时更新市场信息，不受个人情绪和主管判断的影响，有助于提高投资者决策的客观性
            </p>
          </div>
        </div>
        <!-- 常见问题 -->
        <div class="problem">
          <div class="headline">
            <h1 class="tit">常见问题</h1>
            <p class="vid">FREQUENTLY <br />ASKED QUEDTION</p>
          </div>
          <div class="problem-list">
            <button class="list-btn">
              <el-icon color="rgba(0,0,0,0.4)"><CirclePlusFilled /></el-icon>
              忘记密码怎么办?
            </button>
            <button class="list-btn">
              <el-icon color="rgba(0,0,0,0.4)"><CirclePlusFilled /></el-icon>
              如何邀请好友加入？
            </button>
            <button class="list-btn">
              <el-icon color="rgba(0,0,0,0.4)"><CirclePlusFilled /></el-icon>
              我们需要收取服务费吗？
            </button>
            <button class="list-btn">
              <el-icon color="rgba(0,0,0,0.4)"><CirclePlusFilled /></el-icon>
              我们系统安全可靠吗？
            </button>
            <button class="list-btn" style="border-bottom: 2px solid #294a6a">
              <el-icon color="rgba(0,0,0,0.4)"><CirclePlusFilled /></el-icon>
              AI预测精准吗？
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="back2"></div>
  <div class="back3">
    <div class="btngroup">
      <button class="group1" @click="showAI">AI对话</button>
      <button class="group1">财经快讯</button>
      <button class="group1">热榜</button>
      <button class="group1">投顾</button>
    </div>
    <div class="aibody">
      <div class="aileft"></div>
      <div class="airight"></div>
    </div>
  </div>
  <div class="back4">
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
</template>
  <script>
import axios from "axios";
import { CirclePlusFilled } from "@element-plus/icons";
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
      AI: true,
    };
  },
  methods: {
    index() {
      this.$router.push("/index");
    },
    aistocks() {
      this.$router.push("/aistocks");
    },
    investclass() {
      this.$router.push("./investclass");
    },
    community() {
      this.$router.push("./community");
    },
    news() {
      this.$router.push("/news");
    },
    helps() {
      this.$router.push("/help");
    },
    hidedra() {
      this.$router.push("/hidedra");
    },
    person() {
      this.$router.push("/person");
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
    new() {
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
  },
  components: {
    CirclePlusFilled
  },
};
</script>

<style>
@import url("../assets/Help/css/help.css");
</style> 