import {
  BootstrapVue,
  BootstrapVueIcons,
} from 'bootstrap-vue';
import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Notifications from 'vue-notification';
import App from './App.vue';
import router from './router';
import store from './store';

import './assets/bootstrap.css'; // overridden version of Bootstrap by Voler
import 'bootstrap-vue/dist/bootstrap-vue.css';

const DataTable = import(/* webpackChunkName: "dataTable" */ './components/DataTable.vue');

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
Vue.use(Vuelidate);
Vue.use(Notifications);
Vue.component('data-table', DataTable);

Vue.config.productionTip = process.env.NODE_ENV === 'dev';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
