import * as VueGoogleMaps from "vue2-google-maps";
import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import VueGeolocation from "vue-browser-geolocation";

Vue.use(VueGeolocation);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCNsIKzrG8Tbqj-8kScK2hwxBONM0Zramk",
    libraries: "places",
  },
  installComponents: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
