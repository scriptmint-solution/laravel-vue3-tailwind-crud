import { createRouter, createWebHistory } from "vue-router"
import store from '@stores'

const baseURL = '/app'
import routes from '@routes/modules/index'

const router = createRouter({
    history: createWebHistory(baseURL),
    routes: routes
})

export default router
