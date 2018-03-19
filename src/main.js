import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default-dark.css';

import firebase from 'firebase';

Vue.prototype.$firebase = firebase.initializeApp({
    databaseURL: 'https://lifedapps.firebaseio.com'
}).database();

Vue.use(VueMaterial);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
