<template>
    <div>
        <el-input style="width:40vw;" v-model="editContent"></el-input>
        <el-button type="primary" @click="setEdit">设置内容</el-button>
        <el-button type="primary" @click="getEdit">获取内容</el-button>
        <div>{{editContent}}</div>
        <tinymce ref="tinymce" :id="id" :value="value" :toolbar="toolbar" :height="360" :language="language"></tinymce>
    </div>
</template>
<script>

    import tinymce from '../index.vue'

    export default {
        components:{
            tinymce
        },
        data() {
            return {
                // 文本编辑器
                id: "edit",
                value: "123",
                toolbar: [],
                editContent: "",
                language: "zh_CN",
            }
        },
        methods: {
            setEdit() {
                this.$refs["tinymce"].setContent(this.editContent);
            },
            getEdit() {
                this.editContent = this.$refs["tinymce"].getContent();
            }
        }
    }
</script>