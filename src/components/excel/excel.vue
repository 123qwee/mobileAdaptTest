<template>
    <div>
        <input id="excel-upload-input" ref="excel-upload-input" type="file" accept=".xlsx, .xls" class="c-hide" @change="handkeFileChange">
        <el-button style="margin-left:16px;" size="mini" type="primary" @click="handleUpload">{{txtName}}</el-button>
    </div>
</template>

<script>
    import XLSX from 'xlsx'

    export default {
        props:{
            txtName:{
                type:String,
                default:"选择Excel文件",
            }
        },
        data() {
            return {
                excelData: {
                    header: null,
                    results: null
                }
            }
        },
        methods: {
            handleUpload() {
                document.getElementById('excel-upload-input').click()
            },
            // 选择文件
            handkeFileChange(e) {
                const files = e.target.files;
                const itemFile = files[0]; // 第一张工作簿
                if (!itemFile) return;
                this.readerData(itemFile);
                this.$refs['excel-upload-input'].value = null;
            },
            // 读取数据
            readerData(itemFile) {
                const reader = new FileReader();
                reader.onload = e => {
                    const data = e.target.result;
                    const fixedData = this.fixdata(data);
                    const workbook = XLSX.read(btoa(fixedData), { type: 'base64' });
                    const firstSheetName = workbook.SheetNames.length == 1 ? workbook.SheetNames[0] : workbook.SheetNames[6];
                    const worksheet = workbook.Sheets[firstSheetName];
                    const header = this.get_header_row(worksheet);
                    const results = XLSX.utils.sheet_to_json(worksheet);
                    this.generateDate({ header, results })
                    console.log(header);
                    console.log(results);
                }
                reader.readAsArrayBuffer(itemFile)
            },
            // 生成数据,供外部引用
            generateDate({ header, results }) {
                this.excelData.header = header
                this.excelData.results = results
                this.$emit('on-selected-file', this.excelData)
            },
            fixdata(data) {
                let o = ''
                let l = 0
                const w = 10240
                for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
                o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
                return o
            },
            // 读取Excel第一行
            get_header_row(sheet) {
                const headers = []
                const range = XLSX.utils.decode_range(sheet['!ref'])
                let C
                const R = range.s.r /* 从第一行开始 */
                for (C = range.s.c; C <= range.e.c; ++C) {
                    var cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]; /* 查找第一行中的单元格 */
                    var hdr = 'UNKNOWN ' + C // replace with your desired default
                    if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
                    headers.push(hdr)
                }
                return headers
            }
        }
    }
</script>

<style scoped>
    #excel-upload-input {
        display: none;
        z-index: -9999;
    }
</style>