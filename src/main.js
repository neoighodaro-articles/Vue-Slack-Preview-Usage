import Vue from 'vue'
import App from './App'
import PreviewComponent from "preview-component";

Vue.config.productionTip = false
Vue.use(PreviewComponent);

/* eslint-disable no-new */
new Vue({
  el: '#app',

  render: h => h(App)

})
