<template>
    <div>
        <div class="head uk-flex uk-flex-column uk-flex-nowrap">
            <v-head ref="header"></v-head>
        </div>
        <div class="main uk-flex uk-flex-row uk-flex-nowrap uk-flex-item-1">
            <v-sidebar ref="sidebar"></v-sidebar>
            <transition name="fade" mode="out-in">
                <router-view ref="main" class="center uk-flex-item-1"></router-view>
            </transition>
        </div>
    </div>
</template>
<script>
    import vHead from './Header.vue';
    import vSidebar from './Sidebar.vue';

    export default {
        data() {
            return {

            }
        },
        components: {
            vHead,
            vSidebar
        },
        created() {

        },
        mounted() {

        },
        watch: {

        },
        methods: {

        }
    }
</script>
<style>
    .head,
    .main {
        width: 100%;
        height: 100%;
    }

    .center {
        overflow: hidden;
        width: calc(100% - 10px);
        height: 100%;

        box-sizing: border-box;
        background: #fff;
    }
</style>