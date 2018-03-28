import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

// Global styles
import './styles/styles.scss';

import Checkbox from './components/common/checkbox/Checkbox.vue';
Vue.component('Checkbox', Checkbox);

Vue.use(Buefy)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  components: {App},
  template: '<App/>',
});
