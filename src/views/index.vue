<template>
  <div class="topimg">
    <!-- <img src="../assets/index/img/0.png" /> -->
  </div>

  <div class="indexmain">
    <div class="back1">
      <!-- 导航信息 -->
      <!-- <a
      class="btn"
      onmouseout="this.style.color='white'"
      onmouseleave="this.style.color='black'" 
      href="https://work.weixin.qq.com/kfid/kfcfd990537d8749f8d?enc_scene=ENC5JURwTPhxtzAA8XmkFjRdYUiFsy3jVXB1xtzZyz59b2pthsCKzHa2GQSLGpqSwqHNz"
      >联系客服</a> -->
      
      <div class="header">
        <!-- 个人中心 -->
        <ol class="headerleft">
          <li>个人中心  </li>
          <div v-if="this.$store.state.userid!=''" style="font-size: 16px;">{{this.$store.state.userid}}</div>
          <div v-if="this.$store.state.userid==''" >  <el-button
            style="font-size: 16px;"
            class="btn"
            @click="GetRouterInfo('login')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >登录</el-button></div>
        </ol>

        <div class="headermiddle">
          <el-button
            class="btn"
            @click="GetRouterInfo('index')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >首页</el-button>
          <el-button
            class="btn"
            @click="GetRouterInfo('aistocks')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >AI股票</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('investclass')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            style="display: none;"
            >AI投资课堂</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('community')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            style="display: none;"
            >AI股民社区</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('news')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >新闻资讯</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('help')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >帮助中心</el-button
          >
          <el-button
            class="btn"
            @click="GetRouterInfo('hidedra')"
            onmouseout="this.style.color='white'"
            onmouseleave="this.style.color='black'"
            >卧虎藏龙</el-button>
          

          
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
        <div class="bbodyleft">
          <img src="../assets/index/img/title1.png" class="title1" />
          <!-- <button class="btn1">绑定账户 ></button> -->
        </div>
        <!-- <div class="bbodyright" v-if="this.$store.state.userid!=''">
          <ChatWindowSimple class="chatwindow"></ChatWindowSimple>
        </div> -->
        <div class="bbodyright" >
          <ChatWindowSimple class="chatwindow"></ChatWindowSimple>
        </div>
      </div>
    </div>
  
    <div class="back2">
      <img src="../assets/index/img/11.png" class="quoimg" />
      <!-- <el-button  class="btn"  @click="GetIndex()">指数数据刷新</el-button> -->
      <div class="quomain">
        
        <!-- <img
          src="../assets/index/img/left.png"
          class="left"
          @click="sprevPage"
          :disabled="scurrentPage == 1"
        /> -->
        
        <div class="carousel">
          <div class="box" v-for="stock in stocks" :key="stock.id">
            <div class="indexs">
              <p class="p1">{{ stock.name }}</p>
              <p class="p2" :style="getColor(stock.num2)">{{ stock.num1 }}</p>
              <p class="text1" :style="getColor(stock.num2)">{{ stock.num2 }}</p>
              <p class="text1" :style="getColorf(stock.num3)">{{ stock.num3 }}</p>
            </div>
            <img src="../assets/index/img/head.png" />
          </div>
        </div>
        <!-- <img
          src="../assets/index/img/right.png"
          class="right"
          @click="snextPage"
          :disabled="scurrentPage == stockPages"
        /> -->
      </div>
    </div>
    <div class="back3">
      <div class="table">
        <div class="btngroup">
          <button class="tbtn">
            <!-- <p>01</p> -->
            智能推荐
            <img src="../assets/index/img/x2.png" />
            <div class="line1">
              <div class="dot1"></div>
              <div class="dot1"></div>
            </div>
          </button>
         
          <!-- <button class="tbtn">
            <p>02</p>
            智能组合
            <img src="../assets/index/img/x2.png" />
            <div class="line2">
              <div class="dot2"></div>
              <div class="dot2"></div>
            </div>
          </button>
          <button class="tbtn">
            <p>03</p>
            行业应用
            <img src="../assets/index/img/x2.png" />
            <div class="line2">
              <div class="dot2"></div>
              <div class="dot2"></div>
            </div>
          </button>
          <button class="mbtn">更多></button> -->
        </div>
        <!-- <div class="table-container"> -->
          <!-- 1232321 -->
          <el-table
            :data="tableData"
            :header-row-style="{ height: '60px', color: 'white' }"
            :row-style="{ height: '60px' }"
          >
            <el-table-column fixed  prop="stockcode"    label="股票代码"  width="130" />
            <el-table-column prop="name" label="股票名称" width="120" />
            <el-table-column prop="price" label="最新价" width="120" />
            <el-table-column prop="pricelimit" label="涨跌幅(%)" width="120" />
            <el-table-column prop="turnoverrate" label="换手率(%)" width="120" />
            <el-table-column prop="volumetran" label="成交额(元)" width="180" />
            <el-table-column prop="circulationmarketvalue" label="当日流通市值(元)" width="180" />
            <!--           
              element.pricelimit=res.data.items[i][4];//涨跌幅
          element.pricelimit=res.data.items[i][5];//换手率
          element.pricelimit=res.data.items[i][6];//总成交额
          element.pricelimit=res.data.items[i][13];//当日流通市值 -->
            <!-- <el-table-column prop="masterhand" label="总手" width="80" />
            <el-table-column prop="presentsale" label="现手" width="80" />
            <el-table-column prop="buy" label="买入价" width="80" />
            <el-table-column prop="sale" label="卖出价" width="80" /> -->
            <!-- <el-table-column prop="yesclosing" label="昨收" width="80" /> -->

            <!-- <el-table-column prop="ratio" label="量比" width="80" /> -->
            <!-- <el-table-column prop="acceleration" label="涨速" width="80" />
            <el-table-column prop="peratio" label="市盈率" width="80" />
            <el-table-column prop="earings" label="每股收益" width="120" />
            <el-table-column prop="trade" label="所属行业版块" width="120" />-->
             <!-- <el-table-column align="right" fixed="right">
             <template #header> 加自选 </template> 
              <template #default="scope">
                <el-button
                  size="small"
                  class="cbtn"
                  @click="handleEdit(scope.$index, scope.row)"
                  >+自选</el-button
                >
              </template>
            </el-table-column>  -->
          </el-table>
        <!-- </div> -->
      </div>
    </div>
    <div class="back4">
      <div class="btngroup">
        <h1>财经快讯</h1>
      </div>
      <!-- 财经快讯 -->
      <div class="newbody">
        <div class="newbtngroup">
          <!-- <button class="nbtn" @click="showflashnew">
            动态<el-icon><CaretBottom /></el-icon>
          </button>
          <button class="nbtn">
            关注<el-icon><CaretBottom /></el-icon>
          </button> -->
          <button class="refesh" @click="GetNews">
            刷新<el-icon><Refresh /></el-icon>
          </button>
        </div>
        <div class="quicklist" v-show="newsflash">
          <ul v-for="item in newsflashlists" v-bind:key="item">
            <li>{{ item[2] }}</li>
            <el-tag>{{ item[0] }}</el-tag>
            <text>{{ item[1] }}</text>
          </ul>
        </div>
      </div>
    </div>
    <div class="back5">
      <div class="classbody">
        <img src="../assets/index/img/classtitle.png" class="img1" />
        <button class="bodybtn" onclick="window.open('https://work.weixin.qq.com/kfid/kfcfd990537d8749f8d?enc_scene=ENC5JURwTPhxtzAA8XmkFjRdYUiFsy3jVXB1xtzZyz59b2pthsCKzHa2GQSLGpqSwqHNz')">联系客服</button>
        <!-- <div class="coursenew">
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
        </div> -->
      </div>
    </div>
    <Bottom></Bottom>
  </div>
  
