import types from '../types'

const state = {
  currentPin: ''
}

// 定义 getters
const getters = {
  currentPin(state) {
    return state.currentPin
  }
}

const actions = {
  currentPin({ commit, state }) {
    commit(types.CURRENT_PIN)
  }
}

const mutations = {
  [types.CURRENT_PIN](state) {
    state.currentPin++
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
