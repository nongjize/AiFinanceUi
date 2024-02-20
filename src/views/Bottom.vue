<template>
  <div class="main">
    <div class="top">
      <div class="left">
        <div class="logo">
          <!-- <img src="../assets/img/logo.png" /> -->
        </div>
        <div class="name">
          <p>AI辅助</p>
          <p class="en">ARTIFICIAL INTELLIGENCE STOCK</p>
        </div>
        <div class="communication">
          <!-- <p>咨询热线：{{ 1212 }}</p> -->
          <!-- <p>地址：{{ 12323 }}</p> -->
        </div>
      </div>
      <div class="right">
        <div class="box">
          <h2 @click="gotolink('1')">热门推荐</h2>
          <p></p>
          <p></p>
        </div>
        <div class="box">
          <h2 @click="gotolink('2')">解决方案</h2>
          <p></p>
          <p></p>
        </div>
        <div class="box">
          <h2 @click="gotolink('2')">快速连接</h2>
          <p></p>
          <p></p>
        </div>
        <div class="box">
          <h2 @click="gotolink('3')">更多信息</h2>
          <!-- <p>知识产报</p>           -->
        </div>
      </div>
    </div>
    <div class="bottom">
      <li>ICP备案号: 滇ICP备2023003584号</li>
      <li class="dec">隐私声明</li>
      <li class="dec">资质证明</li>
      <li class="dec" @click="GetRouterInfo('help')">产品答疑</li>
      <li>|</li>
      <li>网站支持IPV6</li>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
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
    gotolink(val) {
      var that = this;
      url = '';
      if(val==1) {
        that.$router.push({ path: "/aistocks" });
      }
      if(val==2) {
        
        window.open('https://work.weixin.qq.com/kfid/kfcfd990537d8749f8d?enc_scene=ENC5JURwTPhxtzAA8XmkFjRdYUiFsy3jVXB1xtzZyz59b2pthsCKzHa2GQSLGpqSwqHNz', '_blank');
      }
      if(vla==3) {
        that.$router.push({ path: "/news" });
      }
      // var that = this;
      // that.$router.push({ path: "/" + url + "" });
      // this.className = "lun-img-two";
      // setTimeout(() => {
      //   this.className = "lun-img";
      // }, 300);
    },
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 思源黑体 Normal;
  font-weight: 300;
  src: url("../assets/font/SourceHanSansCN-Normal.ttf");
}

@font-face {
  font-family: 思源黑体 bold;
  font-weight: 600;
  src: url("../assets/font/SourceHanSansCN-Bold.ttf");
}
.main {
  width: 100%;
  height: 339.51px;
  float: left;
  position: relative;
  background: linear-gradient(
    -12.04deg,
    rgb(31, 110, 174) 26.409%,
    rgb(31, 110, 174) 26.478%,
    rgb(37, 187, 191) 73.142%,
    rgb(37, 187, 191) 73.591%
  );
  font-family: 思源黑体 bold;
}
.top {
  width: 80%;
  height: 75%;
  position: relative;
  float: left;
  margin-left: 10%;
  border-bottom: 2px solid white;
  .logo {
    width: 90px;
    height: 90px;
    float: left;
    position: relative;
    margin-top: 20px;

    img {
      width: 100%;
    }
  }
}
.left {
  width: 35%;
  height: 100%;
  float: left;
  position: relative;
  // border: 1px solid;
}
.name{
  width: 75%;
  height: 90px;
  // border: 1px solid;
  position: relative;
  float: left;
  text-align: left;
  margin-top: 20px;
  margin-left: 20px;
  p{
    font-size: 40px;
    color: black;
  }
  .en{
    font-family: 思源黑体 Normal;
    font-size: 20px;
  }
}
.communication{
  width: 100%;
  height: auto;
  position: relative;
  float: left;
  // border: 1px solid;
  color:black;
  p{
    text-align: left;
    padding-bottom:20px ;
    font-size: 20px;
  }
}
.right{
  width: 60%;
  height: 100%;
  margin-left:4%;
  // border: 1px solid;
  position: relative;
  float: left;
}
.box{
  float: left;
  width: 20%;
  height: 90%;
  margin-top:2% ;
  // border: 1px solid;
  margin-right:5% ;
  h2{
    color: white;
    font-size: 30px;
  }
  p{
    font-size: 20px;
    text-align: left;
    padding-top: 10px;
    padding-bottom:10px;
    font-family: 思源黑体 Normal;
    color: rgba(255, 255, 255,0.6);
  }
  p:hover{
    color: red;
  }
}

.bottom {
  width: 80%;
  height: 25%;
  margin-left: 10%;
  float: left;
  position: relative;
  text-align: left;

  li {
    list-style: none;
    color: rgba(255, 255, 255,0.6);
    float: left;
    font-size: 25px;
    margin-top: 10px;
    margin-right: 20px;
    font-family: 思源黑体 Normal;
  }
  .dec {
    color: rgba(255, 255, 255,0.6);;
  }
  .dec:hover {
    color: red;
  }
}
</style>