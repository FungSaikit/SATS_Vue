<template>
  <div class="seller_center">
    <h2>卖家中心</h2>
    <div class="function_tab">
      <el-radio-group v-model="list_type" @change="changeList">
        <el-radio-button label="1">我的交易</el-radio-button>
        <el-radio-button label="0">我的房源</el-radio-button>
      </el-radio-group>
    </div>

    <!-- 我的交易表格 -->
    <el-table v-loading="loading" :data="trade_list" style="width: 100%; text-align: left;" stripe :hidden="list_type == 0">
      <el-table-column prop="title" label="房源标题">
      </el-table-column>
      <el-table-column prop="post_time" label="房源标题">
      </el-table-column>
      <el-table-column prop="agent_name" label="经纪人">
      </el-table-column>
      <el-table-column prop="buyer_name" label="买家">
      </el-table-column>
      <el-table-column prop="status_text" label="状态">
      </el-table-column>
      <el-table-column prop="operate" label="操作">
        <template slot-scope="scope">
          <el-button @click="viewHouse(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="alreadyGetMoney(scope.row)" type="text" size="small" :class="{ hidden: scope.row.status!=4&&scope.row.status!=6 }">确认收款</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 我的房源表格 -->
    <el-table v-loading="loading" :data="on_sale_house" style="width: 100%; text-align: left;" stripe :hidden="list_type == 1">
      <el-table-column prop="post_time" label="发布日期">
      </el-table-column>
      <el-table-column prop="title" label="房源标题">
      </el-table-column>
      <el-table-column prop="price" label="售价">
      </el-table-column>
      <el-table-column prop="operate" label="操作">
        <template slot-scope="scope">
          <el-button @click="viewHouse(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>
<script>
export default {
  name: "seller_center",
  data() {
    return {
      list_type: 1, //0为查看房源，1为查看交易
      on_sale_house: [],
      trade_list: [],
      loading: false
    };
  },
  methods: {
    getHouseList() {
      var that = this;
      that.loading = true;
      this.$ajax
        .get(
          "http://localhost:3333/house/getMyHouse?user=" +
            sessionStorage.getItem("id")
        )
        .then(function(res) {
          that.on_sale_house = res.data;
          that.loading = false;
        });
    },
    getTradeList() {
      var that = this;
      that.loading = true;
      this.$ajax
        .get(
          "http://localhost:3333/house/getMyTrade?user=" +
            sessionStorage.getItem("id")
        )
        .then(function(res) {
          that.loading = false;
          that.trade_list = res.data.slice(0);
          for (var i = 0; i < res.data.length; i++) {
            switch (res.data[i].status) {
              case 0:
                that.trade_list[i].status_text = "订单已关闭";
                break;
              case 1:
                that.trade_list[i].status_text = "等待经纪人接单";
                break;
              case 2:
                that.trade_list[i].status_text = "经纪人已接单";
                break;
              case 3:
                that.trade_list[i].status_text = "已带看房源";
                break;
              case 4:
                that.trade_list[i].status_text = "经纪人正协商交易";
                break;
              case 5:
                that.trade_list[i].status_text = "卖家已收款";
                break;
              case 6:
                that.trade_list[i].status_text = "买家已收楼";
                break;
              case 7:
                that.trade_list[i].status_text = "交易已完成";
                break;
              default:
                that.trade_list[i].status_text = "订单状态未知";
                break;
            }
          }
        });
    },
    alreadyGetMoney(object) {
      var that = this;
      this.$confirm("您确定已经收款了吗？", "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        callback: action => {
          if (action == "confirm") {
            that.$ajax
              .get(
                "http://localhost:3333/house/alreadyGetMoney?o_id=" +
                  object.order_id
              )
              .then(function(res) {
                if (res.data.code == 200) {
                  that.$message("您已成功收款，感谢您的使用！");
                  that.getTradeList();
                }
              });
          }
        }
      });
    },
    viewHouse(object) {
      this.$router.push("/house_details/" + object.house_id);
    },
    changeList () {
      if (this.list_type == 0) {
        this.getHouseList();
      } else {
        this.getTradeList();
      }
    }
  },
  created: function() {
    this.getTradeList();
  }
};
</script>
<style scoped>

h2 {
  text-align: left;
  border-bottom: 1px solid #f6f6f6;
}

.seller_center {
  width: 1000px;
  margin: 20px auto;
}

.function_tab {
  margin: 20px;
}

</style>

