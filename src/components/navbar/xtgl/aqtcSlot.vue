<template>
    <div class="topcontainer">
        <div class="title">
            <h2><span>¶</span><slot></slot></h2>
            <div class="backBtn">
                <el-button>返回登陆页面</el-button>
            </div>
        </div>
        <p class="sub-title"><slot name="sub"></slot></p>
    </div>

    
</template>

<script>
export default {
    name: 'aqtcSlot'
}
</script>

<style lang="scss" scoped>
.topcontainer {
    .title {
        display: flex;
        justify-content: space-between;
        h2 {
            font-weight: 400;
            color: #1f2f3d;
            span {
                opacity: 0;
            }
            span:hover {
                cursor: pointer;
            }
        }
        h2:hover {
            cursor: pointer;
            span {
                opacity: 0.5;
            }
        }
        .backBtn {
            margin-top: auto;
            margin-bottom: auto;
            button{
                color: red;
            }
        }
        .backBtn:hover{
            cursor: pointer;
        }
    }
    .sub-title {
        font-size: 14px;
        color: #5e6d82;
        margin-left: 18px;
    }
}
</style>