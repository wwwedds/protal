import Vue from 'vue'
import LUI from '@lui/lui'
import '@lui/lui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import store from './store'
import filters from './filters'
import Plugins from './plugins'
import VueBus from 'vue-bus'
import { Icon } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// mock
if (process.env.NODE_ENV === 'mock') { // 当环境为mock时， 加载mock模块
  /* eslint-disable */
  require('./mock/index')
}

Vue.use(LUI)
Vue.use(Plugins)
Vue.use(VueBus)
Vue.use(Icon);
// 加载filter
Object.keys(filters).forEach((key) => {
  Vue.filter(`${key}`, filters[key])
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
