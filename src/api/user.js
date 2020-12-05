import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/organ/sys/user/login',
    method: 'post',
    data
  })
}

export function getInfo(data) {
  return request({
    url: '/organ/sys/user/info',
    method: 'post',
    data
  })
}

export function getAuth(data) {
  return request({
    url: '/organ/sys/user/auth',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/organ/sys/user/logout',
    method: 'delete'
  })
}
