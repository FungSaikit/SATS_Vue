<template>
  <div class="form">
    <h2>立即登录</h2>
    <br>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="电子邮件" prop="email_address">
        <el-input v-model="form.email_address"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="isLoading">{{ isLoading ? '登陆中' : '立即登录' }}</el-button>
        <el-button @click="register">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        email_address: '',
        password: ''
      },
      isLoading: false
    }
  }, 
  methods: {
    onSubmit() {
      this.isLoading = true;
      this.$ajax.post(
        'http://localhost:3333/user/login', this.form).then((res) => {
          console.log(res);
        if (res.data.code == 200) {
          sessionStorage.setItem('id', res.data.id);
          sessionStorage.setItem('nickname', res.data.nickname);
          window.location.href = '/';
        } else {
          this.$alert(res.data.msg, '抱歉', {
          confirmButtonText: '确定',
          callback: action => {
            this.isLoading = false;
          }
        });
        }
      })
    }, 
    register () {
      this.$router.push('/register');
    }
  }
}
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
