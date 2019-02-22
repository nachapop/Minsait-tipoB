import Vue from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faAngleDown,
  faAngleRight,
  faCaretRight,
  faCaretLeft,
  faTimes
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import App from "./App.vue"

library.add(faAngleDown, faAngleRight, faCaretRight, faCaretLeft, faTimes)

Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount("#app")
