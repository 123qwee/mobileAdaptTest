
export default {
    data() {
        return {
            multipleSelection: [],
        }
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val
        },
        handleDownload(tableHeader, tableData, filterVal, name) {
            if (this.multipleSelection.length) {
                let that = this;
                import('./vendor/Export2Excel').then(excel => {
                    const tHeader = that.tableHeader;
                    const filterVal = that.tableHeader;
                    const list = that.multipleSelection;
                    const data = that.formatJson(filterVal, list)
                    excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: name
                    });
                })
            } else {
                this.$message({
                    message: '请选择需要下载的数据',
                    type: 'warning'
                })
            }
        },
        formatJson(filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => v[j]))
        }
    }
}