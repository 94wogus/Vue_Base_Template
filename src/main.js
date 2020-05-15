import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import axios from "axios"

// Vuetify
import vuetify from '@/plugins/vuetify';
import "@mdi/font/css/materialdesignicons.css";

// Copy
import VueClipboard from "vue-clipboard2";

// Global Setting
import "@assets/common.css";
import Header from "@components/common/Header.vue";

// Event Bus
export const bus = new Vue();

Vue.config.productionTip = false;
Vue.component("Header", Header);
Vue.use(VueClipboard);

new Vue({
  router,
  store,
  axios,
  vuetify,
  render: h => h(App)
}).$mount("#app");
