import {CHECKED}  from '../action/action-type'

export default (state, {type, id})=> {
    if(type === CHECKED) {
        let catDatas = [...state.catDatas]
        let [totalPrice, goodsNum] = [0, 0]
        for(let [index, item]  of catDatas.entries()) {
            if(item.id === id) item.checked === 0 ? item.checked = 1 : item.checked = 0
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