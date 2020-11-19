import Vue from "vue";
import App from "./App.vue";
import "./assets/css/style.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUserSecret,
  faPlus,
  faBell,
  faCaretDown,
  faCog,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { Plugin } from "vue-fragment";
Vue.use(Plugin);

library.add(
  faUserSecret,
  faPlus,
  faBell,
  faCaretDown,
  faCog,
  faChevronRight,
  faFacebookMessenger
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
