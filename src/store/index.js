import Vue from 'vue'
import Vuex from 'vuex'
import coins from './coins'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        coins
    }
})
