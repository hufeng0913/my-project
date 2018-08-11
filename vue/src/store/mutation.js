import * as types from '../store/mutation-types'

export default{
    [types.GET_BOOLEAN](state, payload) {
        state.searchPic = payload.searchPic;
        state.chatbubblePic = payload.chatbubblePic;
        state.searchContent = payload.searchContent;
    },
    [types.CHANGE_HREF](state, payload) {
        state.href = payload
    },
    [types.CHANGE_COUNT](state, payload) {
        state.count = payload
    },
    [types.NAME](state, payload) {
        state.name = payload ? payload : '未登录'
    },
    [types.GOOD_MSG](state, payload) {
        state.goodsList.titel = payload.titel
        state.goodsList.src = payload.src
        state.goodsList.price = payload.price
        state.goodsList.key = payload.key
    },
    [types.COLLECTION](state) {
        state.collection++;
    },
    [types.COLLECTION_DATAS](state) {
        const obj = Object.assign({id:state.collection}, state.goodsList)
        state.collectionDatas.push(obj)
    },
    [types.CAT_LIST](state) {
        const obj = Object.assign({}, state.goodsList)
        state.catList.push(obj)
    },
    [types.ADD](state, payload) {
        for(let item of state.catList) {
            if(item.key === payload) {
                item.count++
                state.totalPrice += item.price.substr(1) - 0
            }
        }
    },
    [types.REDUCE](state, payload) {
        let price;
        for(let item of state.catList) {
            if(item.key === payload) {
                if(item.count > 1 ) {
                    item.count--
                    item.count === 0 ? price = 0 : price = item.price.substr(1) - 0
                    state.totalPrice -= price
                }
                else{
                    if(item.count > 0) state.totalPrice -= item.price.substr(1) - 0
                    item.count = 0
                }
            }
        }
    }
}