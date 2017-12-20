// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUi from 'element-ui'
import store from './store'

Vue.use(ElementUi)
Vue.config.productionTip = false
import ECharts from 'vue-echarts'
Vue.component('chart', ECharts)
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
