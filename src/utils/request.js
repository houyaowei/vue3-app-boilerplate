
import axios from 'axios'
import { Toast } from 'vant'
// import router from '../router'

const _axios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  withCredentials: false,
  timeout: 30000,
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh_CN'
  }
})

_axios.interceptors.response.use(res => {
  if (typeof res.data !== 'object') {
    Toast('服务端异常！')
    return Promise.reject(res)
  }
  console.log(res)
  if (res.status != 200) {
    if (res.data.msg){
      Toast(res.data.msg)
    }
    return Promise.reject(res.data)
  }

  return Promise.resolve(res.data)
})

export default _axios
