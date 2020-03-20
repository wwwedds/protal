
import types from '../types'

const state = {
  openedTab: ['index'],
  activeTab: ''
}

const actions = {

}

const mutations = {
 
  [ types.ADD_TAB](state, params) {
    state.openedTab.push(params)
  },
  [ types.CHANGE_TAB](state, params) {
    state.activeTab = params
  }
}

export default {
  state,
  actions,
  mutations
}
