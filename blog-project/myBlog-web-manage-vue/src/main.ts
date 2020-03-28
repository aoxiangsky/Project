import Vue from "vue";
import ElementUI from "element-ui";
import "@/style/element-variables.scss";
import Blog from "./Blog.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(Blog)
}).$mount("#blog");
