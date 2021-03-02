require('./bootstrap');


// window.Vue =require('vue');

Vue.component('mainapp',require('./components/mainapp.vue').default);

import Vue from 'vue'
import App from './components/mainapp.vue'
import router from './router'

const app = new Vue({
el:'#app',
router,
})


// new Vue({
//     el: '#app',
//     render: h => h(App)
// });
