import reduceReducers from 'reduce-reducers'
import { nav } from './nav'
import { userInput } from './userInput'
import { switchList } from './switchList'
import changeGoods from './changeGoods'
import addCat from './addCat'
import add from './add'
import reduce from './reduce'
import checked from './checked'
import loadding from './loadding'
import request from './request'
import receive from './receive'

export default reduceReducers(
    nav, 
    userInput, 
    switchList, 
    changeGoods, 
    addCat,
    add,
    reduce,
    checked,
    loadding,
    request,
    receive
)