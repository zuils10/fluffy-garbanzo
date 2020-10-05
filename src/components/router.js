import Vue from 'vue';
import VueRouter from 'vue-router';
import CalculatorLatest from '@/pages/CalculatorLatest';
import CalculatorOld from '@/pages/CalculatorOld';
import TabAncient from "@/components/TabAncient";
import TabOutsider from "@/components/TabOutsider";
import TabClan from "@/components/TabClan";
import TabAbout from "@/components/TabAbout";

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'latest',
        component: CalculatorLatest,
        children: [
            { path: 'ancient', component: TabAncient},
            { path: 'outsider', component: TabOutsider },
            { path: 'clan', component: TabClan },
            { path: 'about', component: TabAbout },
        ]
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

