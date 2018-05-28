<template>
    <div>
        <el-input style="width:40vw;" v-model="value"></el-input>
        <el-button type="primary" @click="encode">加解密</el-button>
        <div style="text-align: left;width:60vw;word-wrap:break-word;">
            base64 + AES 加密:
            <div>加密后：{{abE}}</div>
            <div>解密后：{{abS}}</div>
        </div>
        <!-- <el-upload class="upload-demo" ref="upload" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview"
            :on-remove="handleRemove" :file-list="fileList" :on-progress="progress" :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload> -->
    </div>
</template>
<script>
    /*
        AES,RSA,Base64,md5,sha256
        lz-string字符串压缩
    */


    import EnAndDe from "@/EnAndDe.js";
    import LZString from 'lz-string';

    export default {
        data() {
            return {
                value: '',
                abE: "",
                abS: "",
                ze: "",
                zs: "",
                // fileList: [{
                //     name: 'food.jpeg',
                //     url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                // }, {
                //     name: 'food2.jpeg',
                //     url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                // }]
            }
        },
        methods: {
            encode() {
                // 加密压缩
                this.abE = LZString.compress(EnAndDe.AESAndBaseE(this.value, 1));
                // 本地存储
                lscache.set("zip", this.abE, 30);

                // 解压缩解密
                this.abS = EnAndDe.AESAndBaseD(LZString.decompress(lscache.get("zip")), 1);


                console.log("md5:" + EnAndDe.MD5(this.value));
                console.log("sha256:" + EnAndDe.SHA256(this.value));
                console.log("AES:" + EnAndDe.AESE(this.value), EnAndDe.AESD(EnAndDe.AESE(this.value)));
                console.log("AES+Base:" + EnAndDe.AESAndBaseE(this.value), EnAndDe.AESAndBaseD(EnAndDe.AESAndBaseE(this.value)));
                console.log("RSA:" + EnAndDe.RSAE(this.value), EnAndDe.RSAD(EnAndDe.RSAE(this.value)));
                console.log("AES+RSA:" + EnAndDe.AESAndRSAE(this.value), EnAndDe.AESAndRSAD(EnAndDe.AESAndRSAE(this.value)));

                // EnAndDe.readFile();
            },
            // submitUpload() {
            //     this.$refs.upload.submit();
            // },
            // handleRemove(file, fileList) {
            //     console.log(file, fileList);
            // },
            // handlePreview(file) {
            //     console.log(file);
            // },
            // progress(event, file, fileList) {
            //     debugger
            // }
        }
    }
</script>