import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import DateRangePicker from "vue-mj-daterangepicker";
import "vue-mj-daterangepicker/dist/vue-mj-daterangepicker.css";
import vuetify from "./plugins/vuetify";
import { store } from "./store/store.js";
import VueMoment from "vue-moment";

Vue.config.productionTip = false;
Vue.use(DateRangePicker);
Vue.use(VueMoment);

new Vue({
  router,
  vuetify,
  store,
  render: (h) => h(App),
}).$mount("#app");
