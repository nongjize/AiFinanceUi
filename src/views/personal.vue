<template>
  <div class="back">
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
      <!-- 内容 -->
      <div class="mainpart">
        <div class="center">
          <div class="centerleft">
            <div class="bac">
              <el-avatar class="avatar"></el-avatar>
            </div>
            <div class="cright">
              <h1>姓名{{ name }}</h1>
              <p>{{}}粉丝·{{}}关注</p>
            </div>
            <div class="cfooter">
              <p class="p1">
                <img src="../assets/personal/img/approve.png" />未认证{{}}
              </p>
              <p class="p2">
                投资者{{}} &nbsp;&nbsp;&nbsp;| IP属地：{{}}
                &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;
                <img
                  src="../assets/personal/img/whiteqq.png"
                />&nbsp;&nbsp;&nbsp;
                <img src="../assets/personal/img/microblogwhite.png" />
              </p>
              <el-row class="btngroup mb-4">
                <el-button class="btn1">编辑个人信息</el-button>
                <el-button class="btn2">分享</el-button>
              </el-row>
            </div>
          </div>
          <!-- 自选股票 -->
          <div class="centerright">
            <div class="rhed">
              <el-row class="btngroup1">
                <el-button class="choseown">自选股票</el-button>
                <el-button class="choseown">组选组合</el-button>
              </el-row>
              <el-button class="refreshbtn"
                >刷新<el-icon><Refresh /></el-icon
              ></el-button>
              <div class="underline"></div>
            </div>
            <div class="rhed2">
              <el-row>
                <el-button @click="Market" class="rhedbtn"
                  >行情<el-icon v-show="rhedbtn1"><CaretBottom /></el-icon
                ></el-button>
                <el-button @click="Stranded" class="rhedbtn"
                  >多股同列<el-icon v-show="rhedbtn2"><CaretBottom /></el-icon
                ></el-button>
                <el-button @click="Forecast" class="rhedbtn"
                  >盈利预测<el-icon v-show="rhedbtn3"><CaretBottom /></el-icon
                ></el-button>
                <el-button @click="Finance" class="rhedbtn"
                  >财务数据<el-icon v-show="rhedbtn4"><CaretBottom /></el-icon
                ></el-button>
                <el-button @click="Glance" class="rhedbtn"
                  >盈亏一览<el-icon v-show="rhedbtn5"><CaretBottom /></el-icon
                ></el-button>
              </el-row>
            </div>
            <div class="stocktable">
              <table ref="table" style="width: 1200px; height: 200px; overflow-x: auto; overflow-y: hidden; position: relative;" class="owntable">
                <thead>
                  <tr>
                    <th>
                      <input
                        type="checkbox"
                        v-model="selectAll"
                        @change="selectAllChange"
                      />全选
                    </th>
                    <th>代码</th>
                    <th>名称</th>
                    <th>股吧</th>
                    <th>最新价</th>
                    <th>涨跌幅</th>
                    <th>涨跌额</th>
                    <th>总手</th>
                    <th>现手</th>
                    <th>买入价</th>
                    <th>卖出价</th>
                    <th>昨收</th>
                    <th>成交额</th>
                    <th>换手率</th>
                    <th>振幅</th>
                    <th>量比</th>
                    <th>涨速</th>
                    <th>市盈率</th>
                    <th>每股收益</th>
                    <th>所属行业模块</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="stock in stocks"
                    :key="stock.code"
                    :style="{ backgroundColor: getRowColor(stock) }"
                  >
                    <td>
                      <input
                        type="checkbox"
                        v-model="stock.selected"
                        @change="selectStock(stock)"
                      />
                    </td>
                    <td>{{ stock.code }}</td>
                    <td>{{ stock.name }}</td>
                    <td>{{ stock.Share }}</td>
                    <td>{{ stock.nprice}}</td>
                    <td>{{ stock.cprice}}</td>
                    <td>{{ stock.camount }}</td>
                    <td>{{ stock.totalhand }}</td>
                    <td>{{ stock.nowhand }}</td>
                    <td>{{ stock.Bidprice }}</td>
                    <td>{{ stock.Askprice }}</td>
                    <td>{{ stock.yesterdayreceive }}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>                    
                  </tr>
                </tbody>
              </table>
            </div>
          </div>          
        </div>
        <div></div>
      </div>

    </div>
  </div>
</template>

<script>
import axios from "axios";
import { Search, Refresh, CaretBottom } from "@element-plus/icons-vue";
export default {
  name: "person",
  data() {
    return {
        input:'',
      rhedbtn1: false, //默认不显示icon
      rhedbtn2: false,
      rhedbtn3: false,
      rhedbtn4: false,
      rhedbtn5: false,
      selectAll: false,
      stocks:[
        {
            code:'300059',
            name:'东方财富',

        }
      ],
    };
  },
  computed() {},
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
    // market
    Market() {
      this.rhedbtn1 = true;
      this.rhedbtn2 = false;
      this.rhedbtn3 = false;
      this.rhedbtn4 = false;
      this.rhedbtn5 = false;
    },
    // Multiple strands in the same column
    Stranded() {
      this.rhedbtn1 = false;
      this.rhedbtn2 = true;
      this.rhedbtn3 = false;
      this.rhedbtn4 = false;
      this.rhedbtn5 = false;
    },
    // Earnings forecasts
    Forecast() {
      this.rhedbtn1 = false;
      this.rhedbtn2 = false;
      this.rhedbtn3 = true;
      this.rhedbtn4 = false;
      this.rhedbtn5 = false;
    },
    // Financial data
    Finance() {
      this.rhedbtn1 = false;
      this.rhedbtn2 = false;
      this.rhedbtn3 = false;
      this.rhedbtn4 = true;
      this.rhedbtn5 = false;
    },
    //Profit and loss as one
    Glance() {
      this.rhedbtn1 = false;
      this.rhedbtn2 = false;
      this.rhedbtn3 = false;
      this.rhedbtn4 = false;
      this.rhedbtn5 = true;
    },
    fetchStocks() {
      // 这里替换为你的后端API接口
      const apiUrl = "https://api.example.com/stocks";
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          this.stocks = data;
        })
        .catch((error) => {
          console.error("Error fetching stocks:", error);
        });
    },
    selectAllChange() {
      if (this.selectAll) {
        this.stocks.forEach((stock) => (stock.selected = true));
      } else {
        this.stocks.forEach((stock) => (stock.selected = false));
      }
    },
    selectStock(stock) {
      stock.selected = !stock.selected;
      if (!this.selectAll) {
        this.selectAll = this.stocks.every((s) => s.selected);
      }
    },
    getRowColor(stock) {
      return stock.index % 2 === 0 ? '#136183' : 'transparent';
    },
  },
  components: {
    Search,
    Refresh,
    CaretBottom,
  },
  mounted(){
    this.fetchStocks();
  }
};
</script>

<style>
@import url("../assets/personal/css/personal.css");
</style>