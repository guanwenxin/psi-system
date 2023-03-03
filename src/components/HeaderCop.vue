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
        {{ $t("msg.welcome") }}{{ $route.params.userId }}{{ $t("msg.weluser") }}，{{ $t("msg.welsentence") }}
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
      width: 400px;
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