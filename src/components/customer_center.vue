<template>
	<div class="seller_center">
		<h2>买家中心</h2>

		<!-- 我的订单表格 -->
		<el-table v-loading="loading" :data="order_list" style="width: 100%; text-align: left;" stripe>
			<el-table-column prop="title" label="房源标题">
			</el-table-column>
			<el-table-column prop="create_time" label="预约时间">
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
					<el-button @click="wantHouse(scope.row)" type="text" size="small" :class="{ hidden: scope.row.status!=3 }">下订房源</el-button>
					<el-button @click="alreadyGetHouse(scope.row)" type="text" size="small" :class="{ hidden: scope.row.status!=4&&scope.row.status!=5 }">确认收楼</el-button>
					<el-button @click="cancelOrder(scope.row)" type="text" size="small" :class="{ hidden: scope.row.status==0 }">取消订单</el-button>
				</template>
			</el-table-column>
		</el-table>

	</div>
</template>
<script>
export default {
  name: "customer_center",
  data() {
    return {
      list_type: 0, //0为查看房源，1为查看交易
      order_list: [],
      loading: false
    };
  },
  methods: {
    getOrderList() {
      var that = this;
      that.loading = true;
      this.$ajax
        .get(
          "http://localhost:3333/house/getMyOrder?user=" +
            sessionStorage.getItem("id")
        )
        .then(function(res) {
          that.loading = false;
          that.order_list = res.data.slice(0);
          for (var i = 0; i < res.data.length; i++) {
            switch (res.data[i].status) {
              case 0:
                that.order_list[i].status_text = "订单已关闭";
                break;
              case 1:
                that.order_list[i].status_text = "等待经纪人接单";
                break;
              case 2:
                that.order_list[i].status_text = "经纪人已接单";
                break;
              case 3:
                that.order_list[i].status_text = "买家已看房";
                break;
              case 4:
                that.order_list[i].status_text = "经纪人正协商交易";
                break;
              case 5:
                that.order_list[i].status_text = "卖家已收款";
                break;
              case 6:
                that.order_list[i].status_text = "买家已收楼";
                break;
              case 7:
                that.order_list[i].status_text = "交易已完成";
                break;
              default:
                that.order_list[i].status_text = "订单状态未知";
                break;
            }
          }
        });
    },
    viewHouse(object, col) {
			this.$router.push("/house_details/" + object.house_id);
    },
    wantHouse(object) {
			//下定房源
      var that = this;
      this.$confirm(
        "房源: " + object.title + "，价格：" + object.price / 10000 + "万。",
        "您确定下订本房源吗？",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          callback: action => {
            if (action == "confirm") {
              that.$ajax
                .get(
                  "http://localhost:3333/house/orderHouse?o_id=" +
                    object.order_id
                )
                .then(function(res) {
                  if (res.data.code == 200) {
                    that.$message(
                      "您已成功下订本房源，稍后经纪人将为您安排交易，谢谢！"
                    );
                    that.getOrderList();
                  }
                });
            }
          }
        }
      );
    },
    alreadyGetHouse(object) {
      var that = this;
      this.$confirm("您确定已经收楼了吗？", "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        callback: action => {
          if (action == "confirm") {
            that.$ajax
              .get(
                "http://localhost:3333/house/alreadyGetHouse?o_id=" +
                  object.order_id
              )
              .then(function(res) {
                if (res.data.code == 200) {
                  that.$message("您已成功收楼，感谢您的使用！");
                  that.getOrderList();
                }
              });
          }
        }
      });
    },
    cancelOrder(object) {
      var that = this;
      this.$confirm("您确定要取消本订单吗？", "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        callback: action => {
          /* this.$alert('您已取消本订单', '成功', {
              confirmButtonText: "确定"
          }) */
          if (action == "confirm") {
            that.$ajax
              .get(
                "http://localhost:3333/house/cancelOrder?o_id=" +
                  object.order_id
              )
              .then(res => {
                if (res.data.code == 200) {
                  that.$message("您已成功取消本订单，期待您的再次使用！");
                  that.getOrderList();
                } else {
                  that.$message("订单取消失败，请稍后重试！");
                  that.getOrderList();
                }
              });
          }
        }
      });
    }
  },
  created: function() {
    this.getOrderList();
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

