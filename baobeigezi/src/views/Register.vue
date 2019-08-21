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
        v-model="tel"
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
        @blur="checktel"
      />
      <span class="ss" v-text="tips2" :style="{color}"></span>
      <van-field
        style=" background: none;color:white"
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required
        @blur="pwd"
      />
      <span class="ss" v-text="tips3" :style="{color}"></span>
    </van-cell-group>
    <div class="btn">
      <a id="loginBtn" class="loginBtn" href="javascript:void(0)" @click="register">注册</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      tel: "",
      tips1: "",
      tips2: "",
      tips3: "",
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
        this.tips1 = "请输入用户名";
        this.uisok = false;
      } else {
        this.$axios
          .post("http://localhost:3000/sign/sign/" + _username)
          .then(({ data }) => {
            console.log(data);
            if (data.length == 0) {
              this.tips1 = "该用户可以注册";
              this.color = "#58bc58";
              this.uisok = true;
            } else {
              this.tips1 = "该用户已存在";
              this.uisok = false;
              this.color = "red";
            }
          });
      }
    },
    checktel: function() {
      if (this.tel == "") {
        this.tips2 = "请输入电话号码";
        this.tisok = false;
      } else {
        var myreg = /^0?(13[0-9]|14[5-9]|15[012356789]|166|17[0-8]|18[0-9]|19[8-9])[0-9]{8}$/;
        if (!myreg.test(this.tel)) {
          this.tips2 = "手机号格式错误";
          this.tisok = false;
        } else {
          this.tisok = true;
        }
      }
    },
    pwd: function() {
      if (this.password == "") {
        this.tips3 = "请输入密码";
        this.pisok = false;
      } else {
        var myreg = /^(\w){6,20}$/;
        if (!myreg.test(this.password)) {
          this.tips3 = "密码格式错误";
          this.pisok = false;
        } else {
          this.pisok = true;
        }
      }
    },
    register: function() {
      if (this.uisok && this.tisok && this.pisok) {
        // console.log(2222)
        // alert('注册成功');
        let username = this.username;
        let tel = this.tel;
        let password = this.password;
        this.$axios
          .post(
            "http://localhost:3000/sign/check",
            this.$qs.stringify({ username, tel, password })
          )
          .then(res => {
            console.log(res);
            this.$router.push({
              name: "login"
            });
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