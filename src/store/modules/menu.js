import Message from '@lui/lui/lib/message'
import types from '../types'

const state = {
  checkMenuList: []
}

const actions = {
  deleteCheckMenuItem({ commit }, params) {
    commit(types.DELETE_CHECK_MENU_ITEM, params)
  },
  delAll({ commit }, params) {
    commit(types.DEL_ALL, params)
  }
}

const mutations = {
  [types.DELETE_CHECK_MENU_ITEM](state, params) {
    console.log(state, params)
    state.checkMenuList.splice(params, 1)
    Message.warning('已删除快捷菜单')
  },
  [types.DEL_ALL](state) {
    state.checkMenuList = []
  }
}

export default {
  state,
  actions,
  mutations
}
