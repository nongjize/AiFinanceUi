<template>
  <div class="dramain">
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
          style="display: none;"
          >AI投资课堂</el-button
        >
        <el-button
          class="btn"
          @click="GetRouterInfo('community')"
          onmouseout="this.style.color='white'"
          onmouseleave="this.style.color='black'"
          style="display: none;"
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
          <!-- <el-button class="btnleft">
            <el-icon><ArrowLeftBold /></el-icon
          ></el-button>
          <el-button class="btnright"
            ><el-icon><ArrowRightBold /></el-icon
          ></el-button> -->
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

          <div class="team1" v-for="item in personals" v-bind:key="item">
            <div class="circle">
              <el-avatar
                :size="150"
                :src="item.clink"
                @error="errorHandler"
                style="margin-top: 10px; border: none"
              >
                <img :src="item.image" />
              </el-avatar>
              <p class="tit">{{item.sub_title}}</p>
            </div>
            
            <div class="txtinfo">
              <p class="intro">
                {{item.remak}}
              </p>
              
            </div>
            <h1 class="name">{{item.name}}</h1>
              <el-button class="btn" @click="showdetails(item)"
                >咨询<el-icon
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
  <Bottom></Bottom>

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
import { getUlist } from "@/api/getData";
import PersonCard from "@/components/PersonCard.vue";
// import { animation } from "@/util/util";
// import { chatgpt, chatgpt_1 } from "@/api/getData";
import HeadPortrait from "@/components/HeadPortrait.vue";
import FileCard from "@/components/FileCard.vue";
import chatwindowSimple from "./chatwindowSimple.vue";
import Bottom from "./Bottom.vue";
export default {
  name: "hidedra",
  data() {
    return {
      personals: [],
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
  mounted() {
    this.getlist();
  },
  components: {
    Search,
    CircleClose,
    ArrowLeftBold,
    ArrowRightBold,
    CaretBottom,
    PersonCard,
    HeadPortrait,
    FileCard,
    chatwindowSimple,
    Bottom
  },
  computed: {},
  methods: {
    getlist() {
      // this.personals = [
      //   {
      //     name:'aaa',
      //     image: 'https://ai.ynpygl.cn/img/people.47619cca.png',
      //     title: 'abaca',
      //     remak: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
      //     clink: 'https://baidu.com'
      //   },
      //   {
      //     name:'aaa',
      //     image: 'https://ai.ynpygl.cn/img/people.47619cca.png',
      //     title: 'abaca',
      //     remak: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
      //     clink: 'https://baidu.com'
      //   },
      //   {
      //     name:'aaa',
      //     image: 'https://ai.ynpygl.cn/img/people.47619cca.png',
      //     title: 'abaca',
      //     remak: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
      //     clink: 'https://baidu.com'
      //   },
      //   {
      //     name:'aaa',
      //     image: 'https://ai.ynpygl.cn/img/people.47619cca.png',
      //     title: 'abaca',
      //     remak: 'qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq',
      //     clink: 'https://baidu.com'
      //   }
      // ]
      // getulist
      let parameter = {}
      getUlist(parameter).then((res) => {
        //console.log(res);
        if(res.code==0){
          console.log(res);
          this.personals = res.data;
          // this.$store.dispatch('setUserid', res.data.userInfo.nickname);
          //console.log(this.$store.state.userid);
          // this.$router.push({name:'index',params:{user:this.$store.state.userid}});
          // this.$message({ message: res.msg,type: "warning",});
        }else{
          this.$message({ message: res.msg,type: "warning",});
        }

        // else {
        // this.$message({
        //   message: "消息不能为空哦~",
        //   type: "warning",
        // });


        });
    },

    showdetails(item) {
      // console.log("-----lifam----");
      // console.log(item.clink);
      window.open(item.clink, '_blank');
    },
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
    
  },
  
};
</script>
  
<style src="@/assets/Hidden_Dragon/css/hidden_dragon.css" scoped>

</style>