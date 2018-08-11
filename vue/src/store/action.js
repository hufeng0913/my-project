import * as types from '../store/mutation-types'

export default {
    getBoolean({commit}, payload) {
        commit(types.GET_BOOLEAN, payload)
    },
    changeHref({commit}, payload) {
        commit(types.CHANGE_HREF, payload)
    },
    changeCount({commit}, payload) {
        commit(types.CHANGE_COUNT, payload)
    },
    getName({commit}, payload) {
        commit(types.NAME, payload)
    },
    getGoodMsg({commit}, payload) {
        commit(types.GOOD_MSG, payload)
    },
    collection({commit}) {
        commit(types.COLLECTION)
    },
    collectionDatas({commit}) {
        commit(types.COLLECTION_DATAS)
    },
    catDatas({commit}) {
        commit(types.CAT_LIST)
    },
    add({commit}, payload) {
        commit(types.ADD, payload)
    },
    reduce({commit}, payload) {
        commit(types.REDUCE, payload)
    }
}