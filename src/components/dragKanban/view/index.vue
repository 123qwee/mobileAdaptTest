<template>
    <div style="display: flex;align-items: flex-start;justify-content: center;">
        <dragkb :list="list1" :options="options" headerText="1"></dragkb>
        <dragkb :list="list2" :options="options" headerText="2"></dragkb>
        <dragkb :list="list3" :options="options" headerText="3"></dragkb>
    </div>
</template>
<script>

    import dragkb from '../dragkb';

    export default {
        components: {
            dragkb
        },
        data() {
            return {
                // 拖拽标签
                options: {
                    group: 'mission'
                },
                list1: [
                    { name: '1Mission', id: 1 },
                    { name: '1Mission', id: 2 },
                    { name: '1Mission', id: 3 },
                    { name: '1Mission', id: 4 }
                ],
                list2: [
                    { name: '2Mission', id: 5 },
                    { name: '2Mission', id: 6 },
                    { name: '2Mission', id: 7 },
                    { name: '2Mission', id: 8 }
                ],
                list3: [
                    { name: '3Mission', id: 9 },
                    { name: '3Mission', id: 10 },
                    { name: '3Mission', id: 11 },
                    { name: '3Mission', id: 12 }
                ],
            }
        },
        methods: {
        }
    }
</script>
<style>
    .sortable-ghost {
        color: #fff;
        background: aqua !important;
    }
</style>