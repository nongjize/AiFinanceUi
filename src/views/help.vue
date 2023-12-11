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
        style="border: 0; font-weight: bolder;outline: none;"
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
    </div>
    <!--main-->
    <div class="helpmain">
      <!-- 系统简介 -->
      <div class="introduce">
        <h1 class="h1">AI智能股票投资是什么？</h1>
        <p class="p1">
          AI智能投资是指利用人工智能（AI）技术进行股票投资的一种方法。通过使用大数据、机器学习、深度学习等先进技术，<br />AI系统可以分析大量金融数据，识别潜在投资机会和风险，从而为投资者提供决策支持
        </p>
        <h1 class="h1">为什么选择AI智能投资</h1>
        <p class="p1">AI智能股票投资的主要优势包括：</p>
      </div>
      <div class="trait">
        <div class="trait1">
          <img src="../assets/Help/img/effient.png" class="pic" />
          <h1 class="h1">高效性</h1>
          <p class="p1">
            AI系统可以快速处理大量数据，<br />实时更新市场信息，帮助投资者迅速做出决策。
          </p>
        </div>
        <div class="trait2">
          <img src="../assets/Help/img/risk.png" class="pic" />
          <h1 class="h1">风险管理</h1>
          <p class="p1">
            AI系统可以实时监控投资组合的风险<br />及时调整投资策略，降低潜在损失
          </p>
        </div>
        <div class="trait3">
          <img src="../assets/Help/img/forecast.png" class="pic" />
          <h1 class="h1">预测能力</h1>
          <p class="p1">
            AI系统可以通过对历史数据的分析，<br />发现潜在的规律和趋势，从而预测未来的<br />市场走势
          </p>
        </div>
        <div class="trait4">
          <img src="../assets/Help/img/object.png" class="pic" />
          <h1 class="h1">客观性</h1>
          <p class="p1">
            AI系统基于数据和算法进行分析，<br />实时更新市场信息，不受个人情绪和主管判断的影响，有助于提高投资者决策的客观性
          </p>
        </div>
      </div>
      <!-- 常见问题 -->
      <div class="problem">
        <div class="headline">
          <h1 class="tit">常见问题</h1>
          <p class="vid">FREQUENTLY <br />ASKED QUEDTION</p>
        </div>
        <div class="problem-list">
          <button class="list-btn">
            <el-icon><CirclePlus /></el-icon>
            忘记密码怎么办?
          </button>
          <button class="list-btn">
            <el-icon><CirclePlus /></el-icon>
            如何邀请好友加入？
          </button>
          <button class="list-btn">
            <el-icon><CirclePlus /></el-icon>
            我们需要收取服务费吗？
          </button>
          <button class="list-btn">
            <el-icon><CirclePlus /></el-icon>
            我们系统安全可靠吗？
          </button>
          <button class="list-btn" style="border-bottom:2px solid #294a6a  ;">
            <el-icon><CirclePlus /></el-icon>
           AI预测精准吗？
          </button>
        </div>

      </div>
    </div>
  </div>
</template>
  
  <script>
import axios from "axios";
import { Search,CirclePlus } from "@element-plus/icons-vue";
export default {
  name: "help",
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
    Search,CirclePlus
  },
};
</script>
  
<style lang="scss" scoped>
@import url("../assets/Help/css/help.css");
</style>