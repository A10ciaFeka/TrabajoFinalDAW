import { createStore } from 'vuex'

const store = createStore({
    namespaced: true,
    state: {
        user: null

    },
    getters:{
        user: state => state.user
    },
    mutations: {
        USER (state, user){
            state.user = user
        }

    }
})

export default store