import Vue from "vue"
import axios from "axios"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faAngleDown,
  faAngleRight,
  faCaretRight,
  faCaretLeft
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import App from "./App.vue"

library.add(faAngleDown, faAngleRight, faCaretRight, faCaretLeft)

Vue.component("font-awesome-icon", FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(axios)
new Vue({
  render: h => h(App)
}).$mount("#app")
