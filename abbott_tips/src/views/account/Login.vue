<template>
  <!--背景图-->
  <div class="note" :style="note">
    <!--login框，表单+tab标签页的组合-->
    <div class="loginFrame">
      <el-form ref="AccountForm" :model="account" :rules="rules" label-position="left" label-width="0px" class="login-container">
        <el-form-item prop="username">
          <el-input type="text" v-model="account.username" auto-complete="off" placeholder="请输入您的账号" />
        </el-form-item> 
        <el-form-item prop="password">
          <el-input type="password" v-model="account.password" auto-complete="off" placeholder="请输入密码" />
        </el-form-item>
        <div class="formButton">
          <el-form-item style="width:100%;">
            <el-button type="primary" style="width:100%;" @click="handleLoginClick" >登录</el-button>
          </el-form-item>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccountLogin",
  data() {
    return {
      logining: false,
      note: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        backgroundImage: "url(" + require("@/assets/login-bg.jpg") + ")",
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat"
      },
      account: {
        username: "",
        password: ""
      },
      rules: {
        username: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleLoginClick() {
      console.log("handleLoginClick");
      var vm = this;
      var account = vm.account;
      if (account.username === "root" && account.password === "root") {
        // var message = "<strong>登录成功！<i>" + account.username + "</i> 欢迎您！</strong>";
        vm.$message({
          dangerouslyUseHTMLString: true,
          message: "登录成功！",
          onClose() {
            localStorage.JWT_TOKEN = "AAA";
            vm.$router.replace("/");
          }
        });
      }
    }
  }
};
</script>

<style scoped>
body {
  width: "100%";
  height: "100%";
  background-image: "url(" + require("@/assets/login-bg.jpg") + ")";
  background-size: 100%;
  background-repeat: no-repeat;
}

.login-container {
  -webkit-border-radius: 5px;
  border-radius: 15px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
</style>
