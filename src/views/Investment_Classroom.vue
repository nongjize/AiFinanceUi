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
        style="border: 0; font-weight: bolder;outline: none;"
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
      <!-- 视频播放 和基础知识-->
      <div class="video-and-knowledge">
        <!-- 视频播放器 -->
        <div class="video">
          <div class="headline">
            <h1 class="tit">视频播放</h1>
            <p class="vid">VIDEO <br />PLAYER</p>
          </div>
          <div class="player">
            <img
              src="../assets/Investment_Classroom/img/video_left.png"
              style="float: left; z-index: 2001; margin-top: 150px"
            />
            <img
              src="../assets/Investment_Classroom/img/video_right.png"
              style="float: right; z-index: 2001; margin-top: 150px"
            />
            <video-player
              style="
                width: auto;
                height: 410px;
                margin-top: 10px;
                z-index: 1001;
                margin-left: 14px;
                margin-right: 14px;
                border: 3px solid #25bbbf;
                position: relative;
              "
              class="video-player vjs-custom-skin"
              ref="videoPlayer"
              :playsinline="true"
              :options="playerOptions"
            ></video-player>
          </div>
          <!-- 基础知识 -->
          <div class="knowledge">
            <div class="title">
              <img
                src="../assets/Investment_Classroom/img/Click_to _nter.png"
              />
              <p class="tit">基础知识</p>
            </div>
            <div class="list">
              <ul>
                <li v-for="o in 3" :key="o">{{ +o }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- 热门视频 -->
      <div class="popular-video">
        <div class="headline">
          <h1 class="tit">热门视频</h1>
          <p class="vid">POPULAR <br />VIDEOS</p>
        </div>
        <div class="video-list">
          <ul>
            <li v-for="(news,index) in newstable" :key="news.id">
              <p class="p1">{{ index+1>9?index+1:"0"+(index+1) }}+{{ +o }}</p>
              <p class="p2">人观看</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import { Search } from "@element-plus/icons-vue";
export default {
  name: "investclass",
  data() {
    return {
      input: "",
      newstable:[],
      playerOptions: {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "video/mp4",
            src: "", //url地址
          },
        ],
        poster: "", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
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
  },
  components: {
    Search,
  },
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/Investment_Classroom/css/Investment_Classroom.css");
</style> 