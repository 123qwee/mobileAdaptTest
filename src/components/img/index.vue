<template>
        <div>

            <my-upload v-if="resetUpload" field="img" :width="300" :height="300" url="http://117.34.95.9:2222/cms/ued/upload" :params="params"
                :headers="headers" :value="show" img-format="png" :langType="lang" :noRotate="false" v-on:input="close" v-on:crop-success="cropSuccess"
                v-on:crop-upload-success="cropUploadSuccess" v-on:crop-upload-fail="cropUploadFail"></my-upload>
            <span v-if="!imgDataUrl" style="display:inline-block;vertical-align: top;width:200px;height:200px;background: #ddd;" @click="toggleShow(1)"
                @dblclick="toggleShow(2)">{{$t('clickGetData')}}</span>
            <img v-else :src="imgDataUrl" style="width:200px;height:200px;border-radius: 50%;" @click="toggleShow">
        </div>
</template>

<script>

    import myUpload from 'vue-image-crop-upload/upload-2';

    export default {
        components: {
            myUpload
        },
        data() {
            return {
                // 图片裁剪
                show: false,
                params: {
                    token: '123456798',
                    name: 'avatar'
                },
                headers: {
                    smail: '*_~'
                },
                imgDataUrl: '',
                lang: "zh", // 头像上传模块语言
                resetUpload: true,
            }
        },
        methods: {
            // 打开上传头像窗口
            toggleShow(index) {
                this.show = !this.show;
            },
            // 预备上传
            cropSuccess(imgDataUrl, field) {
                console.log('开始上传');
            },
            // 上传成功
            cropUploadSuccess(jsonData, field) {
                console.log('上传成功');
                console.log(jsonData);
                this.imgDataUrl = "http://117.34.95.9:2222/cms/ued/fileext/" + jsonData.data.id + ".jpg";
                this.show = !this.show;
            },
            // 上传失败
            cropUploadFail(status, field) {
                console.log('上传失败');
                console.log(status);
            },
            // 关闭上传头像窗口
            close() {
                this.show = !this.show;
            },
        }
    }
</script>