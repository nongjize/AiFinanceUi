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
        background-color="#010c1a"
        text-color="#ffffff"
        active-text-color="#23a2b9"
        style="border: 0; font-weight: bolder"
      >
       
        <div class="personbtn">
          <img src="../assets/index/img/person.png" />
          <p>个人中心</p>
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
    <!-- main -->
    <el-container class="contain">
      <el-aside width="550px">
        <div class="Systitle">
          <text style="color: #24adbc">一步</text>
          <text>了解</text><br />
          <text>最新股票资讯</text><br />
          <text>AI股市</text>
          <p>One step understanding Latest stock information</p>
          <p>AI stock market</p>
        </div>
        <el-button type="primary" class="set-other-btn"
          >CLICK TO ENTER</el-button
        >
      </el-aside>
      <el-main class="elmain"></el-main>
    </el-container>
    <!-- 行情指数 -->
    <el-container class="markindex">
      <div class="market">
        <span class="global">行情指数</span>
        <span class="index">Market index</span>
      </div>
      <div class="globalindex">
        <table>
          <tr>
            <th>
              <h3>上证指数</h3>
              <text class="value1">3017.78</text><br />
              <text class="value2">29.18</text>&nbsp;&nbsp;
              <text class="value2">0.99%</text>
            </th>
            <th>
              <h3></h3>
              <text class="value1"></text><br />
              <text class="value2"></text>&nbsp;&nbsp;
              <text class="value2"></text>
            </th>
            <th>
              <h3></h3>
              <text class="value1"></text><br />
              <text class="value2"></text>&nbsp;&nbsp;
              <text class="value2"></text>
            </th>
            <th>
              <h3></h3>
              <text class="value1"></text><br />
              <text class="value2"></text>&nbsp;&nbsp;
              <text class="value2"></text>
            </th>
          </tr>
        </table>
      </div>
      <el-icon class="edleft"><ArrowLeft /></el-icon>
      <el-icon class="edright"><ArrowRight /></el-icon>
    </el-container>
    <!-- 智能推荐和智能组合 -->
    <div class="Testcombin">
      <!-- 智能推荐 -->
      <div class="recommend">
        <!-- 标题 -->
        <div class="rectitle">
          <img src="../assets/index/img/Click_to _nter.png" />
          <h3>智能推荐</h3>
        </div>
        <div class="testimonial_form">
          <table class="tab">
            <!-- 表头 -->
            <thead>
              <tr>
              <th>组合名称</th>
              <th>日收益</th>
              <th>5日收益</th>
              <th>20日收益</th>
              <th>总收益</th>
            </tr>
            </thead>
           
            <!-- 数据列表 -->
            <tbody>
              <tr class="tab_body1">
              <td>688210</td>
              <td>名称</td>
              <td style="color: #ff0000">18.74%</td>
              <td style="color: #ff0000">28.96</td>
              <td>
                <el-button type="primary" class="optional"
                  >自选<el-icon><Plus /></el-icon
                ></el-button>
              </td>
            </tr>
            <tr class="tab_body2">
              <td>688210</td>
              <td>名称</td>
              <td style="color: #ff0000">18.74%</td>
              <td style="color: #ff0000">28.96</td>
              <td>
                <el-button type="primary" class="optional"
                  >自选<el-icon><Plus /></el-icon
                ></el-button>
              </td>
            </tr>

            </tbody>
           
          </table>
        </div>
      </div>
      <!-- 投资组合 -->
      <div class="combination">
        <div class="comhead">
          <div class="comtitle">智能组合</div>
          <div class="combtn">
            <button>CLICK TO ENTER</button>
          </div>
        </div>
        <div class="combody">
          <div>
            <button class="com_btn">
              日排行<el-icon><CaretBottom /></el-icon>
            </button>
            <button class="com_btn">
              5日排行<el-icon><CaretBottom /></el-icon>
            </button>
            <button class="com_btn">
              20日排行<el-icon><CaretBottom /></el-icon>
            </button>
            <button class="com_btn">
              总排行<el-icon><CaretBottom /></el-icon>
            </button>
          </div>
          <!-- 数据列表 -->
          <div class="tab">
            <table>
              <!-- 表头 -->
              <thead>
                <tr class="tab_hed">
                  <th>组合名称</th>
                  <th>日收益</th>
                  <th>5日收益</th>
                  <th>20日收益</th>
                  <th>总收益</th>
                </tr>
              </thead>
              <!-- 数据列表 -->
              <tbody>
                <tr class="tab_body1">
                  <td style="color: white">名称</td>
                  <td>23.38%</td>
                  <td>23.38%</td>
                  <td>23.38%</td>
                  <td>23.38%</td>
                </tr>
                <tr class="tab_body2">
                  <td style="color: white">名称</td>
                  <td>23.38%</td>
                  <td>23.38%</td>
                  <td>23.38%</td>
                  <td>23.38%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <!-- Ai对话 财经快讯 -->
    <div class="dialogue">
      <!-- AI对话 -->
      <div class="chat-content">
        <div class="chat_header">
          <text style="font-size: 40px">AI对话</text>
          <text style="font-size: 25px; margin-top: 40px; margin-left: 10px"
            >打造全方位投顾体验!</text
          >
        </div>
        <div class="chat_body">
          <!-- 聊天记录数组 -->
          <el-container class="chatcontent">
            <!-- Ai  -->
            <div class="word">
              <el-icon><Avatar /></el-icon>
              <div class="info">
                <p class="time">10:18</p>
                <div class="info-content">
                  Hi!我是你的AI智能顾问，很高兴为您服务！快来想我提问吧！
                </div>
              </div>
            </div>
            <!-- 用户 -->
            <div class="word-my">
              <div class="info">
                <p class="time">14:28</p>
                <div class="info-content">每年几月是最佳的融资窗口？</div>
              </div>
              <el-icon><Avatar /></el-icon>
            </div>
          </el-container>
          <div class="chat_bottom">
            <input
              class="chat_input"
              placeholder="请输入"
              v-model="input"
              type="input"
            />
            <el-button class="send_btn">发送</el-button>
          </div>
        </div>
        <div class="chat_right">
          <p class="title">大家都在问我：</p>
          <!-- 最近一周提问最多的10个问题 -->
          <p class="list">每年几月是最佳的融资窗口呢？</p>
        </div>
      </div>
      <!-- 财经快讯 -->
      <div class="news_content">
        <div class="news_header">
          <p class="title">财经快讯</p>
          <el-button class="news_btn" index="/news"
            >更多<el-icon color="white"><DArrowRight /></el-icon
          ></el-button>
        </div>
        <div class="news_list">
          <ul class="list">
            <li>
              <p class="title">
                当日国内四大证券保值、重要财经媒体头版头条内容精华摘要
              </p>
              <p class="absrtact">【四大证券保值、重要财经媒体头版头条摘要】</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  Search,
  House,
  ArrowLeft,
  ArrowRight,
  Plus,
  CaretBottom,
  Avatar,
  DArrowRight,
} from "@element-plus/icons-vue";
export default {
  name: "index",
  data() {
    return {
      input: "",
      
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
    House,
    ArrowLeft,
    ArrowRight,
    Plus,
    CaretBottom,
    Avatar,
    DArrowRight,
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
    getData(code) {
      var that = this;
      axios({
        method: "get",
        url: that.url + code,
        //url: that.requerturl,
      })
        .then(function (resp) {
          if (resp.status == 200) {
            let res = resp.data.result;
            that.params = res;
            that.$store.state.fertilize = res.fertilize;
            that.$store.state.harvest = res.harvest;
            that.$store.state.pesticide = res.pesticide;
            that.$store.state.pruning = res.pruning;
            that.$store.state.weed = res.weed;
            that.$store.state.farm = res.farm;
          } else {
            return;
          }
        })
        .catch((err) => {
          console.log("请求失败：", err);
        });
    },
  },
};
</script>

<style>
@import url("../assets/index/css/index.css");
@import "bootstrap/dist/css/bootstrap.min.css";
</style>