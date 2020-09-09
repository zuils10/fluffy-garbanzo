import Vue from 'vue';
import VueRouter from 'vue-router';
import CalculatorLatest from '@/components/CalculatorLatest';
import CalculatorOld from '@/components/CalculatorOld';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'latest',
        component: CalculatorLatest
    },
    {
        path: '/1.0e9',
        name: 'old',
        component: CalculatorOld
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;

