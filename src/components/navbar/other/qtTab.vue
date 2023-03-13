
<template>
    <div class="default" ref="default" @scroll="setButton($event)">
        <div ref="top">文件上传（单文件&&多文件）</div>
        <!-- <div style="height: 20000px; background-color: pink;"></div> -->
        <div v-show="needTopBtn" class="back"><el-button type="primary" @click="returnTop">回顶部</el-button></div>


        <!-- 文件上传 -->
        <el-button @click="openInput">选择单文件</el-button>
        <input ref="visible" class="input-layout" type="file" @change="getFileInfo($event)" />
        <el-button @click="upload">上传</el-button>
        <el-carousel v-show="urls.length !== 0">
            <el-carousel-item v-for="url in urls" :key="url">
                <img :src="url" />
            </el-carousel-item>
        </el-carousel>
        <!-- <img v-show="urls" :src="urls" > -->

    </div>
</template>

<script>
import { login } from '@/utils/login'
export default {
    name:'qtTab',

    data: function () {
        return {
            needTopBtn: false,
            file: null,
            urls:[],
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


        openInput() {
            this.$refs.visible.click();
        },
        getFileInfo(event) {
            // 1.通过input type="file"获取到用户上传的文件信息
            this.file = event.target.files[0]
            console.log(this.file)
        },
        async upload() {
            // form-data
            // 2.构造http请求体，FormData刚好满足传输文件(content-type：multipart/form-data)
            const formData = new FormData();
            formData.append('name', 'gwx')
            // 此处的key file，是后端取文件信息时的key
            formData.append('file', this.file)
            // 3.直接将formdata 放置axios post方法的参数中
            const {data:result} =await login.post('/upload', /**放file文件 */formData)
            // console.log(result)
            console.log(result.data.netUrl)
            // this.urls = result.data.netUrl
            this.urls.push(result.data.netUrl)
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

.input-layout {
    height: 0;
    width: 0;
}
</style>