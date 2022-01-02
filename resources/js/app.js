import { createApp } from "vue"
import router from "@routes"
import store from "@stores"

const app = createApp({});

app.use(router);
app.use(store);

import core from './core'
core(app)

import components from '@js/components'
components(app)

app.mount("#root");
