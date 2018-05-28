<template>
    <div class="sidebar">
        <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b"
            @select="clickMenu">
            <el-menu-item v-for="(item,index) in menuList" :index="index.toString()" :key="index">
                <i class="el-icon-menu"></i>
                <span slot="title">{{item.name}}</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>
<script>

    import menus from '@/assets/menu_config.js'

    export default {
        data() {
            return {
                menuList: []
            }
        },
        computed: {

        },
        created() {
            this.menuList = menus;
        },
        mounted() {
            this.$router.push("/HelloWorld");
        },
        methods: {
            clickMenu(key, path) {
                this.$router.push("/" + this.menuList[key].path);
            }
        },
        watch: {

        }
    }
</script>
<style>
    .sidebar {
        width: 220px;
        flex-shrink: 1;
    }
</style>