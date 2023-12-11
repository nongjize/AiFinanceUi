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
    <!--main-->
    <div class="newsmain">
      <div class="newsleft">
        <!-- stock market focus -->
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
              <el-tag class="tag">大盘</el-tag>
              <ul>
                <li v-for="cap in caps" :key="cap.content">
                  {{ cap.content }}
                </li>
              </ul>
            </div>
            <div class="listright">
              <el-tag class="tag">个股</el-tag>
              <ul>
                <li v-for="cap in caps" :key="cap.content">
                  {{ cap.content }}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- lpo focus -->
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
            <!-- :disabled="lpocurrentPage === 1" -->
            <el-button class="lpobtn1" @click="prevPage">上一页</el-button>
            <el-button class="lpobtn2" @click="nextPage">下一页</el-button>
          </el-button-group>
        </div>
      </div>
      <!-- Hot headlines -->
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
            <!-- :disabled="lpocurrentPage === 1" -->
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
</style>