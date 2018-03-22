import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Dapp from '@/components/Dapp';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/:dapp',
            name: 'dapp',
            component: Dapp,
            props: true
        },
        {
            path: '*',
            redirect: '/'
        }
    ]
});
