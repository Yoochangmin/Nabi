import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import DateRangePicker from "vue-mj-daterangepicker";
import "vue-mj-daterangepicker/dist/vue-mj-daterangepicker.css";
import vuetify from "./plugins/vuetify";
import { store } from "./store/store.js";
import VueMoment from "vue-moment";

//fontawesome 라이브러리 사용
// import {fas} from '@fortawesome/free-solid-svg-icons'
// import {far} from '@fortawesome/free-regular-svg-icons'
// import {fab} from '@fortawesome/free-brands-svg-icons'

// library.add( fas, far, fab)
// Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false;
Vue.use(DateRangePicker);
Vue.use(VueMoment);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
