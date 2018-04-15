<template>
	<div class="form">
		<h2>请填写预约信息</h2>
		<br>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="您的姓名">
				<el-input v-model="form.buyer_name"></el-input>
			</el-form-item>
			<el-form-item label="电话号码">
				<el-input v-model="form.buyer_phone"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit" :loading="isLoading">{{ isLoading ? '预约中' : '预约该房' }}</el-button>
				<el-button @click="back">返回</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
  name: "BookHouse",
  data() {
    return {
      form: {
				house_id: this.$route.params.id, 
				buyer_name: '',
				buyer_phone: '', 
				buyer_id: sessionStorage.getItem('id')
			}, 
			isLoading: false
    }
	}, 
	methods: {
		onSubmit() {
			var that = this;
			this.isLoading = true;
			this.$ajax.post('http://localhost:3333/house/bookTheHouse', this.form).then(res => {
				if (res.data.code == 200) {
					that.$alert('预定成功，稍后将会有经纪人联系您看房！', '恭喜', {
						confirmButtonText: '确定', 
						callback: action => {
							that.$router.push('/');
						}
					})
				}
			})
		}, 
		back() {
			this.$router.back(-1);
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
