// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase'
import push from './push'

Vue.use(VueFire)

// Your web app's Firebase configuration
let firebaseConfig = {
  apiKey: "AIzaSyCzlWtZ84bYfxHIAC8J10GSLrXsP8YFC-A",
  authDomain: "vue-pwa-6f8c4.firebaseapp.com",
  databaseURL: "https://vue-pwa-6f8c4.firebaseio.com",
  projectId: "vue-pwa-6f8c4",
  storageBucket: "vue-pwa-6f8c4.appspot.com",
  messagingSenderId: "237517305951",
  appId: "1:237517305951:web:11aa4b4ecede8367f003ea",
  measurementId: "G-2BXPHSLM13"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
