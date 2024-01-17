
<template>
  <div class="communitymain">
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
        <img src="../assets/Aistocks/img/title1.png" class="title1" />
        <button class="btn1">绑定账户 ></button>
        <div class="bbodyright">
          <div class="table">
            <div class="btngroup">
              <button class="tbtn">
                <p>01</p>
                热门个股
                <img src="../assets/index/img/x2.png" />
                <div class="line1">
                  <div class="dot1"></div>
                  <div class="dot1"></div>
                </div>
              </button>
              <button class="tbtn">
                <p>02</p>
                热门主题
                <img src="../assets/index/img/x2.png" />
                <div class="line2">
                  <div class="dot2"></div>
                  <div class="dot2"></div>
                </div>
              </button>
              <button class="tbtn">
                <p>03</p>
                热门概念
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
      <!-- 社区热榜 -->
      <div class="hotlist">
        <div class="hottitle">
          <h1>社区热榜</h1>
          <div class="line"></div>
        </div>
        <div class="list">
          <div class="listitem" v-for="item in hotlists" v-bind:key="item">
            <el-avatar
              class="avatar"
              src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            />
            <el-button class="attentionbtn">关注</el-button>
            <div class="item">
              <h2>{{ item.name }}</h2>
              <h4>{{ item.excerpts }}</h4>
              <text>讨论数：{{ item.diccuss }}</text>
              <text>浏览量：{{ item.view }}</text>
            </div>
          </div>
        </div>
      </div>
      <div class="hotstock">
        <div class="group">
          <button class="hbtn">
            热门个股<el-icon><CaretBottom /></el-icon>
          </button>
          <button class="hbtn">
            热门主题<el-icon><CaretBottom /></el-icon>
          </button>
          <button class="hbtn">
            热门概念<el-icon><CaretBottom /></el-icon>
          </button>
          <button class="hbtn">
            我的关注<el-icon><CaretBottom /></el-icon>
          </button>
          <button class="hmore">
            更多<el-icon><DArrowRight /></el-icon>
          </button>
        </div>
        <div class="stocklist">
          <table>
            <tbody>
              <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
                <td
                  v-for="(cell, cellIndex) in row"
                  :key="cellIndex"
                  :style="{
                    backgroundColor: getBackgroundColor(rowIndex, cellIndex),
                    color: 'white',
                  }"
                >
                  {{ cell }}
                </td>
              </tr>
            </tbody>
          </table>
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
    <Bottom></Bottom>
  </div>
</template>

<script>
import axios from "axios";
import { animation } from "@/util/util";
import { getChatMsg, chatgpt, chatgpt_1 } from "@/api/getData";
import HeadPortrait from "@/components/HeadPortrait.vue";
import FileCard from "@/components/FileCard.vue";
import { CaretBottom, DArrowRight, Refresh } from "@element-plus/icons";
import ChatWindowSimple from "./chatwindowSimple.vue";
import Bottom from "./Bottom.vue";
export default {
  name: "community",
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
      //存储社区热榜
      hotlists: [
        {
          name: "布衣书先生走天下",
          title: "市场会涨多久",
          excerpts: "创业板指",
          diccuss: "16.62w",
          view: "972W",
        },
        {
          name: "布衣书先生走天下",
          title: "市场会涨多久",
          excerpts: "创业板指",
          diccuss: "16.62w",
          view: "972W",
        },
        {
          name: "布衣书先生走天下",
          title: "市场会涨多久",
          excerpts: "创业板指",
          diccuss: "16.62w",
          view: "972W",
        },
        {
          name: "布衣书先生走天下",
          title: "市场会涨多久",
          excerpts: "创业板指",
          diccuss: "16.62w",
          view: "972W",
        },
      ],
      // 热门个股
      rows: [
        [
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
        ],
        [
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
        ],
        [
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
        ],
        [
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
        ],
        [
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
        ],
        [
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
        ],
        [
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
        ],
        [
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
          "圣龙股份",
          "23.38%",
        ],
      ],
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
      chatList: [],
      inputMsg: "",
      showEmoji: false,
      frinedInfo: {},
      srcImgList: [],
      isSend: false,
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
    getBackgroundColor(rowIndex) {
      // 根据行索引和列索引判断背景颜色
      if (rowIndex % 2 === 0) {
        return "transparent"; // 偶数行背景颜色
      } else {
        return "rgba(19, 111, 160, 1.00)"; // 奇数行背景颜色
      }
    },
    showAI() {
      this.Aidialog = true;
      this.newsList = false;
    },
    shownews() {
      this.newsList = true;
      this.Aidialog = false;
    },
    showflashnew() {
      this.newsflash = true;
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
    //获取聊天记录
    getFriendChatMsg() {
      let params = {
        frinedId: this.frinedInfo.id,
      };
      getChatMsg(params).then((res) => {
        this.chatList = res;
        this.chatList.forEach((item) => {
          if (item.chatType == 2 && item.extend.imgType == 2) {
            this.srcImgList.push(item.msg);
          }
        });
        this.scrollBottom();
      });
    },
    //发送信息
    sendMsg(msgList) {
      this.chatList.push(msgList);
      this.scrollBottom();
    },
    //获取窗口高度并滚动至最底层
    scrollBottom() {
      this.$nextTick(() => {
        const scrollDom = this.$refs.chatContent;
        animation(scrollDom, scrollDom.scrollHeight - scrollDom.offsetHeight);
      });
    },
    //发送文字信息
    sendText() {
      if (this.inputMsg) {
        let chatMsg = {
          headImg: require("@/assets/img/head_portrait.jpg"),
          name: "username",
          time: new Date().toLocaleTimeString(),
          msg: this.inputMsg,
          chatType: 0, //信息类型，0文字，1图片
          uid: "1001", //uid
        };
        this.sendMsg(chatMsg); //显示发出的信息
        this.$emit("personCardSort", this.frinedInfo.id);
        this.inputMsg = ""; //清空聊天输入框的内容
        let data = {
          prompt: chatMsg.msg,
          temperature: 1,
          top_p: 1,
          model: "text-davinci-003",
          max_tokens: 2048,
          frequency_penalty: 0,
          presence_penalty: 0,
          stop: ["Human:", "AI:"],
        };
        this.loading = true;
        this.isSend = true;
        let chatGPT = {
          headImg: require("@/assets/img/ai1.png"),
          name: "ai投资顾问",
          time: new Date().toLocaleTimeString(),
          msg: "",
          chatType: 0, //信息类型，0文字，1图片
          uid: "1002", //uid
        };
        this.sendMsg(chatGPT); //显示机器人条目
        chatgpt_1(data).then((res) => {
          //console.log(res)
          this.isSend = false;
          this.chatList[this.chatList.length - 1].msg = res.Result;
        });
      } else {
        this.$message({
          message: "消息不能为空哦~",
          type: "warning",
        });
      }
    },
    selectItem(item) {
      this.inputMsg = item;
    },
  },
  mounted() {
    // this.getFriendChatMsg();
  },
  components: {
    Bottom,
    HeadPortrait,
    FileCard,
    CaretBottom,
    DArrowRight,
    Refresh,
    ChatWindowSimple,
  },
  props: {
    frinedInfo: Object,
    default() {
      return {};
    },
  },
  watch: {
    frinedInfo() {
      this.getFriendMsg();
    },
  },
};
</script>

<style>
@import url("../assets/Community/css/community.css");
</style>
