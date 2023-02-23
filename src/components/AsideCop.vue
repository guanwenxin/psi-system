<template>
<div class="aside-container">
    <el-menu >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <el-submenu index="1-1">
        <template slot="title">选项1</template>
        <el-menu-item index="1-1-1">选项1</el-menu-item>
        <el-menu-item index="1-1-2">选项2</el-menu-item>
        <el-menu-item index="1-1-3">选项3</el-menu-item>
        <el-menu-item index="1-1-4">选项4</el-menu-item>
        <el-menu-item index="1-1-5">选项5</el-menu-item>
      </el-submenu>
      <el-submenu index="1-2">
        <template slot="title">选项2</template>
        <el-menu-item index="1-2-1">选项1</el-menu-item>
        <el-menu-item index="1-2-2">选项2</el-menu-item>
        <el-menu-item index="1-2-3">选项3</el-menu-item>
        <el-menu-item index="1-2-4">选项4</el-menu-item>
        <el-menu-item index="1-2-5">选项5</el-menu-item>
      </el-submenu>
      <el-submenu index="1-3">
        <template slot="title">选项3</template>
        <el-menu-item index="1-3-1">选项1</el-menu-item>
        <el-menu-item index="1-3-2">选项2</el-menu-item>
        <el-menu-item index="1-3-3">选项3</el-menu-item>
        <el-menu-item index="1-3-4">选项4</el-menu-item>
        <el-menu-item index="1-3-5">选项5</el-menu-item>
      </el-submenu>
    </el-submenu>


    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航二</span>
      </template>
      <el-submenu index="2-1">
        <template slot="title">选项1</template>
        <el-menu-item index="2-1-1">选项1</el-menu-item>
        <el-menu-item index="2-1-2">选项2</el-menu-item>
        <el-menu-item index="2-1-3">选项3</el-menu-item>
        <el-menu-item index="2-1-4">选项4</el-menu-item>
        <el-menu-item index="2-1-5">选项5</el-menu-item>
      </el-submenu>
    </el-submenu>
      
    <el-submenu index="3">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航三</span>
      </template>
      <el-submenu index="3-1">
        <template slot="title">选项1</template>
        <el-menu-item index="3-1-1">选项1</el-menu-item>
        <el-menu-item index="3-1-2">选项2</el-menu-item>
        <el-menu-item index="3-1-3">选项3</el-menu-item>
        <el-menu-item index="3-1-4">选项4</el-menu-item>
        <el-menu-item index="3-1-5">选项5</el-menu-item>
      </el-submenu>
    </el-submenu>
  </el-menu>
  <div class="aside-footer">Copyright [2023] by [Guan] </div>
</div>
</template>

<script>
export default{
    name:'AsideCop'
}
</script>

<style lang="scss" scoped>
.aside-container {
    height: calc(100% - 60px);
    ul {
        overflow-y: auto;
        height: 100%;
        margin-bottom: 60px;
        padding-bottom: 60px;
    }
}
.aside-footer {
    position: fixed;
    width: 264px;
    height: 60px;
    left: 0;
    bottom: 0;
    border-top: 1px solid #e6e6e6;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    color: aliceblue;
    background-color: #24292f;
}
</style>