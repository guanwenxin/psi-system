
<template>
    <div class="default" ref="default" @scroll="setButton($event)">
        <div ref="top">用户管理</div>
        <!-- <div style="height: 20000px; background-color: pink;"></div> -->
        <div v-show="needTopBtn" class="back"><el-button type="primary" @click="returnTop">回顶部</el-button></div>


        <el-button @click="sumbit">提交</el-button>
        <el-form :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="电话">
                <el-input v-model="form.phone"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import { login } from '@/utils/login';
export default {
    name:'yhglTab',

    data: function () {
        return {
            needTopBtn: false,
            form: {
                username: '',
                password: '',
                phone: ''
            }
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
        },


        async sumbit() {
            const result = await login.post('/user/add', this.form);
            console.log('user', result)
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