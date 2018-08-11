import fetch from 'cross-fetch'
import * as types from './action-type'

export const changeNav = (index,show)=> ({
    type: types.CHANGE_NAV,
    index,
    show
})

export const updataInput = (name, value)=> ({
    type: types.UPDATE_INPUT,
    name,
    value
})

export const switchList = (target, index)=> ({
  type: types.SWITCHLIST,
  target,
  index
})

export const changeGoods = (goods, {push})=> ({
  type: types.CHANGEGOODS,
  goods,
  push
})

export const addCat = ()=> ({
  type: types.ADD_CAT
})

export const add = (id)=> ({
  type: types.ADD,
  id
})

export const reduce = (id)=> ({
  type: types.REDCUE,
  id
})

export const checked = (id)=> ({
  type: types.CHECKED,
  id
})

export const loadding = (bool)=> ({
  type: types.LOADDING,
  bool
})

function requestPosts() {
  return {
    type: types.REQUEST_POSTS
  }
}

function receivePosts(payload) {
  return {
    type: types.RECEIVE_POSTS,
    payload
  }
}

export const fetchPosts = ({doStyle, username, password, history})=> {
  return function (dispatch) {
    dispatch(requestPosts())
    return fetch(`http://localhost:9999/login?doStyle=${doStyle}&username=${username}&password=${password}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json => dispatch(receivePosts({json, history, doStyle}))
      )
  }
}
