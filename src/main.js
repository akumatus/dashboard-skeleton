import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Resource from 'vue-resource'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min'
import 'admin-lte/dist/css/AdminLTE.css'
import 'admin-lte/dist/css/skins/_all-skins.css'
import 'admin-lte/dist/js/app'
import 'font-awesome/css/font-awesome.min.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(Resource);

new Vue({
  el: '#app',
  router,
  store: store,
  template: '<App/>',
  components: { App }
});
