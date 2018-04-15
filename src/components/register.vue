<template>
  <div class="form">
    <h2>立即注册</h2>
    <br>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="电子邮件" prop="email_address">
        <el-input v-model="form.email_address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button style="float: left;" :disabled="second ? true : false" @click="getIdentifyingCode">{{ second ? '正在获取' : '获取验证码' }}{{ second ? '(' : '' }}{{ second ? second : '' }}{{ second ? ')' : '' }}</el-button>
      </el-form-item>
      <el-form-item label="验证码" prop="identifying_code">
        <el-input v-model="form.identifying_code"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="repassword">
        <el-input type="password" v-model="form.repassword"></el-input>
      </el-form-item>
      <el-form-item label="您的昵称" prop="nickname">
        <el-input v-model="form.nickname"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" :loading="isLoading">{{ isLoading ? '创建中' : '立即创建' }}</el-button>
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
        email_address: "",
        identifying_code: "",
        password: "",
        repassword: "",
        nickname: ""
      },
      second: 0,
      isLoading: false
    };
  },
  methods: {
    getIdentifyingCode() {
      if (this.form.email_address.length != 0) {
        this.second = 60;
        this.minusOneSecond();
        this.$ajax
          .get(
            "http://localhost:3333/user/getRegisterCode?email_address=" +
              this.form.email_address
          )
          .then(function(res) {
            res.data.post_time = res.data.post_time.slice(0, 10);
            res.data.last_trade = res.data.last_trade.slice(0, 10);
            that.house = res.data;
          });
      }
    },
    onSubmit() {
      this.isLoading = true;
      this.$ajax
        .post("http://localhost:3333/user/addUser", this.form)
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            this.$alert("注册成功！", "恭喜您", {
              confirmButtonText: "确定",
              callback: action => {
                this.$router.push("/login");
              }
            });
          } else {
            this.$alert(res.data.msg, "抱歉", {
              confirmButtonText: "确定",
              callback: action => {
                this.isLoading = false;
              }
            });
          }
        });
    },
    minusOneSecond() {
      if (this.second > 0) {
        this.second--;
      } else {
        return 0;
      }
      var that = this;
      var timeout = setTimeout(function() {
        that.minusOneSecond();
        clearTimeout(timeout);
      }, 1000);
    },
    back () {
      this.$router.push('/login')
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
