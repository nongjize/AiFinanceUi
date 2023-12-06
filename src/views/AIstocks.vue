<!-- 股票页 -->
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
    <div class="main">
      <!-- 智能推荐和自选股 -->
      <div class="Recommended-combinations">
        <!-- 智能推荐 -->
        <div class="Smart-recommendations">
          <!-- 标题 -->
          <div class="rectitle">
            <img src="../assets/Aistocks/img/Click_to _nter.png" />
            <h3>智能推荐</h3>
          </div>
          <div class="testimonial_form">
            <table class="tab">
              <!-- 表头 -->
              <thead>
                <tr>
                  <th>代码</th>
                  <th>名称</th>
                  <th>涨跌幅</th>
                  <th>最新价</th>
                  <th>加自选</th>
                </tr>
              </thead>
              <!-- 数据列表 -->
              <tbody>
                <tr class="tab_body1">
                  <td>688210</td>
                  <td>名称</td>
                  <td style="color: #ff0000">18.74%</td>
                  <td style="color: #ff0000">28.96</td>
                  <td>
                    <el-button type="primary" class="optional"
                      >自选<el-icon><Plus /></el-icon
                    ></el-button>
                  </td>
                </tr>
                <tr class="tab_body2">
                  <td>688210</td>
                  <td>名称</td>
                  <tdWatchlisted style="color: #ff0000">18.74%</tdWatchlisted>
                  <td style="color: #ff0000">28.96</td>
                  <td>
                    <el-button type="primary" class="optional"
                      >自选<el-icon><Plus /></el-icon
                    ></el-button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="Watchlisted">
          <div class="hed">
            <button class="btn" @click="underlineShow">自选股</button>
            <button class="btn" @click="underlineShow">自选股1</button>
            <button class="btn" @click="underlineShow" style="margin-right: 0">
              自选股2
            </button>
          </div>
          <el-button class="built"
            >新建组合<el-icon><CirclePlus /></el-icon
          ></el-button>
          <div class="watbody">
            <div class="chose">
              <el-button class="btn" @click="selectShow1"
                >我的自选<el-icon v-show="choseshow1"><CaretBottom /></el-icon
              ></el-button>
              <el-button class="btn" @click="selectShow2"
                >智能预测<el-icon v-show="choseshow2"><CaretBottom /></el-icon
              ></el-button>
            </div>
            <!-- 数据表，点击不同的按钮显示不同的数据表 -->
            <div class="table" v-show="table1">
              <!-- 自选 -->
              <el-table
                ref="multipleTableRef"
                :data="tableData"
                style="width: 510px"
                @selection-change="handleSelectionChange"
                class="Optional-table"
                :header-cell-style="{
                  height: 'auto',
                  background: '#229bb8',
                  color: 'white',
                  border: 'none!important',
                  margin: 'none',
                }"
              >
                <el-table-column
                  fixed
                  type="selection"
                  width="auto"
                  label="全选"
                  :index="indexMethod"
                />
                <el-table-column
                  fixed
                  property="code"
                  label="代码"
                  width="auto"
                />
                <el-table-column
                  fixed
                  property="name"
                  label="名称"
                  width="auto"
                />
                <el-table-column property="name" label="股吧" width="auto" />
                <el-table-column property="name" label="最新价" width="auto" />
                <el-table-column property="name" label="涨跌幅" width="auto" />
                <el-table-column property="name" label="总手" width="auto" />
                <el-table-column property="name" label="现手" width="auto" />
                <el-table-column property="name" label="买入价" width="auto" />
                <el-table-column property="name" label="卖出价" width="auto" />
                <el-table-column property="name" label="昨收" width="auto" />
                <el-table-column property="name" label="成交额" width="auto" />
                <el-table-column property="name" label="换手率" width="auto" />
                <el-table-column property="name" label="振幅" width="auto" />
                <el-table-column property="name" label="振幅" width="auto" />
                <el-table-column property="name" label="量比" width="auto" />
                <el-table-column property="name" label="涨速" width="auto" />
                <el-table-column property="name" label="市盈率" width="auto" />
                <el-table-column
                  property="name"
                  label="每股收益"
                  width="auto"
                />
                <el-table-column
                  property="name"
                  label="所属行业模块"
                  width="90"
                />
              </el-table>
            </div>
            <div class="table" v-show="table2">
              <el-table
                ref="multipleTableRef"
                :data="tableData"
                style="width: auto"
                @selection-change="handleSelectionChange"
                class="Optional-table"
                :header-cell-style="{
                  height: 'auto',
                  background: '#229bb8',
                  color: 'white',
                  border: 'none!important',
                  margin: 'none',
                }"
              >
                <el-table-column
                  fixed
                  type="selection"
                  width="auto"
                  label="全选"
                  :index="indexMethod"
                />
                <el-table-column
                  fixed
                  property="code"
                  label="代码"
                  width="auto"
                />
                <el-table-column
                  fixed
                  property="name"
                  label="名称"
                  width="auto"
                />
                <el-table-column property="name" label="股吧" width="auto" />
                <el-table-column property="name" label="最新价" width="auto" />
                <el-table-column property="name" label="涨跌幅" width="auto" />
                <el-table-column property="name" label="研报数" width="auto" />
                <el-table-column
                  property="name"
                  label="评级统计(六个月)买入"
                  width="130"
                />
                <el-table-column
                  property="name"
                  label="评级统计(六个月)增持"
                  width="130"
                />
                <el-table-column
                  property="name"
                  label="评级统计(六个月)中性"
                  width="130"
                />
                <el-table-column
                  property="name"
                  label="评级统计(六个月)减持"
                  width="130"
                />
                <el-table-column
                  property="name"
                  label="评级统计(六个月)卖出"
                  width="130"
                />
                <el-table-column
                  property="name"
                  label="2022实际收益"
                  width="100"
                />
                <el-table-column
                  property="name"
                  label="2023预测收益"
                  width="100"
                />
                <el-table-column property="name" label="2023预测市盈率" width="100" />
                <el-table-column property="name" label="2024预测收益" width="100" />
                <el-table-column property="name" label="2024预测收益" width="100" />
                <el-table-column property="name" label="2025预测收益" width="100" />
                <el-table-column
                  property="name"
                  label="2025预测市盈率"
                  width="100"
                />
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <!-- 财经快讯 和股市直播-->
      <div class="Newsletter-live">
        <!-- 财经快讯 -->
        <div class="Financial-Alerts">
          <div class="news-title">
            <text class="news">财经快讯</text>
            <el-button class="btn"
              >更多<el-icon><DArrowRight /></el-icon
            ></el-button>
          </div>
          <div class="news-list">
            <ul class="box-card">
              <li v-for="o in 10" :key="o">
                {{ "茅台“震动”市场 " + o }}
              </li>
            </ul>
          </div>
        </div>
        <!-- 股市直播 -->
        <div class="live-broadcast">
          <div class="live-title">
            <text class="live">故事直播</text>
            <el-button class="btn"
              >更多<el-icon><DArrowRight /></el-icon
            ></el-button>
          </div>
          <!-- 直播列表 -->
          <div class="live_list">
            <ul v-for="o in 2" :key="o">
              <li class="list1">
                {{ "午评：沪指0.11%传媒、网络游戏概念大涨 " + o }}
              </li>
              <li class="list2">{{ "三大指数早盘高冲回落" + o }}</li>              
            </ul>         
            
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {
  Search,
  Plus,
  CirclePlus,
  CaretBottom,
  DArrowRight,
} from "@element-plus/icons-vue";
export default {
  name: "aistocks",
  data() {
    return {
      input: "",
      choseshow1: true, //默认
      choseshow2: false,
      table1: true,
      table2: false,
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
    selectShow1() {
      this.choseshow1 = true;
      this.choseshow2 = false;
      this.table1 = true;
      this.table2 = false;
    },
    selectShow2() {
      this.choseshow1 = false;
      this.choseshow2 = true;
      this.table1 = false;
      this.table2 = true;
    },
  },
  components: {
    Search,
    Plus,
    CirclePlus,
    CaretBottom,
    DArrowRight,
  },
};
</script>

<style>
@import url("../assets/Aistocks/css/aistocks.css");
</style>