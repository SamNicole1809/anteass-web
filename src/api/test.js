import request from '@/utils/request'

export function getTest(params) {
  return request({
    url: '/request',
    method: 'get',
    params: params
  })
}

export function postTest(data) {
  return request({
    url: '/request',
    method: 'post',
    data
  })
}

export function putTest(data) {
  return request({
    url: '/request',
    method: 'put',
    data
  })
}

export function deleteTest(params) {
  return request({
    url: '/request',
    method: 'delete',
    params: params
  })
}
