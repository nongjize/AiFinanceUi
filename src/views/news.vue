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
      <div class="bbodyleft"></div>
      <div class="bbodyright">
        <img src="../assets/News/img/title1.png" class="title1" />
        <button class="btn1">绑定账户 ></button>
      </div>
    </div>
  </div>
  <div class="back2">
   
  </div>
  <div class="back3">
    <div class="btngroup">
      <button class="group1" @click="showAI">AI对话</button>
      <button class="group1">财经快讯</button>
      <button class="group1">热榜</button>
      <button class="group1">投顾</button>
    </div>
    <div class="gbody"></div>
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
      AI: true,
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
  components: {},
};
</script>

<style>
@import url("../assets/News/css/news.css");
</style>
<!-- <template>
  <div class="bg">
    
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
        style="border: none; font-weight: bolder; outline: none"
      >
        <div class="personbtn">
          <img src="../assets/index/img/person.png"/>
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
   
    <div class="newsmain">
      <div class="newsleft">
     
        <div class="market-focus">
          <div class="markethed">
            <h1 class="h1">股市焦点</h1>
            <p class="p1">FOCUS OF<br />THE STOCK MARKET</p>
            <el-button class="btn1"
              >更多<el-icon><DArrowRight /></el-icon
            ></el-button>
          </div>
          <div class="marketlist">
            <div class="listleft">
              <el-tag class="tag1">大盘</el-tag>
              <ul>
                <li v-for="cap in caps" :key="cap.content">
                  {{ cap.content }}
                </li>
              </ul>
            </div>
            <div class="listright">
              <el-tag class="tag2">个股</el-tag>
              <ul>
                <li v-for="cap in caps" :key="cap.content">
                  {{ cap.content }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="lpo-focus">
          <div class="markethed" style="border-bottom: 3px solid white">
            <h1 class="h1">新股聚焦</h1>
            <p class="p1">NEW<br />STOCK FOCUS</p>
            <el-button class="btn1" style="margin-left: 243px"
              >更多<el-icon><DArrowRight /></el-icon
            ></el-button>
            <div class="underline"></div>
          </div>
          <div class="lpolists">
            <div
              v-for="(item, index) in lposListsData"
              :key="index"
              class="focuslist"
            >
              <el-image
                :src="item.image"
                alt="新闻图片"
                class="lpoimg"
              ></el-image>
              <h4 class="h4">{{ item.title }}</h4>
              <p class="p2">{{ item.summary }}</p>
            </div>
          </div>
          <el-button-group style="margin-top: 10px;">
            
            <el-button class="lpobtn1" @click="prevPage">上一页</el-button>
            <el-button class="lpobtn2" @click="nextPage">下一页</el-button>
          </el-button-group>
        </div>
      </div>
     
      <div class="hot-headlines">
        <div class="head">
          <img src="../assets/News/img/Click-to-enter.png" style="width: 340px; margin-top: 20px;">
          <h1 class="hottitle">热刊头条</h1>
        </div>
        <div class="hotlists">
          <ul>
            <li v-for="hot in hotsData" :key="hot">
              <p class="p3">{{ hot.title }}</p>
              <p class="p4">{{ hot.sumarry }}</p>            
            </li>
          </ul>
        </div>
        <el-button-group style="margin-top: 10px;">
            
            <el-button class="lpobtn1" @click="prevPage">上一页</el-button>
            <el-button class="lpobtn2" @click="nextPage">下一页</el-button>
          </el-button-group>
      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import {
  Search,
  DArrowRight,
  ArrowLeft,
  ArrowRight,
} from "@element-plus/icons-vue";
export default {
  name: "news",
  data() {
    return {
      input: "",
      //存储后端传来的股市交点数据
      caps: [
        {
          content: "外伤独资公募三季度买了啥？贝莱德、雷达、路博迈最新持仓曝光",
        },
      ],
      //存储后端传来的新股聚焦数据
      lposListsData: [],
      lpocurrentPage: 1,
      lpoitemsPerPage: 3, // 每页显示的数据条数
      //存储后端传来的热刊头条数据
      hotsData:[
        {
          title:'Nan',
          sumarry:'nan'
        },
        
        
      ],
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
    // async fetchData() {
    //   // 获取后端数据的逻辑，这里假设已经获取到了数据
    //   const response = await fetch("https://example.com/api/data");
    //   this.data = await response.json();
    //   this.totalPages = Math.ceil(this.data.length / this.lpoitemsPerPage);
    //   this.lposListsData();
    // },
    // lposListsData() {
    //   const start = (this.lpocurrentPage - 1) * this.lpoitemsPerPage;
    //   const end = start + this.lpoitemsPerPage;
    //   this.paginatedData = this.data.slice(start, end);
    // },
    // prevPage() {
    //   if (this.lpocurrentPage > 1) {
    //     this.lpocurrentPage--;
    //     this.lposListsData();
    //   }
    // },
    // nextPage() {
    //   if (this.lpocurrentPage < this.lpototalPages) {
    //     this.lpocurrentPage++;
    //     this.lposListsData();
    //   }
    // },
  },
  components: {
    Search,
    DArrowRight,
    ArrowLeft,
    ArrowRight,
  },
  mounted() {
    // this.fetchData();
  },
};
</script>
  
  <style lang="scss" scoped>
@import url("../assets/News/css/news.css");
</style> -->