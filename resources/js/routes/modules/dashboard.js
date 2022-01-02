export default [
    {
        path: 'dashboard',
        name: 'Dashboard',
        meta: {
            label: 'Dashboard',
            icon: 'fas fa-home'
        },
        component: () => import('@views/Pages/Dashboard' /* webpackChunkName: "Pages/Dashboard" */),
    },
]
