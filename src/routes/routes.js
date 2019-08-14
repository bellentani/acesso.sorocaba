import home from '@/components/home'
import blog from '@/components/blog'

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