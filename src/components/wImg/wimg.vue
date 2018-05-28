<template>
    <div>
        <el-input type="file" id="file" style="width:20vw;">选择图片</el-input>
        <el-input style="width:20vw;" v-model="value">请输入内容</el-input>
        <el-button @click="writeImg">写入信息</el-button>
        <hr>
        <el-input type="file" id="file1" style="width:20vw;">选择图片</el-input>
        <el-input style="width:20vw;" v-model="value1">请输入内容</el-input>
        <el-button @click="readImg">读取信息</el-button>

        <canvas id="png" width='10' height='10'></canvas>
    </div>
</template>
<script>
    export default {
        data() {
            return {
            };
        },
        methods: {
            writeImg() {
            },
            readImg() {
            }
        }
    }
</script>