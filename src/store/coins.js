import axios from 'axios'
const coins = {
    namespaced : true,
    state : {
        coins : [],
        limit : 10,
        offset : 0,
        apiUrl : 'https://api.coinranking.com/v1/public/coins/',
    },
    mutations: {
        SET_COINS(state, coins) {
            state.coins = coins
        },
        SET_LIMIT(state,limit) {
            state.limit = limit
        },
    },
    actions: {
        loadCoins({commit}) {
            axios
                .get(`${coins.state.apiUrl}?limit=${coins.state.limit}&offset=${coins.state.offset}`)
                .then(res => {
                    commit('SET_COINS', res.data.data.coins)
                })
                .catch(error => console.log(error))
        },
        setLimit({commit}, limit) {
            commit('SET_LIMIT', limit)
            coins.actions.loadCoins({commit})
        },
    }
}

export default coins
