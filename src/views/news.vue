<template>
  <div class="newsmain">
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
            style="display: none"
            >AI投资课堂</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('community')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            style="display: none"
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
        <div class="bbodyleft">
          <div class="sbtngroup">
            <button class="tbtn">
              <p>01</p>
              股市焦点
              <img src="../assets/index/img/x2.png" />
              <div class="line1">
                <div class="dot1"></div>
                <div class="dot1"></div>
              </div>
            </button>
            <button class="tbtn" style="display: none;">
              <p>02</p>
              热刊头条
              <img src="../assets/index/img/x2.png" />
              <div class="line2">
                <div class="dot2"></div>
                <div class="dot2"></div>
              </div>
            </button>
            <!-- <button class="mbtn">更多></button> -->
          </div>
          <!-- 股市焦点 -->
          <div class="stockbody">
            <div class="stockleft">              
              <div class="excerpt" v-for="item in largecaps" v-bind:key="item.id">
                
                <p>{{ item[1] }}</p>
                <el-tag>{{ item[0] }}</el-tag>
              </div>
            </div>
            <!-- <div class="stockright">
              <el-tag>个股</el-tag>
              <div class="excerpt" v-for="item in ownstocks" v-bind:key="item">
                <p>{{ item.excerpt }}</p>
              </div>
            </div> -->
          </div>
        </div>
        <div class="bbodyright">
          <img src="../assets/News/img/title1.png" class="title1" />
          <button class="btn1" style="display: none">绑定账户 ></button>
        </div>
      </div>
    </div>
    <div class="back2">
      <!-- 新股聚焦 -->
      <div class="newmain">
        <div class="newbtn">
          <h1>
            新闻资讯
            <div class="line"></div>
          </h1>
          <h5>
            NEWS<br />
            FOCUS
          </h5>
          <!-- <el-button>更多>></el-button> -->
        </div>
        <div class="mainlist">
          <div class="new" v-for="item in paginatedData" :key="item.id">
            <div class="nlist">
              <h2 class="p3">{{ item[0] }}</h2>
              <p class="p4">{{ item[1] }}</p>
            </div>
            <div class="newline"></div>
          </div>
        </div>
        <!-- <div class="page">
          <el-pagination
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[3]"
            :page-size="pageSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          />
        </div> -->
      </div>
    </div>

    <div class="back4" style="display: none;">
        <div class="btngroup">
          <h1>财经快讯</h1>
        </div>
        <!-- 财经快讯 -->
        <div class="newbody">
          <div class="newbtngroup">
            <!-- <button class="nbtn" @click="showflashnew">
              动态<el-icon><CaretBottom /></el-icon>
            </button>
            <button class="nbtn">
              关注<el-icon><CaretBottom /></el-icon>
            </button> -->
            <button class="refesh" @click="GetNews">
              刷新<el-icon><Refresh /></el-icon>
            </button>
          </div>
          <div class="quicklist" v-show="newsflash">
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
    </div>

    <div class="back3" >
      <div class="btngroup">
        <!-- <button class="group1" @click="showAI">AI对话</button> -->
        <button class="group1" @click="shownews">财经快讯</button>
        <button class="group1" style="display: none">热榜</button>
        <button class="group1" style="display: none">投顾</button>
      </div>
      <div class="body4">
        <div class="aibody" v-show="Aidialog">
          <div class="aileft">
            <ChatWindowSimple></ChatWindowSimple>
          </div>
          <div class="airight" style="display: none;">
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
        <!-- 财经快讯 -->
        <div class="newbody" v-show="newsList">
          <div class="newbtngroup" style="display: none;">
            <button class="nbtn" @click="showflashnew">
              动态<el-icon><CaretBottom /></el-icon>
            </button>
            <button class="nbtn" style="display: none;">
              关注<el-icon><CaretBottom /></el-icon>
            </button>
            <button class="refesh" @click="getyechNews">
              刷新<el-icon><Refresh /></el-icon>
            </button>
          </div>
          <div class="quicklist" v-show="newsflash">
            <ul v-for="item in newsflashlists" v-bind:key="item">
              <li>{{ item[1] }}</li>
              <el-tag>{{ item[0] }}</el-tag>                            
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="back5">
        <img src="../assets/index/img/classtitle.png" class="img1" />
        <button class="bodybtn" onclick="window.open('https://work.weixin.qq.com/kfid/kfcfd990537d8749f8d?enc_scene=ENC5JURwTPhxtzAA8XmkFjRdYUiFsy3jVXB1xtzZyz59b2pthsCKzHa2GQSLGpqSwqHNz')">联系客服</button>
      </div>
    <Bottom></Bottom>
  </div>
</template>

<script>
import axios from "axios";
import { gethNews, gettNews, getyNews } from "@/api/getData";
import HeadPortrait from "@/components/HeadPortrait.vue";
import FileCard from "@/components/FileCard.vue";
import { CaretBottom, DArrowRight, Refresh } from "@element-plus/icons";
import ChatWindowSimple from "./chatwindowSimple.vue";
import Bottom from "./Bottom.vue";
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
      Aidialog: false,
      newsList: true,
      newsflash: true,
      //存储财经快讯动态
      newsflashlists: [        
      ],
      largecaps: [
        
      ],      
      newsData: [{},{}],
      currentPage: 1,
      pageSize: 3,
      total: 0,
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
    handleSizeChange(val) {
      this.pageSize = val;
      this.currentPage = 1;
    },
    handleCurrentChange(val) {
      this.currentPage = val;
    },
    async getfechNews(){
      gethNews().then((res)=>{
        this.newsData=res.data.items;
      })    
            
      this.total=this.newsData.length;
    },
    gettechNews(){
      gettNews().then((res)=>{
        this.largecaps=res.data.items
      })    
    },
    getyechNews(){
      getyNews().then((res)=>{
        this.newsflashlists=res.data.items
        })
    }
    
  },

  created() {
    this.getfechNews(); 
    this.gettechNews();
    this.getyechNews();
  },
  computed: {
    paginatedData() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      const result=Array.from(this.newsData)
      // console.log(result)
      return result.slice(start, end);      
    },
  },
  mounted() {
       
   
  },
  components: {
    HeadPortrait,
    FileCard,
    CaretBottom,
    DArrowRight,
    Refresh,
    ChatWindowSimple,
    Bottom,
  },
};
</script>

<style src="@/assets/News/css/news.css" scoped>
</style>
