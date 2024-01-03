
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
      <img src="../assets/Aistocks/img/title1.png" class="title1" />
      <button class="btn1">绑定账户 ></button>
      <div class="bbodyright"></div>
    </div>
  </div>
  <div class="back2">
    <!-- 行情指数 -->
    <img src="../assets/index/img/11.png" class="quoimg" />
  </div>
  <div class="back3">
    <div class="btngroup">
      <button class="group1" @click="showAI">AI对话</button>
      <button class="group1">财经快讯</button>
      <button class="group1">热榜</button>
      <button class="group1">投顾</button>
    </div>
    <div class="gbody">

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
        <div class="courselist" style="margin-right: 0;">
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
@import url("../assets/Community/css/community.css");
</style>
<!-- <template>
  <div class="bg">
    
    <el-header class="header">
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
    </el-header>
    
    <div class="investor-community">
      
      <div class="hot-stocks">
        <el-button-group class="hotbtngroup">
          <el-button class="ownbtn" @click="Ownbtnclick1"
            >热门个股<el-icon v-show="ownicon1"><CaretBottom /></el-icon
          ></el-button>
          <el-button class="ownbtn" @click="Ownbtnclick2"
            >热门主题<el-icon v-show="ownicon2"><CaretBottom /></el-icon
          ></el-button>
          <el-button class="ownbtn" @click="Ownbtnclick3"
            >热门概念<el-icon v-show="ownicon3"><CaretBottom /></el-icon
          ></el-button>
          <el-button class="ownbtn" @click="Ownbtnclick4"
            >我的关注<el-icon v-show="ownicon4"><CaretBottom /></el-icon
          ></el-button>
          <el-button class="morebtn"
            >更多<el-icon><DArrowRight /></el-icon
          ></el-button>
        </el-button-group>
       
        <div class="owntable">
          <table class="table table-bordered">
            <tbody>
              <tr
                v-for="(row, index) in rows"
                :key="index"
                :class="index % 2 === 0 ? 'even' : 'odd'"
              >
                <td v-for="(col, j) in cols" :key="j">
                  {{ data[index * cols + j] }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="hot-topic">
        <div class="topichead">
          <h1 class="title">热门话题</h1>
          <el-button class="topicbtn"
            >更多<el-icon><DArrowRight /></el-icon
          ></el-button>
         
          <div class="gradient-underline"></div>
        </div>
        
        <div class="topiclist">
          <ul>
            <li v-for="topic in topics" :key="topic.id">
              <p class="toptitle">
                {{ topic.id }}&nbsp;&nbsp;{{ topic.title }}
              </p>
              讨论数：<text class="num">{{ topic.discuss }}</text
              >&nbsp;&nbsp;&nbsp; 浏览量：<text class="num">{{
                topic.view
              }}</text>
              <el-button class="favoritebtn" @click="favoriteTopic(topic)"
                >收藏</el-button
              >
            </li>
          </ul>
        </div>
      </div>
      
      <div class="dynamic-state">
        <el-button-group class="stategroupbtn">
          <el-button class="statebtn" @click="stateChose"
            >动态<el-icon v-show="stateicon1" style="margin-left: 30px"
              ><CaretBottom /></el-icon
          ></el-button>
          <el-button class="attentionbtn" @click="attentionChose"
            >关注&nbsp;&nbsp;&nbsp;<el-icon
              v-show="stateicon2"
              style="margin-left: 30px"
              ><CaretBottom /></el-icon
          ></el-button>
          <el-button class="refreshbtn" @click="refreshChose"
            >刷新<el-icon style="margin-left: 10px"><Refresh /></el-icon
          ></el-button>
        </el-button-group>
        <div class="statelist">
          <ul>
            <li v-for="trend in trends" :key="trend.title">
              <h3 class="headline">{{ trend.title }}</h3>
              <el-tag class="dynamictag">{{ trend.tag }}</el-tag>
              <el-tag class="source">{{ trend.source }}</el-tag>
              <el-tag class="source">{{ trend.num }}评</el-tag>
              <p class="excerpts">{{ trend.excerpts }}</p>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="community-hot-list">
        <div class="topichead">
          <h1 class="title">社区热榜</h1>
        
          <div class="gradient-underline"></div>
        </div>
        <div class="hotlist">
          <ul>
            <li v-for="(blogger, index) in hotBloggers" :key="index">
              <el-avatar :src="blogger.avatar" class="avatar" />
            
              <a :href="'/profile/' + blogger.id" class="bloggername">{{ blogger.name }}</a>
              <button @click="followBlogger(blogger)" class="blgobtn">关注</button>
              <p class="bloggerexcerpt">{{ blogger.excerpt }}</p>
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
  CaretBottom,
  ArrowRight,
  DArrowRight,
  Refresh,
} from "@element-plus/icons-vue";
export default {
  name: "community",
  data() {
    return {
      input: "",
      ownicon1: false, //默认不显示
      ownicon2: false,
      ownicon3: false,
      ownicon4: false,
      stateicon1: false,
      stateicon2: false,
      rows: 6,
      cols: 8,
      data: [],
      topics: [
        {
          id: "1",
          title: "重磅会议首题“金融强国”",
          discuss: "16.62w",
          view: "927w",
        },
      ],
      trends: [
        {
          title: "中央金融工作会议：活跃资本",
          tag: "焦点",
          source: "新华社",
          num: "408",
          excerpts: "贵州茅台：自11月1日起上调53%VOL贵州茅台酒出厂价格平均上调",
        },
      ],
      hotBloggers: [
        {
          avatar:'../assets/Community/img/people.png',
          name:'布衣书先生走天下',
          excerpt:'市场会长多久'
        },        
      ],
      fullWidth:document.documentElement.clientWidth
    };
  },
  watch:{
    fullWidth(val){//监测浏览器的宽度变化
      if(!this.timer){
        this.fullWidth=val
        this.timer=true
        let that=this
        setTimeout(function(){
          that.timer=false
        },400)
      }
    }
  },
  mounted() {
    // 从后端获取数据
    // 假设数据为一个一维数组
    this.data = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
      40, 41, 42, 43, 44, 45, 46, 47, 48,
    ];
    this.get_bodyWidth
  },
  computed: {},
  created() {
    this.fetchTopics();
  },
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
    Ownbtnclick1() {
      this.ownicon1 = true; //点击按钮显示icon图标
      this.ownicon2 = false;
      this.ownicon3 = false;
      this.ownicon4 = false;
    },
    Ownbtnclick2() {
      this.ownicon2 = true; //点击按钮显示icon图标
      this.ownicon1 = false;
      this.ownicon3 = false;
      this.ownicon4 = false;
    },
    Ownbtnclick3() {
      this.ownicon3 = true; //点击按钮显示icon图标
      this.ownicon2 = false;
      this.ownicon1 = false;
      this.ownicon4 = false;
    },
    Ownbtnclick4() {
      this.ownicon4 = true; //点击按钮显示icon图标
      this.ownicon2 = false;
      this.ownicon3 = false;
      this.ownicon1 = false;
    },
    stateChose() {
      this.stateicon1 = true;
      this.stateicon2 = false;
    },
    attentionChose() {
      this.stateicon1 = false;
      this.stateicon2 = true;
    },
    get_bodyWidth(){//动态获取浏览器宽度
      const that=this
      window.onresize=()=>{
        return(()=>{
          window.fullWidth=document.documentElement.clientWidth
          that.fullWidth=window.fullWidth

        })()
      }

    },
    fetchTopics() {
      // 这里替换为你的后端接口地址
      const apiUrl = "https://api.example.com/topics";
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.topics = data;
        })
        .catch((error) => {
          console.error("获取话题数据失败：", error);
        });
    },
    favoriteTopic(topic) {
      // 这里替换为你的后端接口地址
      const apiUrl = `https://api.example.com/favorites/${topic.id}`;
      fetch(apiUrl, {
        method: "POST",
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            alert("收藏成功");
          } else {
            alert("收藏失败");
          }
        })
        .catch((error) => {
          console.error("收藏话题失败：", error);
        });
    },
    async fetchHotBloggers() {
      try {
        const response = await this.$http.get('/api/hot-bloggers');
        this.hotBloggers = response.data;
      } catch (error) {
        console.error(error);
      }
    },
    async followBlogger(blogger) {
      try {
        await this.$http.post('/api/follow', {
          bloggerId: blogger.id,
        });
        alert('关注成功');
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {
    Search,
    CaretBottom,
    ArrowRight,
    DArrowRight,
    Refresh,
  },
};
</script>
  
  <style lang="scss" scoped>
@import url("../assets/Community/css/community.css");
</style> -->