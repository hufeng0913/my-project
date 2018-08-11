import { CHANGE_NAV } from '../action/action-type'

export const nav = (state, action)=> {
  switch(action.type) {
    case CHANGE_NAV :
      return ({
        ...state,
        navDatas: {
          activeNum:action.index,
          show: action.show != null ? action.show : true,
          datas:state.navDatas.datas
        }
      })
    default:
      return state;
  }
}