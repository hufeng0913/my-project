import { UPDATE_INPUT, REQUEST_POSTS, RECEIVE_POSTS} from '../action/action-type'

export const userInput = (state, action)=> {
    switch(action.type) {
        case UPDATE_INPUT :
          return ({
              ...state,
              userData:{
                ...state.userData,
                [action.name] : action.value ? action.value : ''
              }
          })
        case REQUEST_POSTS :
          return ({
            ...state,
            isFetching: false
          })
        case RECEIVE_POSTS :
          switch(action.payload.doStyle){
            case 'logIn' :
              if(action.payload.json.username === "OK" && action.payload.json.password === "OK") {
                localStorage.setItem('name', state.userData.username);
                setTimeout(()=> action.payload.history.push('/home'), 0)
              }
              else if(action.payload.json.username === "NG") alert('用户名不存在')
              else if(action.payload.json.password === "NG") alert('用户名与密码不匹配')
              return state
            case 'register' :
              if(action.payload.json.register === "OK") {
                localStorage.setItem('name', state.userData.username);
                setTimeout(()=> action.payload.history.push('/home'), 0)
              }
              else if(action.payload.json.username === "NG") alert('Sorry,用户名已经存在')
              return state
          }
        default :
          return state
    }
}