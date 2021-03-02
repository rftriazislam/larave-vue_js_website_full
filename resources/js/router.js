import Vue from 'vue'
import Router from 'vue-router'
import myfirstpage from './pages/myfirstpage'
Vue.use(Router)

const routers=[
    {
 path:'/home-page',
    component: myfirstpage
    }
]

export default new Router ({
mode:'history',
routers:routers
})
