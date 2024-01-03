<template>
  <img src="../assets/index/img/0.png" style="position: relative" />
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
      <img src="../assets/index/img/title1.png" class="title1" />
      <button class="btn1">绑定账户 ></button>
      <div class="bbodyright">
        <div class="rmenu">
          <ul>
            <img src="../assets/index/img/shine.png" v-show="shine1" />
            <li @click="course">AI投资课堂</li>
            <p>INFORMATION</p>
            <div class="underline" v-show="underline1"></div>
          </ul>
          <ul>
            <img src="../assets/index/img/shine.png" v-show="shine2" />
            <li @click="interflow">AI股民社区</li>
            <p>INFORMATION</p>
            <div class="underline" v-show="underline2"></div>
          </ul>
          <ul>
            <img src="../assets/index/img/shine.png" v-show="shine3" />
            <li @click="consult">新闻资讯</li>
            <p>INFORMATION</p>
            <div class="underline" v-show="underline3"></div>
          </ul>
          <ul>
            <img src="../assets/index/img/shine.png" v-show="shine4" />
            <li @click="help">帮助中心</li>
            <p>INFORMATION</p>
            <div class="underline" v-show="underline4"></div>
          </ul>
        </div>
        <el-carousel
          class="classimg"
          :interval="4000"
          height="100%"
          ref="carousel"
          @click.native="linkTo"
        >
          <el-carousel-item v-for="item in images" :key="item.url">
            <img :src="item.url" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
  </div>
  <div class="back2">
    <img src="../assets/index/img/11.png" class="quoimg" />
    <div class="quomain">
      <img src="../assets/index/img/left.png" class="left" />
      <div class="carousel">
        <div class="box">
          <div class="indexs">
            <p class="p1">上证指数</p>
            <p class="p2">3017.78</p>
            <text class="text1">29.18</text>
            <text class="text1">0.99%</text>
          </div>
          <div class="wb">
            One step understanding Latest stock information AI stock market
          </div>
          <button class="gbbtn">了解更多&nbsp;&nbsp;></button>
          <img src="../assets/index/img/head.png" />
        </div>
        <div class="box">
          <img src="../assets/index/img/book.png" />
        </div>
        <div class="box">
          <img src="../assets/index/img/book.png" />
        </div>
        <div class="box">
          <img src="../assets/index/img/head.png" />
        </div>
        <div class="box">
          <img src="../assets/index/img/book.png" />
        </div>
      </div>
      <img src="../assets/index/img/right.png" class="right" />
    </div>
  </div>
  <div class="back3"></div>
  <div class="back4">
    <div class="btngroup">
      <button class="group1" @click="showAI">AI对话</button>
      <button class="group1">财经快讯</button>
      <button class="group1">热磅</button>
      <button class="group1">投顾</button>
    </div>
    <!-- AI对话 -->
    <div class="body4" v-show="Aidialog">
      <div class="airight"></div>
      <div class="aileft"></div>
    </div>
    <!-- 财经快讯 -->

  </div>
  <div class="back5">
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
        <div class="courselist" style="margin-right: 0;">
          <p class="p1"></p>
          <p class="p2"></p>
          <p class="p3"></p></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name:"index",
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
      Aidialog: true,
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
   
  },
  components: {},
};
</script>

<style>
@import url("../assets/index/css/index.css");
</style>