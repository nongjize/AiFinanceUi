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
      <img src="../assets/Hidden_Dragon/img/Investor-team.png" class="pic" />
      <div class="investor-team">        
        <div class="team">
          <el-button class="btnleft">
            <el-icon><ArrowLeftBold /></el-icon
          ></el-button>
          <el-button class="btnright"
            ><el-icon><ArrowRightBold /></el-icon
          ></el-button>
          <el-card class="details" v-show="detailsshow">
            <div class="headline">
              <p class="p1">INVSTOR DETAILS</p>
              <p class="p2">投资者详情</p>
              <div class="side">
                <div class="inside"></div>
              </div>
              <el-button class="btn" @click="closedetails"
                ><el-icon :size="41" style="color: white"
                  ><CircleClose /></el-icon
              ></el-button>
            </div>
            <div class="profile-photo">
              <el-image
                style="
                  width: 100%;
                  height: 100%;
                  border-top-right-radius: 90px;
                  background-color: ##898e93;
                "
                :src="url"
              />
            </div>
            <div class="body">
              <div class="div1">{{ name }}</div>
              <div class="div1">{{ age }}</div>
              <div class="div1">{{ grade }}</div>
              <div class="div2">
                <text class="div3"> 个人简介： </text>
                <text class="div4">{{ info }}</text>
              </div>
              <div class="div2">
                <text class="div3"> 投资案例： </text>
                <text class="div4">{{ info }}</text>
              </div>
            </div>
          </el-card>
          <!-- first -->
          <div class="team1">
            <div class="circle">
              <el-avatar
                :size="150"
                src="https://empty"
                @error="errorHandler"
                style="margin-top: 10px; border: none"
              >
                <img src="../assets/Hidden_Dragon/img/people.png" />
              </el-avatar>
            </div>
            <p class="tit">投资者简介</p>
            <p class="intro">
              AI系统可以快速处理大量数据，实时更新市场信息，帮助投资者迅速做出决策。
            </p>
            <h1 class="name">王明</h1>
            <el-button class="btn" @click="showdetails"
              >详情<el-icon
                ><img
                  src="../assets/Hidden_Dragon/img/detail.png"
                  style="margin-left: 5px" /></el-icon
            ></el-button>
          </div>
          <!-- 2 -->
          <div class="team1">
            <div class="circle">
              <el-avatar
                :size="150"
                src="https://empty"
                @error="errorHandler"
                style="margin-top: 10px; border: none"
              >
                <img src="../assets/Hidden_Dragon/img/people.png" />
              </el-avatar>
            </div>
            <p class="tit">投资者简介</p>
            <p class="intro">
              AI系统可以快速处理大量数据，实时更新市场信息，帮助投资者迅速做出决策。
            </p>
            <h1 class="name">王明</h1>
            <el-button class="btn" @click="showdetails"
              >详情<el-icon
                ><img
                  src="../assets/Hidden_Dragon/img/detail.png"
                  style="margin-left: 5px" /></el-icon
            ></el-button>
          </div>
          <!-- 3 -->
          <div class="team1">
            <div class="circle">
              <el-avatar
                :size="150"
                src="https://empty"
                @error="errorHandler"
                style="margin-top: 10px; border: none"
              >
                <img src="../assets/Hidden_Dragon/img/people.png" />
              </el-avatar>
            </div>
            <p class="tit">投资者简介</p>
            <p class="intro">
              AI系统可以快速处理大量数据，实时更新市场信息，帮助投资者迅速做出决策。
            </p>
            <h1 class="name">王明</h1>
            <el-button class="btn" @click="showdetails"
              >详情<el-icon
                ><img
                  src="../assets/Hidden_Dragon/img/detail.png"
                  style="margin-left: 5px" /></el-icon
            ></el-button>
          </div>
          <!-- 4 -->
          <div class="team1" style="left: 30px;">
            <div class="circle">
              <el-avatar
                :size="150"
                src="https://empty"
                @error="errorHandler"
                style="margin-top: 10px; border: none"
              >
                <img src="../assets/Hidden_Dragon/img/people.png" />
              </el-avatar>
            </div>
            <p class="tit">投资者简介</p>
            <p class="intro">
              AI系统可以快速处理大量数据，实时更新市场信息，帮助投资者迅速做出决策。
            </p>
            <h1 class="name">王明</h1>
            <el-button class="btn" @click="showdetails"
              >详情<el-icon
                ><img
                  src="../assets/Hidden_Dragon/img/detail.png"
                  style="margin-left: 5px" /></el-icon
            ></el-button>
          </div>
          <!-- 5 -->
          <div class="team1" style="left: 30px;">
            <div class="circle">
              <el-avatar
                :size="150"
                src="https://empty"
                @error="errorHandler"
                style="margin-top: 10px; border: none"
              >
                <img src="../assets/Hidden_Dragon/img/people.png" />
              </el-avatar>
            </div>
            <p class="tit">投资者简介</p>
            <p class="intro">
              AI系统可以快速处理大量数据，实时更新市场信息，帮助投资者迅速做出决策。
            </p>
            <h1 class="name">王明</h1>
            <el-button class="btn" @click="showdetails"
              >详情<el-icon
                ><img
                  src="../assets/Hidden_Dragon/img/detail.png"
                  style="margin-left: 5px" /></el-icon
            ></el-button>
          </div>
          <!-- 6 -->
          <div class="team1" style="left: 30px;">
            <div class="circle">
              <el-avatar
                :size="150"
                src="https://empty"
                @error="errorHandler"
                style="margin-top: 10px; border: none"
              >
                <img src="../assets/Hidden_Dragon/img/people.png" />
              </el-avatar>
            </div>
            <p class="tit">投资者简介</p>
            <p class="intro">
              AI系统可以快速处理大量数据，实时更新市场信息，帮助投资者迅速做出决策。
            </p>
            <h1 class="name">王明</h1>
            <el-button class="btn" @click="showdetails"
              >详情<el-icon
                ><img
                  src="../assets/Hidden_Dragon/img/detail.png"
                  style="margin-left: 5px" /></el-icon
            ></el-button>
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
    <div class="aibody"></div>
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
import {
  Search,
  CircleClose,
  ArrowLeftBold,
  ArrowRightBold,
} from "@element-plus/icons-vue";
export default {
  name: "hidedra",
  data() {
    return {
      input: "",
      detailsshow: false, //默认不显示
      // url:'/assets/Hidden_Dragon/img/people.png',
    };
  },
  computed: {},
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    // 点击 el-menu 时可以跳转
    handleSelectMenu(path) {
      this.$router.push(path);
    },
    handleClick(row) {
      console.log(row);
    },
    showdetails() {
      this.detailsshow = true; //显示详情弹窗
    },
    closedetails() {
      this.detailsshow = false; //关闭弹窗
    },
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
    Search,
    CircleClose,
    ArrowLeftBold,
    ArrowRightBold,
  },
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/Hidden_Dragon/css/hidden_dragon.css");
</style>