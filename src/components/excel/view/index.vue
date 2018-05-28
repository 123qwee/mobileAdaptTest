<template>
    <div>
        <!-- 提供预览Excel功能，返回tableData和tableHeader -->
        <upload-excel-component @on-selected-file='selected' :txtName="$t('excelname')"></upload-excel-component>
        
        <!-- 下载Excel -->
        <el-table :data="tableData" border highlight-current-row style="width: 80%;" @selection-change="handleSelectionChange">
            <el-table-column type="selection" align="center"></el-table-column>
            <el-table-column v-for="(item,index) in tableHeader" :label="item" :prop="item" :key="index" align="center">
            </el-table-column>
        </el-table>
        <el-button type="primary" @click="handleDownload(tableHeader,tableData,tableHeader,'文件名')">下载Excel</el-button>
    </div>
</template>
<script>
    // 提供预览Excel功能，返回tableData和tableHeader
    import UploadExcelComponent from '../excel';

    // 提供下载Excel功能
    import exceldown from '../excelDown.js';

    export default {
        components: {
            UploadExcelComponent
        },
        mixins: [exceldown],
        data() {
            return {
                tableData: [],
                tableHeader:[],
            }
        },
        methods: {
            // 选择需要预览的Excel文件
            selected(data) {
                this.tableData = data.results
                this.tableHeader = data.header
            },
        }
    }
</script>