import { LOADDING } from '../action/action-type'

export default (state, {type, bool})=> {
    if(type === LOADDING) {
        return ({
            ...state,
            isFetching: bool
        })
    }
    else return state
}