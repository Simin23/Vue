<template>
  <div class="bg">
    <div class="loginHeader"></div>
    <van-cell-group style=" background: none;margin-top:50px;padding:0 20px">
      <van-field
        style=" background: none;color:white"
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"
        @blur="user"
      />
      <span class="ss" v-text="tips1" :style="{color}"></span>
      <van-field
        style=" background: none;color:white"
        v-model="password"
        type="password"
        label="密码"
        placeholder="6-20个字符，字母、数字"
        required
        @blur="pwd"
      />
      <span class="ss" v-text="tips2" :style="{color}"></span>
      <van-field
        style=" background: none;color:white"
        v-model="passwd"
        type="password"
        label="确认密码"
        placeholder="请再次输入密码"
        required
        @blur="pawd"
      />
      <span class="ss" v-text="tips3" :style="{color}"></span>
    </van-cell-group>
    <div class="btn">
      <span class="ss" v-text="tips4" :style="{color}"></span>
      <a id="loginBtn" class="loginBtn" href="javascript:void(0)" @click="login">登录</a>
    </div>
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {
      username: "",
      password: "",
      passwd: "",
      tips1: "",
      tips2: "",
      tips3: "",
      tips4: "",
      color: "red",
      uisok: false,
      tisok: false,
      pisok: false
    };
  },
  methods: {
    user: function() {
      console.log(this.username);
      let _username = this.username;
      if (_username == "") {
        this.tips1 = "用户名不能为空";
        this.uisok = false;
      } else {
        this.$axios
          .post("http://localhost:3000/sign/sign/" + _username)
          .then(({ data }) => {
            console.log(data.length);
            if (data.length == 0) {
              this.tips1 = "没有该用户";
              this.uisok = false;
            } else {
              this.tips1 = "";
              this.uisok = true;
            }
          });
      }
    },
    pwd: function() {
      if (this.password == "") {
        this.tips2 = "密码不能为空";
        this.pisok = false;
      } else {
        var myreg = /^(\w){6,20}$/;
        if (!myreg.test(this.password)) {
          this.tips2 = "密码格式错误";
          this.pisok = false;
        } else {
          this.tips2 = "";
          this.pisok = true;
        }
      }
    },
    pawd: function() {
      if (this.passwd == "") {
        this.tips3 = "确认密码不能为空";
        this.tisok = false;
      } else {
        if (this.passwd != this.password) {
          this.tips3 = "两次输入的密码不一致";
          this.tisok = false;
        } else {
          this.tips3 = "";
          this.tisok = true;
        }
      }
    },
    login: function() {
      if (this.uisok && this.tisok && this.pisok) {
        let username = this.username;
        let password = this.password;
        this.$axios
          .post(
            "http://localhost:3000/sign/login",
            this.$qs.stringify({ username, password })
          )
          .then(res => {
            let data = res.data.length;
            if (data == 0) {
              this.tips4 = "用户名或密码输入错误";
            } else {
              this.tips4 = "";
              let cookie = Cookies.set("username", username);
            }
          });
      }
    }
  }
};
</script>
<style>
.bg {
  background: url(http://3g.baobeigezi.com/imgs/login/loginBg.png) no-repeat;
  border-top: 1px solid transparent;
  background-size: cover;
  position: relative;
  height: 568px;
  width: 100%;
}
.van-field__control {
  color: white !important;
}
.loginBtn {
  font-family: PingFangSC-Regular;
  background: #ffffff;
  border-radius: 10px;
  display: inline-block;
  width: 100%;
  height: 38px;
  line-height: 38px;
  font-size: 13px;
  color: #333333;
  letter-spacing: 0;
  text-align: center;
  margin-top: 31px;
  vertical-align: top;
}
.btn {
  padding: 0 40px;
}
.loginHeader {
  background: url(http://3g.baobeigezi.com/imgs/login/logo.png) no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
  width: 107px;
  height: 38px;
  margin: 82px auto 0;
  /* color: white; */
}
.ss {
  margin-left: 102px;
}
</style>