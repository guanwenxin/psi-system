<template>
  <div class="aside-container">
    <el-menu :default-active="activeFlag" @select="active">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>进销存管理</span>
        </template>
        <el-submenu index="1-1">
          <template slot="title">进货管理</template>
          <el-menu-item index="1-1-1">进货入库</el-menu-item>
          <el-menu-item index="1-1-2">退货出库</el-menu-item>
          <el-menu-item index="1-1-3">进货单据查询</el-menu-item>
          <el-menu-item index="1-1-4">退货单据查询</el-menu-item>
          <el-menu-item index="1-1-5">当前库存查询</el-menu-item>
        </el-submenu>
        <el-submenu index="1-2">
          <template slot="title">销售管理</template>
          <el-menu-item index="1-2-1">销售出库</el-menu-item>
          <el-menu-item index="1-2-2">客户退货</el-menu-item>
          <el-menu-item index="1-2-3">销售单据查询</el-menu-item>
          <el-menu-item index="1-2-4">客户退货查询</el-menu-item>
          <el-menu-item index="1-2-5">当前库存查询</el-menu-item>
        </el-submenu>
        <el-submenu index="1-3">
          <template slot="title">库存管理</template>
          <el-menu-item index="1-3-1">商品报损</el-menu-item>
          <el-menu-item index="1-3-2">商品报溢</el-menu-item>
          <el-menu-item index="1-3-3">库存报警</el-menu-item>
          <el-menu-item index="1-3-4">报损报溢查询</el-menu-item>
          <el-menu-item index="1-3-5">当前库存查询</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>统计报表分析</span>
        </template>
        <el-submenu index="2-1">
          <template slot="title">统计报表</template>
          <el-menu-item index="2-1-1">供应商统计</el-menu-item>
          <el-menu-item index="2-1-2">客户统计</el-menu-item>
          <el-menu-item index="2-1-3">商品采购统计</el-menu-item>
          <el-menu-item index="2-1-4">商品销售统计</el-menu-item>
          <el-menu-item index="2-1-5">按日统计分析</el-menu-item>
          <el-menu-item index="2-1-6">按月统计分析</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>基础资料</span>
        </template>
        <el-submenu index="3-1">
          <template slot="title">基础资料</template>
          <el-menu-item index="3-1-1">供应商管理</el-menu-item>
          <el-menu-item index="3-1-2">客户管理</el-menu-item>
          <el-menu-item index="3-1-3">商品管理</el-menu-item>
          <el-menu-item index="3-1-4">期初库存</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>系统管理</span>
        </template>
        <el-submenu index="4-1">
          <template slot="title">系统管理</template>
          <el-menu-item index="4-1-1">角色管理</el-menu-item>
          <el-menu-item index="4-1-2">用户管理</el-menu-item>
          <el-menu-item index="4-1-3">系统日志</el-menu-item>
          <el-menu-item index="4-1-4">修改密码</el-menu-item>
          <el-menu-item index="4-1-5">安全退出</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
    <div class="aside-footer">Copyright [2023] by [Guan]</div>
  </div>
</template>

<script>
export default {
  name: "AsideCop",

  data: function () {
    return {
      activeFlag: "1-1-1",
      // 点击页面跳转
      routerMap: new Map(),
    };
  },

  mounted() {
    console.log("导航栏", this.$route.params);
    const pathVal = this.$route.params.userId;
    // 第一部分-1
    this.routerMap.set("1-1-1", `/main/${pathVal}/jhrk`);
    this.routerMap.set("1-1-2", `/main/${pathVal}/thck`);
    this.routerMap.set("1-1-3", `/main/${pathVal}/jhdjcx`);
    this.routerMap.set("1-1-4", `/main/${pathVal}/thdjcx`);
    this.routerMap.set("1-1-5", `/main/${pathVal}/jhdqkccx`);
    // 第一部分-2
    this.routerMap.set("1-2-1", `/main/${pathVal}/xsck`);
    this.routerMap.set("1-2-2", `/main/${pathVal}/khth`);
    this.routerMap.set("1-2-3", `/main/${pathVal}/xsdjcx`);
    this.routerMap.set("1-2-4", `/main/${pathVal}/khthcx`);
    this.routerMap.set("1-2-5", `/main/${pathVal}/xsdqkccx`);
    // 第一部分-3
    this.routerMap.set("1-3-1", `/main/${pathVal}/spbs`);
    this.routerMap.set("1-3-2", `/main/${pathVal}/spby`);
    this.routerMap.set("1-3-3", `/main/${pathVal}/kcbj`);
    this.routerMap.set("1-3-4", `/main/${pathVal}/bsbycx`);
    this.routerMap.set("1-3-5", `/main/${pathVal}/kcdqkccx`);
    // 第二部分
    this.routerMap.set("2-1-1", `/main/${pathVal}/gystj`);
    this.routerMap.set("2-1-2", `/main/${pathVal}/khtj`);
    this.routerMap.set("2-1-3", `/main/${pathVal}/spcgtj`);
    this.routerMap.set("2-1-4", `/main/${pathVal}/spxstj`);
    this.routerMap.set("2-1-5", `/main/${pathVal}/artjfx`);
    this.routerMap.set("2-1-6", `/main/${pathVal}/aytjfx`);
    // 第三部分/
    this.routerMap.set("3-1-1", `/main/${pathVal}/gysgl`);
    this.routerMap.set("3-1-2", `/main/${pathVal}/khgl`);
    this.routerMap.set("3-1-3", `/main/${pathVal}/spgl`);
    this.routerMap.set("3-1-4", `/main/${pathVal}/qckc`);
    // 第四部分/${pathVal}
    this.routerMap.set("4-1-1", `/main/${pathVal}/jsgl`);
    this.routerMap.set("4-1-2", `/main/${pathVal}/yhgl`);
    this.routerMap.set("4-1-3", `/main/${pathVal}/xtrz`);
    this.routerMap.set("4-1-4", `/main/${pathVal}/xgmm`);
    this.routerMap.set("4-1-5", `/main/${pathVal}/aqtc`);
  },

  methods: {
    active(index) {
      this.activeFlag = index;
      console.log(typeof index)
      if (this.routerMap.has(index)) {
        // 防止目标url当前url相同时，push出错
        const aimUrl = this.routerMap.get(index);
        const currentUrl = this.$router.currentRoute.fullPath;
        if (aimUrl !== currentUrl) {
          this.$router.push(aimUrl);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.aside-container {
  // 给下面aside-footer的padding-bottom留60px的位置
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