</template>

<script>
import axios from "axios";
import { CaretBottom, Refresh } from "@element-plus/icons";
import ChatWindowSimple from "./chatwindowSimple.vue";
import Bottom from "./Bottom.vue";
import { getdatafromtushare,getNews,getindex_daily,getstockList } from "@/api/getData";


export default {
  name: "index",
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

      newsflash: true,
      //假定的虚拟数据
      stocks: [
        {name:'上证综指',num1:'',num2:'',num3:''},
        {name:'深圳成指',num1:'',num2:'',num3:''},
        {name:'创业板指',num1:'',num2:'',num3:''},
        {name:'上证50',num1:'',num2:'',num3:''},
        {name:'中证500',num1:'',num2:'',num3:''}

        
      ],
      questions: ["每年几月份是最佳的融资窗口?"],
      spagesize: 5, //行情指数每页行情指数显示的数据条数
      scurrentPage: 1, //当前页码
      //存储智能推荐的表格数据
      // <el-table-column fixed  prop="stockcode"    label="股票代码"  width="120" />
      //       <el-table-column prop="name" label="股票名称" width="80" />
      //       <el-table-column prop="price" label="最新价" width="80" />
      //       <el-table-column prop="pricelimit" label="涨跌幅" width="80" />
      //       <el-table-column prop="turnoverrate" label="换手率" width="80" />
      //       <el-table-column prop="volumetran" label="成交额" width="80" />
      //       <el-table-column prop="circulationmarketvalue" label="当日流通市值" width="80" />
      tableData: [
        { stockcode: "", name: "", price: "", pricelimit: "" ,turnoverrate: "",volumetran: "",circulationmarketvalue: ""},
        { stockcode: "", name: "", price: "", pricelimit: "" ,turnoverrate: "",volumetran: "",circulationmarketvalue: ""},
        { stockcode: "", name: "", price: "", pricelimit: "",turnoverrate: "",volumetran: "",circulationmarketvalue: "" },
        { stockcode: "", name: "", price: "", pricelimit: "" ,turnoverrate: "",volumetran: "",circulationmarketvalue: ""},
        { stockcode: "", name: "", price: "", pricelimit: "" ,turnoverrate: "",volumetran: "",circulationmarketvalue: ""},
        { stockcode: "", name: "", price: "", pricelimit: "",turnoverrate: "",volumetran: "",circulationmarketvalue: "" },
        { stockcode: "", name: "", price: "", pricelimit: "" ,turnoverrate: "",volumetran: "",circulationmarketvalue: ""},

      ],
      chatList: [],
      inputMsg: "",
      showEmoji: false,
      frinedInfo: {},
      srcImgList: [],
      isSend: false,
      newsflashlists: [
        
      ],
    };
  },
  mounted(){
    getstockList().then((res)=>{
        var i=3;
        this.tableData.forEach(element =>{
          element.stockcode=res.data.items[i][1];
          element.name=res.data.items[i][2];
          element.price=res.data.items[i][3];
          element.pricelimit=res.data.items[i][4];//涨跌幅
          element.turnoverrate=res.data.items[i][5];//换手率
          element.volumetran=res.data.items[i][6];//总成交额
          element.circulationmarketvalue=res.data.items[i][13];//当日流通市值
          i=i+2;
        }
        );});


    //获取指数行情数据
   
      //获取上证指数数据
      getindex_daily("000001.sh").then((res) => {
        
        this.stocks[0].num1=res.data.items[0][2].toFixed(2);
        this.stocks[0].num2=res.data.items[0][7].toFixed(2);
        this.stocks[0].num3=res.data.items[0][8].toFixed(2)+"%";
        });
        //获取深证指数数据
      getindex_daily("399001.sz").then((res) => {
        //console.log(res.data.items);
        
        this.stocks[1].num1=res.data.items[0][2].toFixed(2);
        this.stocks[1].num2=res.data.items[0][7].toFixed(2);
        this.stocks[1].num3=res.data.items[0][8].toFixed(2)+"%";
        });
      getindex_daily("399006.SZ").then((res)=>{
        this.stocks[2].num1=res.data.items[0][2].toFixed(2);
        this.stocks[2].num2=res.data.items[0][7].toFixed(2);
        this.stocks[2].num3=res.data.items[0][8].toFixed(2)+"%";
      });
      getindex_daily("000016.SH").then((res)=>{
        this.stocks[3].num1=res.data.items[0][2].toFixed(2);
        this.stocks[3].num2=res.data.items[0][7].toFixed(2);
        this.stocks[3].num3=res.data.items[0][8].toFixed(2)+"%";
      });
      getindex_daily("000905.SH").then((res)=>{
        this.stocks[4].num1=res.data.items[0][2].toFixed(2);
        this.stocks[4].num2=res.data.items[0][7].toFixed(2);
        this.stocks[4].num3=res.data.items[0][8].toFixed(2)+"%";
      });
    //获取新闻
    
      getNews().then((res) => {
        this.newsflashlists=res.data.items;});
  },
  methods: {

    GetRouterInfo(url) {
      this.$router.push({ path: "/" + url + "" });
    },

    GetTushareData(){
      getdatafromtushare().then((res) => {
        console.log(res);
        });
      },

    //获取推荐股票getstockList
    GetStockList(){
      getstockList().then((res)=>{
        var i=3;
        this.tableData.forEach(element =>{
// stockcode: "300地产", name: "股吧", price: "13.28", pricelimit: "" ,turnoverrate: "",volumetran: "",circulationmarketvalue: ""
          element.stockcode=res.data.items[i][1];
          element.name=res.data.items[i][2];
          element.price=res.data.items[i][3];
          element.pricelimit=res.data.items[i][4];//涨跌幅
          element.turnoverrate=res.data.items[i][5];//换手率
          element.volumetran=res.data.items[i][6];//总成交额
          element.circulationmarketvalue=res.data.items[i][13];//当日流通市值
          i=i+2;

        }
        
        );

//         for (var ele in res.data.items ){
//         //console.log(arr[ele]);
//         if(ele%5==0){
//         this.tableData[j].stockcode=res.data.items[ele][1];
//         this.tableData[j].name=res.data.items[ele][2];
//         this.tableData[j].price=res.data.items[ele][3];}
//         }
// //
//         var i=5;
//         var j=0;
//         let flag=false;
//         res.data.items.forEach(element => {
//           if(i%5==0){
//             if (j >= 6) {flag = true; }
//             if (flag) throw new Error(); 
           
//             this.tableData[j].stockcode=element[1];
//             this.tableData[j].name=element[2];
//             this.tableData[j].price=element[3];
//             j++;
//           }
//           i++; 
//         });
        
      });

    },
    //获取指数行情数据
    GetIndex(){
      //获取上证指数数据
      getindex_daily("000001.sh").then((res) => {
        this.stocks[0].num1=res.data.items[0][2].toFixed(2);
        this.stocks[0].num2=res.data.items[0][7].toFixed(2);
        this.stocks[0].num3=res.data.items[0][8].toFixed(2)+"%";
        });
        //获取深证指数数据
      getindex_daily("399001.sz").then((res) => {
        //console.log(res.data.items);
        this.stocks[1].num1=res.data.items[0][2].toFixed(2);
        this.stocks[1].num2=res.data.items[0][7].toFixed(2);
        this.stocks[1].num3=res.data.items[0][8].toFixed(2)+"%";
        });
      },
    //获取新闻
    GetNews(){
      getNews().then((res) => {
        //console.log(res);
        this.newsflashlists=res.data.items;
        });},

    //不带百分比改变颜色
    getColor(num){
      if(num>0){
        return 'color:#23F904';
      }else{
        return 'color:#FA0000';
      }
    },
    getColorf(num){
      const num1=parseFloat(num);
      if(num1>0){
        return 'color:#23F904';
      }else{
        return 'color:#FA0000';
      }

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
    consult() {
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
   
    showAI() {
      this.Aidialog = true;
      this.newsList = false;
    },
    shownews() {
      this.Aidialog = false;
      this.newsList = true;
    },
    showflashnew() {
      this.newsflash = true;
    },
    
  },

  components: {
    ChatWindowSimple,
    CaretBottom,
    Refresh,
    Bottom
  },
  
  created() {
    // this.getstockPageData();
  },
  computed: {
    stockPages() {
      return Math.ceil(this.stocks.length / this.spageSize); // 总页数
    },
    getstockPageData() {
      const startIndex = (this.scurrentPage - 1) * this.spageSize;
      const endIndex = startIndex + this.pageSize;
      return this.stocks.slice(startIndex, endIndex); // 当前页的数据
    },

    
  },


};
</script>

<style src="@/assets/index/css/index.css" scoped>

</style>