import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueResource from 'vue-resource';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/style/tailwind.css";

Vue.use(VueResource);
Vue.http.options.root = "";
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
