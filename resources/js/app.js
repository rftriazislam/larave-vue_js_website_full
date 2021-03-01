require('./bootstrap');


// window.Vue =require('vue');

// Vue.component('mainapp',require('./Components/mainapp.vue').default);

import Vue from 'vue'
import App from './components/mainapp.vue'


// const app = new Vue({
// el:'#app',
// component:App
// })


new Vue({
    el: '#app',
    render: h => h(App)
});
