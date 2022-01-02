export default [
    {
        path: 'projects',
        name: 'Project',
        redirect: { name: 'ProjectList' },
        meta: {
            label: 'Project',
            icon: 'fas fa-projects'
        },
        component: {
            template: '<router-view></router-view>'
        },
        children: [
            {
                path: '',
                name: 'ProjectList',
                meta: {
                    label: 'List Project',
                },
                component: () => import('@views/Pages/Project/Index' /* webpackChunkName: "Pages/Project/Index" */),
            },
            {
                path: 'create',
                name: 'ProjectCreate',
                meta: {
                    label: 'Add Project',
                },
                component: () => import('@views/Pages/Project/Action' /* webpackChunkName: "Pages/Project/Action" */),
            },
            {
                path: ':uuid/edit',
                name: 'ProjectEdit',
                meta: {
                    label: 'Edit Project',
                },
                component: () => import('@views/Pages/Project/Action' /* webpackChunkName: "Pages/Project/Action" */),
            },
            {
                path: ':uuid',
                name: 'ProjectShow',
                meta: {
                    label: 'Project Detail',
                },
                component: () => import('@views/Pages/Project/Show' /* webpackChunkName: "Pages/Project/Show" */),
            }
        ]
    },
]
