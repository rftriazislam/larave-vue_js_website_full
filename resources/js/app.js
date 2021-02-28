require('./bootstrap');


window.Vue =require('vue')
Vue.component('mainapp',require('./Components/mainapp.vue').default)
const app = new Vue({
el:'#app'
})
