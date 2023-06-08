import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import "ag-grid-enterprise";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
