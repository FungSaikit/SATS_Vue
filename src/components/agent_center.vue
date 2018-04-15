<template>
	<div class="form">
		<div class="seller_center">
			<h2>您好，{{ agent_name }}。</h2>
			<div class="function_tab">
				<el-radio-group v-model="list_type" @change="getList">
					<el-radio-button label="1">我的订单</el-radio-button>
					<el-radio-button label="2">待带看</el-radio-button>
					<el-radio-button label="3">待评价</el-radio-button>
					<el-radio-button label="4">待协商交易</el-radio-button>
					<el-radio-button label="5">已完成</el-radio-button>
					<el-radio-button label="0">待接订单</el-radio-button>
				</el-radio-group>
			</div>

			<!-- 我的订单 -->
			<el-table v-loading="loading" :data="orderList" style="width: 100%; text-align: left;" stripe :hidden="list_type == 0" @cellclick="viewHouse">
				<el-table-column prop="post_time" label="发布日期">
				</el-table-column>
				<el-table-column prop="title" label="房源标题">
				</el-table-column>
				<el-table-column prop="price" label="售价">
				</el-table-column>
				<el-table-column prop="buyer_name" label="买家">
				</el-table-column>
				<el-table-column prop="buyer_phone" label="买家联系电话">
				</el-table-column>
				<el-table-column prop="user_name" label="卖家">
				</el-table-column>
				<el-table-column prop="user_phone" label="卖家联系电话">
				</el-table-column>
				<el-table-column prop="status_text" label="订单状态">
				</el-table-column>
				<el-table-column prop="operate" label="操作">
					<template slot-scope="scope">
						<el-button @click="viewHouse(scope.row)" type="text" size="small">查看</el-button>
						<el-button @click="alreadyView(scope.row)" type="text" size="small" :class="{ hidden: scope.row.status != 2 }">已带看</el-button>
						<el-button @click="feedbackHouse(scope.row)" type="text" size="small" :class="{ hidden: scope.row.status != 3 }">评价</el-button>
					</template>
				</el-table-column>
			</el-table>

			<!-- 待接订单表格 -->
			<el-table v-loading="loading" :data="orderList" style="width: 100%; text-align: left;" stripe :hidden="list_type != 0" @cellclick="viewHouse">
				<el-table-column prop="title" label="房源标题">
				</el-table-column>
				<el-table-column prop="buyer_name" label="买家">
				</el-table-column>
				<el-table-column prop="create_time" label="创建时间">
				</el-table-column>
				<el-table-column prop="operate" label="操作">
					<template slot-scope="scope">
						<el-button @click="viewHouse(scope.row)" type="text" size="small">查看</el-button>
						<el-button @click="getOrder(scope.row)" type="text" size="small" :class="{ hidden: scope.row.status != 1 }">接单</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</div>
</template>
<script>
export default {
  name: "AgentCenter",
  data() {
    return {
      agent_name: sessionStorage.getItem("agent_name"),
      list_type: 1,
      loading: false,
      orderList: []
    };
  },
  methods: {
    getList() {
      var that = this;
      var id = sessionStorage.getItem("agent_id");
      var url =
        "http://localhost:3333/house/agentGetOrderList?a_id=" +
        id +
        "&type=" +
        this.list_type;
      this.$ajax.get(url).then(res => {
        that.orderList = res.data;
        for (var i = 0; i < res.data.length; i++) {
          switch (res.data[i].status) {
            case 0:
              that.orderList[i].status_text = "订单已关闭";
              break;
            case 1:
              that.orderList[i].status_text = "等待经纪人接单";
              break;
            case 2:
              that.orderList[i].status_text = "您已接单";
              break;
            case 3:
              that.orderList[i].status_text = "已带看房源";
              break;
            case 4:
              that.orderList[i].status_text = "请协商交易";
              break;
            case 5:
              that.orderList[i].status_text = "卖家已收款";
              break;
            case 6:
              that.orderList[i].status_text = "买家已收楼";
              break;
            case 7:
              that.orderList[i].status_text = "交易已完成";
              break;
            default:
              that.orderList[i].status_text = "订单状态未知";
              break;
          }
        }
      });
		},
		//查看房子详情
		viewHouse(object) {
      this.$router.push("/house_details/" + object.house_id);
    },
    //接单
    getOrder(object) {
      var that = this;
      this.$confirm("确定接手本订单吗（" + object.title + "）？", "确认", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(action => {
        if (action == "confirm") {
          that.$ajax
            .get(
              "http://localhost:3333/house/getOrder?order=" +
                object.order_id +
                "&agent_id=" +
                sessionStorage.getItem("agent_id") +
                "&agent_name=" +
                that.agent_name
            )
            .then(res => {
              if (res.data.code == 200) {
                this.$message("操作成功！");
                that.getList();
              } else {
                this.$message("操作失败，请稍后重试！");
              }
            });
        }
      });
    },
    //将订单状态改为已经带看房源
    alreadyView(object) {
      var that = this;
      this.$confirm("已经带看了此买家（" + object.buyer_name + "）？", "确认", {
        confirmButtonText: "我已带看",
        cancelButtonText: "还没带看"
      }).then(action => {
        if (action == "confirm") {
          that.$ajax
            .get(
              "http://localhost:3333/house/viewHouse?o_id=" + object.order_id
            )
            .then(res => {
              if (res.data.code == 200) {
                this.$message("操作成功！");
                that.getList();
              } else {
                this.$message("操作失败，请稍后重试！");
              }
            });
        }
      });
    },
    //评论房子
    feedbackHouse(object) {
      var that = this;
      var form = {
        house_id: object.house_id,
        agent_id: sessionStorage.getItem("agent_id"),
        agent_name: sessionStorage.getItem("agent_name"),
        content: ""
      };
      this.$prompt("请输入评价内容", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      }).then(({ value }) => {
        form.content = value;
        this.$ajax
          .post("http://localhost:3333/house/feedback", form)
          .then(res => {
            if (res.data.code == 200) {
              that.$alert("评论成功！", "提示", {
                confirmButtonText: "确定",
                callback: action => {
                  that.getList();
                }
              });
            } else {
              that.$alert("评论失败，请稍后重试", "抱歉", {
                confirmButtonText: "确定",
                callback: action => {
                  that.getList();
                }
              });
            }
          });
      });
    }
  },
  created() {
    this.getList();
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
