const home = require('../components/home');
const blog = require('../components/blog');

const routes = [
    {
        path: '/',
        name: 'home',
        component: home
    },
    {
        path: '/blog',
        name: 'blog',
        component: blog
    }

];

export default routes;