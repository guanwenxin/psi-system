
<template>
    <div class="default" ref="default" @scroll="setButton($event)">
        <div ref="top">当前库存查询</div>
        <div style="height: 20000px; background-color: pink;"></div>
        <div v-show="needTopBtn" class="back"><el-button type="primary" @click="returnTop">回顶部</el-button></div>
    </div>
</template>

<script>
export default {
    name:'kcdqkccxTab',

    data: function () {
        return {
            needTopBtn: false,
    }
},
    mounted(){

    },

    methods: {
        returnTop() {
            this.$refs.top.scrollIntoView(true, {
                behavior: 'smooth'
            });
        },
        setButton(e) {
            if (e.target.scrollTop > 0) {
                this.needTopBtn = true
            } else {
                this.needTopBtn = false
            }
        }
    },
}


</script>

<style lang="scss" scoped>
.back {
    position: fixed;
    right: 40px;
    bottom: 40px;
}

.default {
    height: 100%;
    overflow-y: auto;
    padding: 0 20px;
}
</style>