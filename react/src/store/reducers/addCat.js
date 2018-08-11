import * as types from '../action/action-type'

export default (state, {type})=> {
    let [totalPrice, bool, goodsNum] = [0, true, 0]
    if(type === types.ADD_CAT) {
        let catDatas = [...state.catDatas]
        if(catDatas.length === 0) catDatas.push(state.goodDetail)
        for(let [index, item] of catDatas.entries()){
            if(item.id === state.goodDetail.id) {
                item.count++
                bool = false
            }
            else if(index === catDatas.length -1 && bool) catDatas.push(state.goodDetail)
            totalPrice += item.price.slice(1) * item.count * item.checked
            goodsNum += item.count * item.checked
        }
        return ({
            ...state,
            catDatas,
            totalPrice,
            goodsNum
        })
    }
    else return state
}