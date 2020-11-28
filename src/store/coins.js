import axios from 'axios'
const coins = {
    namespaced : true,
    state : {
        coins : [],
        limit : 10,
        offset : 0,
    },
    mutations: {
        SET_COINS(state, coins) {
            state.coins = coins
        }
    },
    actions: {
        loadCoins({commit}) {
            axios
                .get(`https://api.coinranking.com/v1/public/coins/?limit=${coins.state.limit}&offset=${coins.state.offset}`)
                .then(res => {
                    commit('SET_COINS', res.data.data.coins)
                })
                .catch(error => console.log(error))
        },
    }
}

export default coins
