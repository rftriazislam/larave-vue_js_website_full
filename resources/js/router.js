import AllProduct from './components/AllProduct.vue';
import CreateProduct from './components/CreateProduct.vue';
import EditProduct from './components/EditProduct.vue';
import Hook from './components/pages/hook.vue';
import Medthos from './components/pages/methods.vue';

 
export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllProduct
    },
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