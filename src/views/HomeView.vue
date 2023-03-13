<template>
  <!-- 0.v-bind -->
  <div class="page">
    <div class="bg-img">
      <img src="../assets/login-background.png" />
    </div>
    <div class="container">
      <!-- <ChildComp></ChildComp> -->
      <div class="desc"></div>
      <div class="login">
        <div class="login-wrapper">
          <el-form :model="form" label-width="80px">
            <div class="form-name">{{ $t("msg.hometitle") }}</div>
            <el-form-item :label="$t('msg.name')">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item :label="$t('msg.passwd')">
              <el-input v-model="form.passwd" show-password></el-input>
            </el-form-item>
          </el-form>
          <div class="operator">
            <el-button size="small" @click="login" :disabled="canLogin">
              {{ $t("msg.login") }}
            </el-button>
            <!-- 用数组的方式 ，再用v-for循环-->
            <el-select
              size="small"
              v-model="selectedLang"
              placeholder="请选择语言"
              @change="changeLang"
            >
              <el-option
                v-for="(lang, index) in langArr"
                :label="lang.label"
                :value="lang.value"
                :key="index"
              >
              </el-option>
              <!-- <el-option label="中文站" value="zh"></el-option>
              <el-option label="英文站" value="en"></el-option> -->
            </el-select>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import { store } from '@/utils/store'
import { getToken } from "@/utils/store";
import {login} from "@/utils/login"

export default {
  // 预定义属性
  name: "HomeView",
  // 组件当中所有的响应式数据
  data: function () {
    return {
      form: {
        name: "",
        passwd: "",
      },
      isShowChild: true,
      pInfo: "这是用来设置默认的input框的值",
      // 用数组的方式
      langArr: [
        { label: "中文", value: "zh" },
        { label: "English", value: "en" },
      ],
      selectedLang: "",
    };
  },
  computed: {
    canLogin() {
      const { name, passwd } = this.form;
      return !(name && passwd);
      // if (this.form.name && this.form.passwd) {
      //   return false;
      // } else {
      //   return true
      // }
    },
  },
  // 方法
  methods: {
    changeLang(lang) {
      console.log(this.$i18n.locale, this.$root.$i18n.locale)
      this.$i18n.locale = lang
      // TODO: 更改国际化语言
    },

    // async login() {
    // // 提供 isAuthenticated
    //   // TODO: 网络请求
    //   const token = await getToken();
    //   sessionStorage.setItem("token", token);
    //   // TODO: 跳转至主页面
    //   this.$router.push({ path: `main/${this.form.name}` });
    //   //  console.log(store)
    //   //  store.push(this.form)
    // },
    
    async login() {
      // console.log(this.$router)
       // TODO: 跳转至主页面
      // 提供 isAuthenticated
      // TODO: 网络请求})
      const result = await login.post('/login', {username: this.form.name, password: this.form.passwd})
      const data = result.data;
      if (data.success) {
        // console.log(data)
        // const token = data.data.token;
        // sessionStorage.setItem('token', token)
        sessionStorage.setItem('token', 'token')
        this.$router.push({ path: `main/${this.form.name}` })
      } else {
        this.$message('失败')
      }
      console.log(result)
    },

    
  },
};
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
    .form-name {
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
