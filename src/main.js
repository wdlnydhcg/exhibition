// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import numFreeStyle from './components/numFreeStyle'
import scroll from 'vue-seamless-scroll'
import VueNumber from 'vue-number-animation'
import bootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './static/css/index.less'
import $ from 'jquery'


Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;
Vue.component('num-free-style', numFreeStyle);
Vue.use(scroll);
Vue.use(VueNumber);
Vue.use(bootstrapVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
