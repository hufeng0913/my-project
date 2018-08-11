import { SWITCHLIST } from '../action/action-type'
export const switchList = (state, {type, target, index})=> {
    switch(type) {
        case SWITCHLIST :
          return ({
              ...state,
              userToEvaluate: target === '图文详情' ? true : false,
              activeNum: index
          })
        default :
          return state
    }
}