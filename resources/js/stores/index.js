import { createStore } from "vuex"

import project from '@stores/modules/project';

const store = createStore({
    modules: {
        project,
    },
    state() {
        return {};
    },
    mutations: {},
    actions: {},
    getters: {},
})

export default store
