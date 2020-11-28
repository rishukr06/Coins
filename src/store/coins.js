import axios from 'axios'
const coins = {
    namespaced : true,
    state : {
        coins : [],
        limit : 10,
        offset : 0,
        page : 2,
        totalCoins: 0,
        totalPages : 0,
        isLoading : false,

        apiUrl : 'https://api.coinranking.com/v1/public/coins/',
    },
    mutations: {
        SET_COINS(state, coins) {
            state.coins = coins
        },
        SET_LIMIT(state, limit) {
            state.limit = limit
        },
        SET_OFFSET(state, offset) {
            state.offset = offset
        },
        SET_TOTAL_COINS(state, totalCoins) {
            state.totalCoins = totalCoins
        },
        SET_TOTAL_PAGES(state, totalPages) {
            state.totalPages = totalPages
        },
        SET_PAGE(state, page) {
            state.page = page
        },
        SET_LOADING(state, isLoading) {
            state.isLoading = isLoading
        }
    },
    actions: {
        loadCoins({commit}) {
            commit('SET_LOADING', true)
            axios
                .get(`${coins.state.apiUrl}?limit=${coins.state.limit}&offset=${coins.state.offset}`)
                .then(res => {
                    commit('SET_COINS', res.data.data.coins)
                    commit('SET_TOTAL_COINS', res.data.data.stats.total)
                    let totalCoins = coins.state.totalCoins
                    let limit = coins.state.limit
                    let totalNumberOfPages = Math.ceil(totalCoins/limit)
                    commit('SET_TOTAL_PAGES', totalNumberOfPages)
                    commit('SET_LOADING', false)
                })
                .catch((error) => {
                    console.log(error)
                    commit('SET_LOADING', false)
                })
        },
        setLimit({commit}, limit) {
            commit('SET_LIMIT', limit)
            coins.actions.loadCoins({commit})
        },
        firstPage({commit}) {
            commit('SET_OFFSET', 0)
            commit('SET_PAGE', 2)
            coins.actions.loadCoins({commit})
        },
        previousPage({commit}) {
            let currPage = coins.state.page;
            let limit = coins.state.limit;
            if (currPage > 2){
                let currOffset = coins.state.offset;
                let data = currOffset - limit;
                commit('SET_OFFSET', data)
                commit('SET_PAGE', currPage-1)
                coins.actions.loadCoins({commit})
            }
        },
        nextPage({commit}) {
            let currPage = coins.state.page;
            let limit = coins.state.limit;
            let lastPage = coins.state.totalPages;
            if (currPage < lastPage) {
                let data = (currPage - 1) * limit;
                commit('SET_OFFSET', data)
                commit('SET_PAGE', currPage+1)
                coins.actions.loadCoins({commit})
            }
        },
        lastPage({commit}) {
            let totalCoins = coins.state.totalCoins
            let limit = coins.state.limit
            let totalNumberOfPages = coins.state.totalPages
            let offset = totalCoins - limit
            commit('SET_OFFSET', offset)
            commit('SET_PAGE', totalNumberOfPages)
            coins.actions.loadCoins({commit})
        },
    }
}

export default coins
