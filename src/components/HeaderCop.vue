<!-- <template>
  <div>我是header
    {{ $route.params.userId }}
  </div>
</template>

<script>
export default{
  name:'HeaderCop'
}
</script> -->

<template>
  <div class="header-container">
      <div class="logo"><img src="../assets/header-picture.png" /></div>
      <div class="content"></div>
      <div class="info">
        欢迎{{ $route.params.userId }}用户，登录企业进销存管理系统
      </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderCop',
  data: function() {
      return {
          
      }
  },
  mounted() {
      
  }
}
</script>

<style lang="scss" scoped>
.header-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  div {
      height: 100%;
  }
  .logo {
      width: 220px;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
          height: 40px;
      }
  }
  .content {
      flex-grow: 1;
  }
  .info {
      width: 300px;
      display: flex;
      // justify-content: center;
      align-items: center;
      font-size: 12px;
      color: pink;
  }
  .info:hover {
      cursor: pointer;
  }
}
</style>