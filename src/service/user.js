import axios from '../utils/request'

export function getAllUsers(query) {
  return axios({
    url: '/user/list',
    method: 'get',
    params: query
  });
}
export function registerUser(params) {
  console.log('store-> registerUser')
  return axios.post('/user',params)
}