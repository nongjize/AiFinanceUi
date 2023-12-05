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
          background-color="#010c1a"
          text-color="#ffffff"
          active-text-color="#23a2b9"
          style="border: 0; font-weight: bolder"
        >
          <div class="personbtn">
            <img src="../assets/index/img/person.png" />
            <p>个人中心</p>
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
      <div class="main"></div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  import { Search } from "@element-plus/icons-vue";
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
        Search,
      },
      
  };
  </script>
  
  <style>
  @import url("../assets/Help/css/help.css");
  </style>