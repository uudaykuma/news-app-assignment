// import Vuex from 'vuex';
export const state = () => ({
    allNews: null,
    pageSize: 21,
    searchQuery: "apple",
    searchCountry: "",
    searchCategory: "",
    resultCount: null,
    prodcuts: null,
})

export const mutations = {
    setAllNews (state, payload) {
        state.allNews = payload
    },
    setProducts (state, payload) {
        state.prodcuts = payload
    },
    setPageSize (state, payload) {
        state.pageSize = payload
    }
}


export const actions = {
    async updatePageSize ({commit}, payload) {
        commit('setPageSize', payload)
    },
    async fetchAllNews ({state,commit}, payload) {

        const myKey = process.env.MY_NEWS_API_KEYS
        if(!payload) {
            const res =  await fetch(`https://newsapi.org/v2/everything?q=all&pageSize=${state.pageSize}&apiKey=${myKey}`).then(res => res.json())
            commit('setAllNews', res)
        } else if(payload) {
            const { searchQuery, searchCountry, searchCategory} = payload
            if(searchQuery !== "" || searchCategory !== "" || searchCountry !== "") {
                const url = `https://newsapi.org/v2/${(searchCountry || searchQuery) ? "top-headlines" : searchCategory ? "top-headlines" : "everything"}?${searchCountry ? `country=${searchCountry}&` : ""}${searchCategory ? `category=${searchCategory}&` : ""}${searchQuery ? `q=${searchQuery}&` : ""}pageSize=${
                    state.pageSize
                  }&apiKey=${myKey}`
                  const res =  await fetch(url).then(res => res.json())
                  commit('setAllNews', res)
            }
        }
        
    }
}

export const getters = {
    getAllNews (state) {
        return state.allNews?.articles
    },
    getResultCount (state) {
        const resultCount = state.allNews?.articles.length
        return resultCount
    },
    getPageCount (state) {
        return state.pageSize
    },
    getProducts ( state) {
        return state.prodcuts
    }
}
