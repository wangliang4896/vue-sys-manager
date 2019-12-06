<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-title">后台管理系统</div>
      <el-form
        ref="loginForm"
        :model="loginForm"
        :rules="rules"
        auto-complete="on"
        label-position="left"
        class="login-form"
      >
        <el-form-item prop="username">
          <el-input
            prefix-icon="el-icon-s-custom"
            v-model="loginForm.username"
            placeholder="用户名"
            name="username"
            type="text"
            tabindex="1"
            auto-complete="off"
          />
        </el-form-item>

        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            type="password"
            v-model="loginForm.password"
            placeholder="密码"
            name="password"
            tabindex="2"
            auto-complete="off"
            @keyup.enter.native="submitForm()"
          />
        </el-form-item>
        <div class="login-btn">
          <el-button :loading="loading" type="primary" @click="submitForm()">登录</el-button>
        </div>
        <p class="login-tips">Tips : 一条小尾巴。。。</p>
      </el-form>
    </div>
  </div>
</template>

<script>
import { vuetest } from '@/api/index'

    var validateUsername = (rule, value, callback) => {
        console.log(value);
        if (value == undefined || value === "") {
            callback(new Error("请输入用户名"));
        } else {
            callback();
        }
    };
    var validatePassword = (rule, value, callback) => {
        if (value == undefined || value === "") {
            callback(new Error("请输入密码"));
        } else {
            callback();
        }
    };

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "111111"
      },
      rules: {
        username: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, trigger: "blur", validator: validatePassword }
        ]
      },
      loading: false
    };
  },
  methods: {
    submitForm() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true;
          // 方法后台验证登录信息，验证成功后
          vuetest().then(res => {
            console.log("===============vue test===========");
            console.log(res);
            console.log(res.data.status);
            console.log(res.data.token);
            
            var tk = res.data.token;
            this.$store.dispatch("user/login", this.loginForm).then(() => {
              this.$store.dispatch("user/setTokenStore", tk);
            // 信息成功存储在vuex后跳转页面
            this.$router.push("/home");
            this.loading = false;
          });
            // this.$router.push("/home");
            // this.loading = false;
          }).catch(error => {
            console.log("===============vue test error===========");
            console.log(error);
          })
          // 将用户信息报存在vuex中
          // this.$store.dispatch("user/login", this.loginForm).then(() => {
          //   // 信息成功存储在vuex后跳转页面
          //   this.$router.push("/home");
          //   this.loading = false;
          // });
        //this.$router.push("/home");
        //localStorage.setItem('ms_username', this.loginForm.username);
        } else {
          this.$message.error("登录异常");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-page {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/bg04.jpg);
  background-size: 100%;
}
.login-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.login-container {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.login-container .error {
  color: red;
  text-align: left;
  margin: 5px auto;
  font-size: 12px;
  padding-left: 30px;
  height: 20px;
}
.login-form {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}
</style>