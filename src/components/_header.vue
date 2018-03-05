<template>
  <div class="header">
    <div class="header_inner">
      <div class="header_title">
        <div class="search" :class="{ hidden: this.$route.path!='/' }">
          <el-input v-model="input" placeholder="请输入房屋信息" size="30"></el-input>
        </div>
        <div class="user_info">
          欢迎您,
          <span :class="{ hidden: nickname }">请
            <a href="javascript: void(0)" @click="login">登录</a>
          </span>
          <span :class="{ hidden: !nickname }">{{ nickname }}</span>。
          <a v-if="nickname" href="javascript: void(0)" @click="logout">注销</a>
        </div>
        <div class="website_name" @click="toIndex">二手房交易系统</div>
        <div class="website_engname" @click="toIndex">Secondhand Apartment Trading System</div>
      </div>
    </div>
    <el-menu :default-active="activeIndex" class="el-menu" mode="horizontal" router>
      <el-menu-item index="/">主页</el-menu-item>
      <el-submenu index="/house_list">
        <template slot="title">我在找房</template>
        <el-menu-item index="/house_list/1">我要买房</el-menu-item>
        <el-menu-item index="/house_list/0">我要租房</el-menu-item>
      </el-submenu>
      <el-submenu index="/post_house">
        <template slot="title">我有房子</template>
        <el-menu-item index="/post_house/1">我要出售</el-menu-item>
        <el-menu-item index="/post_house/0">我要出租</el-menu-item>
      </el-submenu>
      <el-menu-item index="/customer_center">买家中心</el-menu-item>
      <el-menu-item index="/seller_center">卖家中心</el-menu-item>
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
      <el-menu-item :index="agentCenterIndex">经纪人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      activeIndex: this.$route.path,
      nickname: sessionStorage.getItem("nickname"),
      input: "", 
      agentCenterIndex: sessionStorage.getItem('agent_id') ? '/agent_center' : '/agent_login'
    };
  },
  methods: {
    login() {
      this.$router.push("/login");
    },
    logout() {
      this.$confirm("您确定要注销登录吗？", "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        callback: action => {
          sessionStorage.clear();
          window.location.href = "/";
        }
      });
    },
    toIndex() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.header {
  width: 100%;
  height: auto;
  color: #fff;
  border-bottom: 2px solid #e6e6e6;
}

.el-menu--horizontal {
  border: none;
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
  position: relative;
}

.website_name {
  font-size: 30px;
  line-height: 60px;
  margin-left: 20px;
  cursor: pointer;
}

.website_engname {
  margin-left: 20px;
  cursor: pointer;
}

.el-menu {
  width: 1000px;
  margin: auto;
}

.search {
  position: absolute;
  right: 0;
  bottom: 0;
  height: 30px;
}

.el-input_inner {
  height: 30px !important;
}

.user_info {
  float: right;
  margin-top: 5px;
}

.user_info a {
  font-size: 16px;
  color: white;
}
</style>

