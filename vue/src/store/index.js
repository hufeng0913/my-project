import Vue from 'vue'
import Vuex from 'vuex'
import actions from '../store/action'
import state from '../store/state'
import mutations from '../store/mutation'
import getters from '../store/getters'

Vue.use(Vuex)

export default new Vuex.Store({
    actions,
    mutations,
    getters,
    state
});