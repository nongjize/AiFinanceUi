<template>
  <div class="bg">
    <!-- 导航栏 -->
    <div class="header">
      <el-menu
        :default-active="$route.path"
        :router="true"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="transparent"
        text-color="#ffffff"
        active-text-color="#23a2b9"
        style="border: 0; font-weight: bolder; outline: none"
      >
        <div class="personbtn">
          <img src="../assets/index/img/person.png" />
          <a :href="'/person'">个人中心</a>
        </div>
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/aistocks">Ai股票</el-menu-item>
        <el-menu-item index="/investclass">AI投资课堂</el-menu-item>
        <el-menu-item index="/community">AI股民社区</el-menu-item>
        <el-menu-item index="/news">新闻资讯</el-menu-item>
        <el-menu-item index="/help">帮助中心</el-menu-item>
        <el-menu-item index="/hidedra">卧虎藏龙</el-menu-item>
        <div class="demo-input-suffix search">
          <el-input
            placeholder="Search"
            v-model="input"
            style="border-radius: 50px"
          >
            <template #suffix>
              <el-icon style="color: #a0928d">
                <Search />
              </el-icon>
            </template>
          </el-input>
        </div>
      </el-menu>
    </div>
    <!--main-->
    <div class="main">
      <div class="investor-team">
        <div class="headline">
          <img
            src="../assets/Hidden_Dragon/img/Investor-team.png"
            class="pic"
          />
          <h1 class="h1">投资者团队</h1>
        </div>
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
          <div class="team1" style="margin-bottom: 80px;">
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
          <!-- 6 -->
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