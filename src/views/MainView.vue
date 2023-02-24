<template>
  <div class="container">
    <header>
      <header-cop></header-cop>
    </header>
    <div class="body">
      <aside>
        <aside-cop></aside-cop>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import AsideCop from '@/components/AsideCop.vue'
import HeaderCop from '@/components/HeaderCop.vue'
import { store } from '@/utils/store'
export default{
  name:'MainView',
  components: {
    AsideCop,
    HeaderCop,
  },
  mounted(){
    console.log('main组件',store)
  }
}
</script>
<style lang="scss" scoped>
.container{
  height: 100vh;
  width: 100%;
  header {
    height: 60px;
    background-color: #24292f;
    color: #fff;
  }
  .body {
    height: calc(100% - 60px);
    display: flex;
    aside {
      width: 264px;
      height: 100%;
    }
    main {
      width: calc(100% - 264px);
    }
  }
}
</style>