import _ from 'lodash';

import Main from '@/components/home/Main.vue';
import HelloWorld from '@/components/HelloWorld.vue'
import dragTable from '@/components/dragTable/dragTable.vue';
import dragkb from '@/components/dragKanban/view/index.vue';
import edit from '@/components/tinymce/view/index.vue';
import excel from '@/components/excel/view/index.vue';
import updata from '@/components/img/index.vue';
import AesZip from '@/components/AesZip.vue';
import wimg from '@/components/wImg/wimg.vue'

const model_1 = [{
    path: '/HelloWorld',
    component: HelloWorld
}, {
    path: '/dragTable',
    component: dragTable
}, {
    path: '/dragkb',
    component: dragkb
}, {
    path: '/edit',
    component: edit
}, {
    path: '/excel',
    component: excel
}, {
    path: '/updata',
    component: updata
}, {
    path: '/AesZip',
    component: AesZip
}, {
    path: "/wimg",
    component: wimg
}];

let routes = _.union(model_1, []);

export default [{
    path: '/',
    redirect: '/Main'
}, {
    path: '/Main',
    component: Main,
    children: routes
}]
