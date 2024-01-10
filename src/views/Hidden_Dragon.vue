<template>
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
          <div class="team1" style="left: 30px">
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
          <div class="team1" style="left: 30px">
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
          <div class="team1" style="left: 30px">
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
      <button class="group1" @click="shownews">财经快讯</button>
      <button class="group1">热榜</button>
      <button class="group1">投顾</button>
    </div>
    <div class="body4">
      <div class="aibody" v-show="Aidialog">
        <div class="aileft">
          <div class="botoom">
            <div class="chat-content" ref="chatContent">
              <div
                class="chat-wrapper"
                v-for="(item, index) in chatList"
                :key="item.id"
              >
                <div class="chat-friend" v-if="item.uid !== '1001'">
                  <div class="info-time">
                    <img :src="item.headImg" alt="" />
                    <span>{{ item.name }}</span>
                    <span>{{ item.time }}</span>
                  </div>
                  <div class="chat-text" v-if="item.chatType == 0">
                    <template v-if="isSend && index == chatList.length - 1">
                      <span class="flash_cursor"></span>
                    </template>
                    <template v-else>
                      <pre>{{ item.msg }}</pre>
                    </template>
                  </div>
                  <div class="chat-img" v-if="item.chatType == 1">
                    <img
                      :src="item.msg"
                      alt="表情"
                      v-if="item.extend.imgType == 1"
                      style="width: 100px; height: 100px"
                    />
                    <el-image
                      :src="item.msg"
                      :preview-src-list="srcImgList"
                      v-else
                    >
                    </el-image>
                  </div>
                  <div class="chat-img" v-if="item.chatType == 2">
                    <div class="word-file">
                      <FileCard
                        :fileType="item.extend.fileType"
                        :file="item.msg"
                      ></FileCard>
                    </div>
                  </div>
                </div>
                <div class="chat-me" v-else>
                  <div class="info-time">
                    <span>{{ item.name }}</span>
                    <span>{{ item.time }}</span>
                    <img :src="item.headImg" alt="" />
                  </div>
                  <div class="chat-text" v-if="item.chatType == 0">
                    {{ item.msg }}
                  </div>
                  <div class="chat-img" v-if="item.chatType == 1">
                    <img
                      :src="item.msg"
                      alt="表情"
                      v-if="item.extend.imgType == 1"
                      style="width: 100px; height: 100px"
                    />
                    <el-image
                      style="max-width: 300px; border-radius: 10px"
                      :src="item.msg"
                      :preview-src-list="srcImgList"
                      v-else
                    >
                    </el-image>
                  </div>
                  <div class="chat-img" v-if="item.chatType == 2">
                    <div class="word-file">
                      <FileCard
                        :fileType="item.extend.fileType"
                        :file="item.msg"
                      ></FileCard>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="chatInputs">
              <input
                class="inputs"
                v-model="inputMsg"
                @keyup.enter="sendText"
              />
              <el-button
                class="send boxinput"
                :disabled="isSend"
                @click="sendText"
              >
                发送
              </el-button>
            </div>
          </div>
        </div>
        <div class="airight">
          <h1>大家都在问我</h1>
          <ul>
            <li v-for="item in questions" v-bind:key="item" @click="selectItem(item)">
              {{ item }}
            </li>
          </ul>          
        </div>
      </div>
      <!-- 财经快讯 -->
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
  CaretBottom,
} from "@element-plus/icons-vue";
import { getFriend } from "@/api/getData";
import PersonCard from "@/components/PersonCard.vue";
import { animation } from "@/util/util";
import { chatgpt, chatgpt_1 } from "@/api/getData";
import HeadPortrait from "@/components/HeadPortrait.vue";
import FileCard from "@/components/FileCard.vue";
export default {
  name: "hidedra",
  data() {
    return {
      input: "",
      detailsshow: false, //默认不显示
      Aidialog: true,
      newsList: false,
      newsflash: true,
      questions: ["每年几月份是最佳的融资窗口?"],
      chatList: [],
      inputMsg: "",
      showEmoji: false,
      frinedInfo: {},
      srcImgList: [],
      isSend: false,
      pcCurrent: "",
      personList: [],
      showChatWindow: false,
      chatWindowInfo: {},
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
      // url:'/assets/Hidden_Dragon/img/people.png',
    };
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
  computed: {},
  methods: {
    GetRouterInfo(url) {
      var that = this;
      that.$router.push({ path: "/" + url + "" });
      this.className = "lun-img-two";
      setTimeout(() => {
        this.className = "lun-img";
      }, 300);
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
      // getChatMsg(params).then((res) => {
      //   this.chatList = res;
      //   this.chatList.forEach((item) => {
      //     if (item.chatType == 2 && item.extend.imgType == 2) {
      //       this.srcImgList.push(item.msg);
      //     }
      //   });
      //   this.scrollBottom();
      // });
    },
    clickPerson(info) {
      this.showChatWindow = true;
      this.chatWindowInfo = info;
      this.personInfo = info;
      this.pcCurrent = info.id;
    },
    personCardSort(id) {
      if (id !== this.personList[0].id) {
        console.log(id);
        let nowPersonInfo;
        for (let i = 0; i < this.personList.length; i++) {
          if (this.personList[i].id == id) {
            nowPersonInfo = this.personList[i];
            this.personList.splice(i, 1);
            break;
          }
        }
        this.personList.unshift(nowPersonInfo);
      }
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
    getFriend().then((res) => {
      //console.log("哈哈哈哈");
      //console.log(res);
      this.personList = res;
    });
  },
  components: {
    Search,
    CircleClose,
    ArrowLeftBold,
    ArrowRightBold,
    CaretBottom,
    PersonCard,
    HeadPortrait,
    FileCard
  },
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/Hidden_Dragon/css/hidden_dragon.css");
</style>