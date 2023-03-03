
<template>
    <div class="default" ref="default" @scroll="setButton($event)">
        <div ref="top">
            <aqtc-slot>
                安全退出
                <template v-slot:sub>
                    欢迎下次继续使用企业进销存系统，以下是天气预报查询，希望每天天好心情。再见！！！
                </template>
            </aqtc-slot>
        </div>

        <div v-show="needTopBtn" class="back"><el-button type="primary" @click="returnTop">回顶部</el-button></div>
    </div>
</template>

<script>
import aqtcSlot from './aqtcSlot.vue'
export default {
    name:'aqtcTab',
    components: {
        aqtcSlot
    },
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