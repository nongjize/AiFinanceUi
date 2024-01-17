<template>
  <div class="registermain">
    <div class="back">
      <div class="head">
        <div class="leftline"></div>
        <h1>个人中心注册</h1>
      </div>
      <div class="body">
        <div class="bodyleft">
          <div class="text">
            <h2 class="h2">发现潜在的规律和趋势</h2>
            <p class="p1">资费透明 | 实时管控 | 流畅运行 | 实时到账</p>
          </div>
          <div class="img"></div>
        </div>
        <div class="bodyright">
          <div class="rtop">
            <text class="t1">1</text>
            <text class="t2">步注册，零门槛开户</text>
          </div>
          <form class="tcenter" @submit.prevent="submitForm">
            <div>
              <el-input
                class="input"
                type="text"
                id="phone"
                v-model="phone"
                @blur="validatePhone"
                placeholder="请输入您的手机号"
                ><template #append
                  ><el-button>发送验证码</el-button></template
                ></el-input
              >
              
            </div>

            <el-input
              type="text"
              id="verificationCode"
              v-model="verificationCode"
              class="input"
              placeholder="请输入验证码"
            ></el-input>

            <el-input
              type="password"
              id="password"
              v-model="password"
              class="input"
              @blur="validatePassword"
              placeholder="请输入密码"
            ></el-input>

            <el-input
              type="password"
              id="confirmPassword"
              v-model="confirmPassword"
              class="input"
              @blur="validateConfirmPassword"
              placeholder="请再次确认密码"
            ></el-input>
            <div class="check">
              <input type="checkbox" class="box" />
              <li>我已阅读并接受</li>
              <li class="dec">《服务条款》</li>
              <li>和</li>
              <li class="dec">《隐私服务》</li>
            </div>
            <button class="btn" type="submit">注册</button>
          </form>
          <p class="p2" @click="GetRouterInfo('login')">已有账号快速登录>></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "register",
  data() {
    return {
      phone: "",
      verificationCode: "",
      password: "",
      confirmPassword: "",
     
    };
  },
  components: {},
  methods: {
    GetRouterInfo(url) {
      var that = this;
      that.$router.push({ path: "/" + url + "" });
      this.className = "lun-img-two";
      setTimeout(() => {
        this.className = "lun-img";
      }, 300);
    },
    validatePhone() {
      const phoneRegex = /^1[3-9]\d{9}$/;
      if (!phoneRegex.test(this.phone)) {
        alert("请输入正确的手机号");
      } else {
        
      }
    },
    validatePassword() {
      const passwordRegex =
        /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[0-9a-zA-Z!@#$%^&*]{8,}$/;
      if (!passwordRegex.test(this.password)) {
        alert("密码必须为8位数以上，且由数字加字母加特殊字符组成")
          
      } else {
        
      }
    },
    validateConfirmPassword() {
      if (this.password !== this.confirmPassword) {
        alert("两次输入的密码不一致")
      } else {
        
      }
    },
    sendVerificationCode() {
      // 发送验证码的逻辑，例如调用后端接口
    },
    submitForm() {
      this.validatePhone();
      this.validatePassword();
      this.validateConfirmPassword();
      if (
        !this.phoneError &&
        !this.passwordError &&
        !this.confirmPasswordError
      ) {
        // 提交表单的逻辑，例如调用后端接口
      }
    },
  },
};
</script>

<style style="scss" scoped>
@import url("../assets/register/css/register.css");
</style>