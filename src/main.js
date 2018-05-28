// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import storeConfig from './store/store'
import 'lib-flexible'
import 'babel-polyfill';

//  引入ElementUI界面库
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
Vue.use(ElementUI);

import i18n from "./i18n";

import ajaxOper from './request/ajaxOper.js'
Vue.prototype.$ajax = ajaxOper;

import mock from "./request/mock.js";

import jquery from 'jquery';
window.$ = jquery;

import lscache from 'lscache';
window.lscache = lscache;

Vue.config.productionTip = false

import './assets/main.css';
import '@/assets/styles/uikit/css/uikit.almost-flat.min.css'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  storeConfig,
  components: { App },
  template: '<App/>'
})
