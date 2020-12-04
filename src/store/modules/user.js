import { login, logout, getInfo, getAuth } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import { resetRouter } from '@/router'
import da from 'element-ui/src/locale/lang/da'

const getDefaultState = () => {
  return {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    organs: []
  }
}

const state = getDefaultState()

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState())
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_ORGANS: (state, organs) => {
    state.organs = organs
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { phone, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ phone: phone.trim(), password: password }).then(res => {
        const { data } = res
        commit('SET_TOKEN', data.token)
        commit('SET_ORGANS', data.organs)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // get user auth
  getAuth({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      getAuth(userInfo).then(response => {
        const { data } = response
        if (!data) {
          reject('请重新登录')
        }
        const roles = data.permission
        if (!roles || roles.length <= 0) {
          reject('没有权限，请联系管理员')
        }
        commit('SET_NAME', data.userName)
        // todo 修改
        commit('SET_AVATAR', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif')
        setToken(data.token)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // get user info
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo({ token: state.token }).then(response => {
        const { data } = response
        if (!data) {
          reject('请重新登录')
        }
        const roles = data.permission
        if (!roles || roles.length <= 0) {
          reject('没有权限，请联系管理员')
        }
        commit('SET_ROLES', roles)
        commit('SET_NAME', data.userName)
        // todo 修改
        commit('SET_AVATAR', 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif')
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      logout(state.token).then(() => {
        removeToken() // must remove  token  first
        resetRouter()
        commit('RESET_STATE')
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      removeToken() // must remove  token  first
      commit('RESET_STATE')
      resolve()
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

