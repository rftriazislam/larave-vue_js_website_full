import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
import Hook from './components/pages/hook.vue';
import Medthos from './components/pages/methods.vue';
import Home from './components/pages/home.vue';
import Tags from './admin/component/pages/tags.vue';
import Category from './admin/component/pages/category.vue';




 
export const routes = [
    //---------------------------------------------project
    {
        name: 'home',
        path: '/',
        component: Home
    },
    {
         name:'tags',
         path:'/tags',
         component:Tags
    },

     {
        name:'category',
        path:'/category',
        component:Category
     },



    //-----------------------------------------------
    {
        name: 'hook',
        path: '/hook',
        component: Hook
    },
    {
         name:'methods',
         path:'/methods',
         component:Medthos,
    },
    {
        name: 'create',
        path: '/create',
        component: CreateProduct
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditProduct
    }
];