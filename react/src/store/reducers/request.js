import { REQUEST_POSTS } from '../action/action-type'

export default (state, {type})=> {
    if(type === REQUEST_POSTS) {
        return ({
            ...state,
            isFetching:true
        })
    }
    else return state
}