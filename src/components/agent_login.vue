<template>
	<div class="form">
		<h2>经纪人登录</h2>
		<br>
		<el-form ref="form" :model="form" label-width="80px">
			<el-form-item label="用户名" prop="email_address">
				<el-input v-model="form.username"></el-input>
			</el-form-item>
			<el-form-item label="密码" prop="password">
				<el-input type="password" v-model="form.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="onSubmit" :loading="isLoading">{{ isLoading ? '登陆中' : '立即登录' }}</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>
<script>
export default {
  name: "AgentLogin",
  data() {
    return {
      form: {
        username: "",
        password: ""
			}, 
			isLoading: false
    };
	},
	methods: {
		onSubmit() {
			var that = this;
			this.isLoading = true;
      this.$ajax.post(
        'http://localhost:3333/user/agent_login', this.form).then((res) => {
          console.log(res);
        if (res.data.code == 200) {
          sessionStorage.setItem('agent_id', res.data.agent_id);
          sessionStorage.setItem('agent_name', res.data.agent_name);
          window.location.href = '/#/agent_center';
        } else {
          this.$alert(res.data.msg, '抱歉', {
          confirmButtonText: '确定',
          callback: action => {
						if (action = 'confirm') {
							that.isLoading = false;
						}
          }
        });
        }
      })
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
