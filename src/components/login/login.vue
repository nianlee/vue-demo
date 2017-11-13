<template>
  <div class="con">
    <h1>{{ msg }}</h1>
    <div class="login-form">
      <div class="form-group">
        <label for="username">用户名</label>  
        <input v-model="userName" id="username" name="username" type="text">
      </div>
      <div class="form-group">
        <label for="pwd">密码</label>  
        <input v-model="pwd" id="pwd" name="pwd" type="password">
      </div>
      <div class="from-group">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      msg: '用户登录',
      userName: '',
      pwd: '',
    };
  },
  methods: {
    login() {
      this.$ajax({
        url: '/api/user/login',
        method: 'post',
        data: {
          userName: this.userName,
          pwd: this.pwd,
        },
      })
        .then(data => {
          if (data.success) {
            console.log('login success');
          } else {
            console.log('login failed');
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
  }
};
</script>

<style scoped>
</style>
