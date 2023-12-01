<template>
  <div class="bg">    
    <!-- 导航栏 -->
    <div class="header">      
      <el-menu :default-active="$route.path" :router="true"  class="el-menu-demo"  mode="horizontal" @select="handleSelect" 
      background-color="#010c1a"    text-color="#ffffff"    active-text-color="#23a2b9" style="border: 0;font-weight: bolder; ">        
        <!-- <el-avatar :size="60" >
          <img src="../assets/index/img/person.png"/>
        </el-avatar>
        <p>个人中心</p> -->
        <div class="personbtn">
          <img src="../assets/index/img/person.png"/>
          <p>个人中心</p>
        </div>        
        <el-menu-item index="/index">首页</el-menu-item>
        <el-menu-item index="/aistocks">Ai股票</el-menu-item>
        <el-menu-item index="/investclass">AI投资课堂</el-menu-item>
        <el-menu-item index="/community" >AI股民社区</el-menu-item>
        <el-menu-item index="/news" >新闻资讯</el-menu-item>
        <el-menu-item index="/help" >帮助中心</el-menu-item>
        <el-menu-item index="/hidedra" >卧虎藏龙</el-menu-item> 
        <div class="demo-input-suffix search">           
          <el-input placeholder="Search"  v-model="input" style="border-radius: 50px;">
            <template #suffix>
              <el-icon style="color: #a0928d;">
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
          <text style="color: #24adbc; ">一步</text>
          <text>了解</text><br>
          <text>最新股票资讯</text><br>
          <text>AI股市</text>
          <p>One step understanding Latest stock information </p>
          <p>AI stock market</p>
        </div>        
        <el-button type="primary" class="set-other-btn">CLICK TO ENTER</el-button>       
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
              <text class="value1">3017.78</text><br>
              <text class="value2">29.18</text>&nbsp;&nbsp;
              <text class="value2">0.99%</text>
            </th>
            <th>
              <h3></h3>
              <text class="value1"></text><br>
              <text class="value2"></text>&nbsp;&nbsp;
              <text class="value2"></text>
            </th>
            <th>
              <h3></h3>
              <text class="value1"></text><br>
              <text class="value2"></text>&nbsp;&nbsp;
              <text class="value2"></text>
            </th>
            <th>
              <h3></h3>
              <text class="value1"></text><br>
              <text class="value2"></text>&nbsp;&nbsp;
              <text class="value2"></text>
            </th>          
          </tr>
        </table>          
      </div> 
      <el-icon class="edleft"><ArrowLeft/></el-icon>
      <el-icon class="edright"><ArrowRight/></el-icon>     
    </el-container>
    <!-- 智能推荐和智能组合 -->
    <el-container class="">
      <!-- 智能推荐 -->
      <el-aside >

      </el-aside>
    </el-container>
    
   
  </div>
</template>

<script>
import axios from "axios"
import {Search, House,ArrowLeft,ArrowRight} from '@element-plus/icons-vue'
export default {
  name:"index",
  data(){
    return{      
      input:''
    };
  },
  computed:{
   

  },
  methods:{
    handleSelect(key,keyPath){
      console.log(key,keyPath)
    },
    // 点击 el-submenu 时可以跳转
    handleSelectMenu(path) {
        this.$router.push(path)
      },

  },
  components: {
    Search,
    House,
    ArrowLeft,
    ArrowRight,

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
    getData(code) {
      var that = this;
      axios({
        method: "get",
        url: that.url + code,
        //url: that.requerturl,
      }).then(function (resp) {
        if (resp.status == 200) {
            let res = resp.data.result;
            that.params = res;
            that.$store.state.fertilize = res.fertilize; 
            that.$store.state.harvest = res.harvest; 
            that.$store.state.pesticide = res.pesticide; 
            that.$store.state.pruning = res.pruning; 
            that.$store.state.weed= res.weed;
            that.$store.state.farm= res.farm;
     
          } else {
            return;
          }
        })
        .catch((err) => {
          console.log("请求失败：", err);
        });
    },
  },



}
</script>

<style>
@import url('../assets/index/css/index.css');
@import 'bootstrap/dist/css/bootstrap.min.css';

</style>