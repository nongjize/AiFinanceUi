<template> 
  <div class="back1">
    <div class="head">
      <div class="leftline"></div>
      <h1>个人中心登录</h1>
    </div>
    <div class="body">
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
            show-password
          >
          </el-input>
          <div class="check">
            <input type="checkbox" class="box" />
            <li>我已阅读并接受</li>
            <li class="dec">《服务条款》</li>
            <li>和</li>
            <li class="dec">《隐私服务》</li>
          </div>
          <button class="loginbtn" @click="GetRouterInfo('person')">
            登录
          </button>
          <div class="check">
            <li>还没有账号？</li>
            <li class="dec" @click="GetRouterInfo('register')">5秒注册</li>
            <li class="dec dec1">忘记密码</li>
          </div>
        </div>
        <div class="notelogin" v-show="note">
          <el-input v-model="input" type="text" placeholder="请输入手机号">
          </el-input>
          <el-input
            v-model="password"
            type="password"
            placeholder="请输入验证码"
          >
            <template #append><el-button>获取验证码</el-button></template>
          </el-input>
          <div class="check">
            <input type="checkbox" class="box" />
            <li>我已阅读并接受</li>
            <li class="dec">《服务条款》</li>
            <li>和</li>
            <li class="dec">《隐私服务》</li>
          </div>
          <button class="loginbtn" @click="GetRouterInfo('person')">
            登录
          </button>
          <div class="check">
            <p>未注册的手机号验证通过后自动注册</p>
          </div>
        </div>
        <div class="other">
          <p>其他登录方式</p>
          <div class="imggroup">
            <div class="img">
              <img src="../assets/Login/img/wechat.png" />
            </div>
            <div class="img">
              <img src="../assets/Login/img/qq.png" />
            </div>
            <div class="img">
              <img src="../assets/Login/img/microblog.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ElIcon } from "element-plus";

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
      note: false,
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
      this.note = true;
    },
  },
  mounted() {},
  components: {},
  computed: {},
};
</script>

<style>
@import url("../assets/Login/css/login.css");
</style>