import { RECEIVE_POSTS } from '../action/action-type'

export default (state, {type})=> {
    if(type === RECEIVE_POSTS) {
        return ({
            ...state,
            isFetching:false
        })
    }
    else return state
}