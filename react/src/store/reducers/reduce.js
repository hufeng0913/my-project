import { REDCUE } from '../action/action-type'

export default (state, {type, id})=> {
    if(type === REDCUE) {
        let catDatas = [...state.catDatas]
        let [totalPrice, goodsNum] = [0, 0]
        for(let [index, item]  of catDatas.entries()) {
            if(item.id === id) item.count === 1 ? item.count = 1 : item.count--
            totalPrice += item.price.slice(1) * item.count
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