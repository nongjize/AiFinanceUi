<template>
  <img src="../assets/index/img/0.png" style="position: relative" />
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
          <div class="wb">
            One step understanding Latest stock information AI stock market
          </div>
          <button class="gbbtn">了解更多&nbsp;&nbsp;></button>
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
          <el-table-column fixed prop="namecode" label="名称代码" width="120" />
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
      <button class="group1" @click="showAI">AI对话</button>
      <button class="group1" @click="shownews">财经快讯</button>
      <button class="group1">热磅</button>
      <button class="group1">投顾</button>
    </div>
    <!-- AI对话 -->
    <div class="body4">
      <div class="aibody" v-show="Aidialog">
        <div class="aileft">
          <ChatWindowSimple></ChatWindowSimple>
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
          <button class="nbtn" @click="showflashnew">动态<el-icon><CaretBottom /></el-icon></button>
          <button class="nbtn">关注<el-icon><CaretBottom /></el-icon></button>
          <button class="refesh">刷新<el-icon><Refresh /></el-icon></button>
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
import { animation } from "@/util/util";
import { getChatMsg, chatgpt, chatgpt_1 } from "@/api/getData";
//import HeadPortrait from "@/components/HeadPortrait.vue";
//import FileCard from "@/components/FileCard.vue";
import {CaretBottom} from "@element-plus/icons"
import ChatWindowSimple from "./chatwindowSimple.vue";

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
      Aidialog: true,
      newsList:false,
      newsflash:true,
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
      newsflashlists:[
        {headline:'中央金融工作会议：活跃资本市场',state:'焦点',source:'新华社',read:'408'},
        {headline:'中央金融工作会议：活跃资本市场',state:'焦点',source:'新华社',read:'408'},
        {headline:'中央金融工作会议：活跃资本市场',state:'焦点',source:'新华社',read:'408'},
        {headline:'中央金融工作会议：活跃资本市场',state:'新闻',source:'新华社',read:'408'},
        {headline:'中央金融工作会议：活跃资本市场',state:'焦点',source:'新华社',read:'408'},

      ]
      
    };
  },
  methods: {
    GetRouterInfo(url) {
      var that = this;
      that.$router.push({path: "/" + url + "",});
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
    showflashnew(){
      this.newsflash=true;
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
    ChatWindowSimple,
    CaretBottom
  },
  props: {
    frinedInfo: Object,
    default() {
      return {};
    },
  },
  watch: {
    frinedInfo() {
      // this.getFriendChatMsg();
    },
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
    sliderStyle() {
      return {
        position: "absolute",
        top: 0,
        left: this.sliderPosition + "px",
        width: "5px",
        height: "100%",
        backgroundColor: "white",
      };
    },
  },
};
</script>

<style>
@import url("../assets/index/css/index.css");
</style>