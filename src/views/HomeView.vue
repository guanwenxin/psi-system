<template>
  <!-- 0.v-bind -->
  <div class="page">
    <div class="bg-img">
      <img src="../assets/login-background.png">
    </div>
    <div class="container">
      <!-- <ChildComp></ChildComp> -->
      <div class="desc"></div>
      <div class="login">
        <div class="login-wrapper">
          <el-form :model="form" label-width="80px">
            <div class="form-name">欢迎使用企业进销存管理系统</div>
            <el-form-item label="用户名：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="密码：">
              <el-input v-model="form.passwd" show-password></el-input>
            </el-form-item>
          </el-form>
          <div class="operator">
            <el-button size="small" @click="login" :disabled="canLogin">登录</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import { store } from '@/utils/store'
import { getToken } from '@/utils/store'

export default {
  // 预定义属性
  name: 'HomeView',
  // 组件当中所有的响应式数据
  data: function () {
    return {
      form: {
        name: '',
        passwd: '',
      },
      isShowChild: true,
      pInfo: '这是用来设置默认的input框的值',
    }
  },
  computed: {
    canLogin() {
      const {name, passwd } = this.form;
      return !(name && passwd);
      // if (this.form.name && this.form.passwd) {
      //   return false;
      // } else {
      //   return true
      // }
    }
  },
  // 方法
  methods: {
      async login() {
        // 提供 isAuthenticated
      // TODO: 网络请求
      const token = await getToken()
      sessionStorage.setItem('token', token)
       // TODO: 跳转至主页面
       this.$router.push({ path: `main/${this.form.name}` })
      //  console.log(store)
      //  store.push(this.form)
    },
  }
}
</script>


<style lang="scss" scoped>
/**
使用了scoped关键字，当前样式只应用于此组件以及子组件，不会影响父组件
*/
.container {
  display: flex;
}
.operator {
  display: flex;
  justify-content: center;
}
.desc {
  width: 60%;
}
.login {
  padding-top: 150px;
  .login-wrapper {
    background-color: #fff;
    width: 300px;
    padding: 40px;
    border-radius: 10px;
    .form-name{
      font-size: larger;
      margin: 15px 25px;
    }
  }
}
.bg-img {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
    height: 100%;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
