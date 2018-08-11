import * as types from '../action/action-type'

export default (state, {type, goods, push})=> {
    switch(type) {
        case types.CHANGEGOODS :
          push('/productDetails')
          return ({
            ...state,
            goodDetail: goods
          })
        default :
          return state
    }
}