import Vue from 'vue'
import Router from 'vue-router'
import VueGlide from 'vue-glide-js'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from '@fortawesome/fontawesome-svg-core';
// internal icons
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// We import JQuery
const $ = require('jquery');
// We declare it globally
window.$ = $;

var VueScrollTo = require('vue-scrollto');
Vue.use(VueScrollTo)

library.add(fas);
Vue.component('vue-fontawesome', FontAwesomeIcon);

Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas",
  customIconPacks: {
    fas: {
      sizes: {
        default: "lg",
        "is-small": "1x",
        "is-medium": "2x",
        "is-large": "3x"
      },
      iconPrefix: ""
    }
  }
});
Vue.use(Buefy)
Vue.use(VueGlide)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
  ]
})
