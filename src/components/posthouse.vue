<template>
	<div class="form">
		<h2>发布房源</h2>
		<br>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="租售类型">
				<el-radio-group v-model="form.is_for_sell" style="width: 100%;">
					<el-radio label="1">出售</el-radio>
					<el-radio label="0">出租</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="房屋标题" prop="title">
				<el-input v-model="form.title"></el-input>
			</el-form-item>
			<el-form-item label="房屋描述" prop="description">
				<el-input v-model="form.description"></el-input>
			</el-form-item>
			<el-form-item label="小区名称" prop="properties">
				<el-input v-model="form.properties"></el-input>
			</el-form-item>
			<el-form-item label="总价格" prop="price">
				<el-input v-model="form.price" @change="countUnitPrice"></el-input>
			</el-form-item>
			<el-form-item label="建筑面积" prop="area">
				<el-input v-model="form.area" @change="countUnitPrice"></el-input>
			</el-form-item>
			<el-form-item label="套内面积" prop="inside_area">
				<el-input v-model="form.inside_area"></el-input>
			</el-form-item>
			<el-form-item label="单价" prop="unit_price">
				<el-input v-model="form.unit_price" disabled></el-input>
			</el-form-item>
			<el-form-item label="房间数量" prop="room_num">
				<el-input v-model="form.room_num"></el-input>
			</el-form-item>
			<el-form-item label="厅数量" prop="livingroom_num">
				<el-input v-model="form.livingroom_num"></el-input>
			</el-form-item>
			<el-form-item label="厨房数量" prop="kitchen_num">
				<el-input v-model="form.kitchen_num"></el-input>
			</el-form-item>
			<el-form-item label="卫生间数" prop="bathroom_num">
				<el-input v-model="form.bathroom_num"></el-input>
			</el-form-item>
			<el-form-item label="总楼层数" prop="total_floor">
				<el-input v-model="form.total_floor"></el-input>
			</el-form-item>
			<el-form-item label="所在楼层" prop="floor">
				<el-input v-model="form.floor"></el-input>
			</el-form-item>
			<el-form-item label="建筑年份" prop="description">
				<el-input v-model="form.build_year"></el-input>
			</el-form-item>
			<el-form-item label="市、区(县)" prop="district">
				<el-input v-model="form.district"></el-input>
			</el-form-item>
			<el-form-item label="可预约的看房时间" prop="view_time">
				<el-input v-model="form.view_time"></el-input>
			</el-form-item>
			<el-form-item label="建筑结构" prop="construction_type">
				<el-select v-model="form.construction_type" style="width: 100%" placeholder="请选择建筑结构">
					<el-option label="砌体结构" value="砌体结构"></el-option>
					<el-option label="钢筋混凝土结构" value="钢筋混凝土结构"></el-option>
					<el-option label="钢结构" value="钢结构"></el-option>
					<el-option label="木结构" value="木结构"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="房屋朝向" prop="direction">
				<el-input v-model="form.direction"></el-input>
			</el-form-item>
			<el-form-item label="建筑类型" prop="type">
				<el-select v-model="form.type" style="width: 100%" placeholder="请选择建筑类型">
					<el-option label="塔楼" value="塔楼"></el-option>
					<el-option label="板楼" value="板楼"></el-option>
					<el-option label="板塔结合" value="板塔结合"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="装修情况" prop="decoration">
				<el-select v-model="form.decoration" style="width: 100%" placeholder="请选择装修情况">
					<el-option label="精装" value="精装"></el-option>
					<el-option label="简装" value="简装"></el-option>
					<el-option label="毛胚房" value="毛胚房"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="电梯数量" prop="lift">
				<el-input v-model="form.lift"></el-input>
			</el-form-item>
			<el-form-item label="每层房数" prop="house_per_floor">
				<el-input v-model="form.house_per_floor"></el-input>
			</el-form-item>
			<el-form-item label="上次交易" prop="last_trade">
				<el-input v-model="form.last_trade"></el-input>
			</el-form-item>
			<el-form-item label="交易权属" prop="trading_right">
				<el-input v-model="form.trading_right"></el-input>
			</el-form-item>
			<el-form-item label="房屋用途" prop="house_usage">
				<el-select v-model="form.house_usage" style="width: 100%" placeholder="请选择房屋用途">
					<el-option label="普通住宅" value="1"></el-option>
					<el-option label="别墅" value="2"></el-option>
					<el-option label="商用" value="3"></el-option>
					<el-option label="商住两用" value="4"></el-option>
					<el-option label="四合院" value="5"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="产权年限" prop="age_limit">
				<el-input v-model="form.age_limit"></el-input>
			</el-form-item>
			<el-form-item label="房屋年龄" prop="house_age">
				<el-input v-model="form.house_age"></el-input>
			</el-form-item>
			<el-form-item label="抵押信息" prop="mortgage">
				<el-input v-model="form.mortgage"></el-input>
			</el-form-item>
			<el-form-item label="产权所属" prop="house_right">
				<el-input v-model="form.house_right"></el-input>
			</el-form-item>
			<el-form-item label="房屋标签" prop="house_label">
				<el-input v-model="form.house_label"></el-input>
			</el-form-item>
			<el-form-item label="装修描述" prop="decoration_desc">
				<el-input v-model="form.decoration_desc"></el-input>
			</el-form-item>
			<el-form-item label="主要卖点" prop="main_sellpoint">
				<el-input v-model="form.main_sellpoint"></el-input>
			</el-form-item>
			<el-form-item label="周边配套" prop="facility">
				<el-input v-model="form.facility"></el-input>
			</el-form-item>
			<el-form-item label="交通出行" prop="traffic">
				<el-input v-model="form.traffic"></el-input>
			</el-form-item>
			<el-form-item label="图片上传">
				<el-upload class="upload-demo" action="http://localhost:3333/upload/uploadHouseImage" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="form.fileList" :on-success="uploadSuccess" list-type="picture">
					<el-button size="small" type="primary">点击上传</el-button>
					<div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
				</el-upload>
			</el-form-item>
			<h2>请填写您的联系方式</h2>
			<el-form-item label="真实姓名" prop="user_name">
				<el-input v-model="form.user_name"></el-input>
			</el-form-item>
			<el-form-item label="联系电话" prop="user_phone">
				<el-input v-model="form.user_phone"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit" :loading="isLoading">{{ isLoading ? '发布中' : '发布房源' }}</el-button>
				<el-button @click="back">返回</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        is_for_sell: this.$route.params.ifs,
        user: sessionStorage.getItem("id"),
        title: "",
        description: "",
        price: "",
        unit_price: "",
        room_num: "",
        livingroom_num: "",
        kitchen_num: "",
        bathroom_num: "",
        total_floor: "",
        floor: "",
        build_year: "",
        properties: "",
        district: "",
        view_time: "",
        area: "",
        inside_area: "",
        direction: "",
        lift: "",
        house_per_floor: "",
        last_trade: "",
        trading_right: "",
        house_age: "",
        age_limit: "",
        mortgage: "",
        house_right: "",
        house_label: "",
        decoration_desc: "",
        main_sellpoint: "",
        facility: "",
        traffic: "",
        house_usage: "",
        fileList: [],
        user_name: "",
        user_phone: ""
      },
      isLoading: false,
      dialogImageUrl: "",
      dialogVisible: false
    };
  },
  methods: {
    onSubmit() {
      var that = this;
      this.isLoading = true;
      this.$ajax
        .post("http://localhost:3333/house/postHouse", this.form)
        .then(function(res) {
          if (res.data.code == 200) {
            that.$message("发布成功");
            setTimeout(function() {
              that.$router.push("/");
            }, 3000);
          } else {
            that.$message("发布失败，请重试！");
            that.isLoading = false;
          }
        });
    },
    back() {
      this.$router.push("/");
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    uploadSuccess(res, file, fileList) {
      this.form.fileList.push(res.url);
    },
    countUnitPrice() {
      if (this.form.price && this.form.area) {
        this.form.unit_price =
          parseInt(this.form.price) / parseInt(this.form.area);
      }
    }
  }
};
</script>
<style scoped>
h2 {
  text-align: left;
}

.form {
  width: 350px;
  margin: 20px auto;
}
</style>


