// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import VueGtag from "vue-gtag";
import "./../node_modules/bulma/css/bulma.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import specific icons */
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* add icons to the library */
library.add(faAngleDown);
library.add(faAngleUp);

/* add font awesome icon component */
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;

Vue.use(VueGtag, {
  enabled: true,
  bootstrap: true,
  onReady: () => console.log("ready!!!!!!!"),
  onError: null,
  onBeforeTrack: () => console.log("not tracked"),
  onAfterTrack: event => console.log(event),
  customResourceURL: "https://www.googletagmanager.com/gtag/js",
  customPreconnectOrigin: "https://www.googletagmanager.com",
  deferScriptLoad: false,
  pageTrackerTemplate: null,
  pageTrackerExcludedRoutes: [],
  pageTrackerEnabled: true,
  pageTrackerScreenviewEnabled: false,
  pageTrackerUseFullPath: false,
  pageTrackerPrependBase: true,
  pageTrackerSkipSamePath: true,
  disableScriptLoad: false,
  appName: null,
  globalDataLayerName: "dataLayer",
  globalObjectName: "gtag",
  defaultGroupName: "default",
  includes: null,
  config: {
    id: "G-9YM9LBZ87N",
    params: {
      send_page_view: true
    }
  }
});

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
