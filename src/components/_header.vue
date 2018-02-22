<template>
  <div class="header">
      <div class="header_inner">
        <div class="search" :class="{ hidden: this.$route.path!='/index' }">
          <el-input v-model="input" placeholder="请输入房屋信息" size="30" ></el-input>
        </div>
        <div class="header_title">
          <div class="website_name">二手房交易系统</div>
          <div class="website_engname">Secondhand Apartment Trading System</div>
        </div>
      </div>
      <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" @select="handleSelect" router="true">
        <el-menu-item index="/">主页</el-menu-item>
        <el-submenu index="/house_list/0">
            <template slot="title">我在找房</template>
            <el-menu-item index="/house_list/0">我要买房</el-menu-item>
            <el-menu-item index="/house_list/1">我要租房</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
            <template slot="title">我有房子</template>
            <el-menu-item index="2-1">我要出售</el-menu-item>
            <el-menu-item index="2-2">我要出租</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
            <template slot="title">买家中心</template>
            <el-menu-item index="3-1">预约看房</el-menu-item>
            <el-menu-item index="3-2">我的交易</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
            <template slot="title">卖家中心</template>
            <el-menu-item index="3-1">我的房源</el-menu-item>
            <el-menu-item index="3-2">我的订单</el-menu-item>
        </el-submenu>
        <el-submenu index="5">
            <template slot="title">个人中心</template>
            <el-menu-item index="5-1">房屋意向</el-menu-item>
            <el-menu-item index="5-2">修改资料</el-menu-item>
        </el-submenu>
         <el-submenu index="6">
            <template slot="title">客户服务</template>
            <el-menu-item index="6-1">在线客服</el-menu-item>
            <el-menu-item index="6-2">问题反馈</el-menu-item>
        </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: this.$route.path
    };
  }
};
</script>

<style scoped>

.header {
  width: 100%;
  height: auto;
  color: #fff;
}

.header_inner {
  width: 100%;
  min-width: 1000px;
  height: 100px;
  margin: auto;
  background-color: #46a0fc;
  overflow: hidden;
}

.header_title {
  width: 1000px;
  margin: auto;
}

.website_name {
  font-size: 30px;
  line-height: 60px;
  margin-left: 20px;
}

.website_engname {
  margin-left: 20px;
}

.el-menu {
  width: 1000px;
  margin: auto;
}

.search {
  float: right;
  margin: 50px 15px;
  height: 30px;
}

.el-input_inner {
  height: 30px !important;
}
</style>

