<template>
  <div class="back1">
    <div class="body">
      <div class="head">
        <div class="leftline"></div>
        <h1>个人中心登录</h1>
      </div>
      <div class="bodyleft">
        <h3>1个账号，实现电脑、手机、iPad自选股同步</h3>
        <div class="img"></div>
        <div class="btngroup">
          <button class="btn">点击下载app</button>
          <button class="btn">点击下载PC客户端</button>
        </div>
      </div>
      <div class="bodyright">
        <div class="btngroup">
          <button class="btn1" @click="accountlogin">
            账号登录
            <div class="line" v-show="btnline1"></div>
          </button>
          <button class="btn1" @click="smslogin">
            短信登录
            <div class="line" v-show="btnline2"></div>
          </button>
        </div>
        <div class="login" v-show="account">
          <el-input
            v-model="input"
            type="text"
            placeholder="请输入邮箱/手机号"
          />
          <el-input
            v-model="password"
            type="password"
            placeholder="请输入密码"
            :type="showPassword ? 'text' : 'password'"
          >
            <i slot="suffix" @click="switchPassword">
              <el-icon v-if="showPassword"><View /></el-icon>
              <el-icon v-else><Hide /></el-icon>              
            </i>
          </el-input>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElIcon } from "element-plus";
import { View,Hide } from "@element-plus/icons";

export default {
  name: "login",
  data() {
    return {
      input: "",
      password: "",
      btnline1: true, //默认不显示
      btnline2: false,
      account: true,
      showPassword: true,
    };
  },
  methods: {
    //账号登录
    accountlogin() {
      this.btnline1 = true;
      this.btnline2 = false;
      this.account = true;
    },
    //短信登录
    smslogin() {
      this.btnline1 = false;
      this.btnline2 = true;
      this.account = false;
    },
  },
  mounted() {},
  components: {
    View,Hide
  },
  computed: {},
};
</script>

<style>
@import url("../assets/Login/css/login.css");
</style>