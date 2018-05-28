<template>
    <div>
        <div>可拖动表格</div>
        <el-table :data="list" row-key="id" fit border highlight-current-row style="width:100%;">
            <el-table-column label="id" prop="id" align="center">
                <template slot-scope="scope">
                    <span>{{scope.row.id}}</span>
                </template>
            </el-table-column>
            <el-table-column label="姓名" prop="name" align="center">

            </el-table-column>
            <el-table-column label="住址" prop="address" align="center">

            </el-table-column>
        </el-table>
        <div>
            <div>默认排序： {{oldList}}</div>
            <div>拖拽后排序：{{newList}}</div>
        </div>
    </div>
</template>

<script>
    import Sortable from 'sortablejs'

    export default {
        data() {
            return {
                oldList: [],
                newList: [],
                sortable: null,
                list: [],
                listLoading: true,
            }
        },
        created() {
            this.getList();
        },
        watch: {
        },
        mounted: function () {
        },
        methods: {
            getList() {
                let that = this;
                // this.listLoading = true
                this.$ajax.ajaxHttp({
                    url: "/list",
                    type: "get",
                    successFunc: data => {
                        if (data.code == 200) {
                            that.list = data.data;
                            // that.listLoading = false
                            that.oldList = that.list.map(v => v.id)
                            that.newList = that.oldList.slice()
                            that.$nextTick(() => {
                                that.setSort()
                            })
                        }
                    }
                });
            },
            setSort() {
                const el = document.querySelectorAll('.el-table__body-wrapper > table > tbody')[0]
                this.sortable = Sortable.create(el, {
                    ghostClass: 'sortable-ghost',
                    setData: function (dataTransfer) {
                        dataTransfer.setData('Text', '')
                    },
                    onEnd: evt => {
                        const targetRow = this.list.splice(evt.oldIndex, 1)[0]
                        this.list.splice(evt.newIndex, 0, targetRow)
                        const tempIndex = this.newList.splice(evt.oldIndex, 1)[0]
                        this.newList.splice(evt.newIndex, 0, tempIndex)
                    }
                })
            }
        }
    }
</script>
<style>
    .sortable-ghost {
        opacity: .8;
        color: #fff !important;
        background: #42b983 !important;
    }
</style>