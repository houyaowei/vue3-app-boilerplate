
import axios from 'axios'
import { Toast } from 'vant'
// import router from '../router'
let loaddingCounter = 0;
const controller = new AbortController();

const _axios = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API,
  withCredentials: false,
  timeout: 30000,
  headers: {
    'Accept': 'application/json, text/plain, */*',
    'Accept-Language': 'zh_CN'
  }
})
//  请求拦截器
_axios.interceptors.request.use(
  (config) => {
    ++loaddingCounter;
    if (!config.noLoading) {
      useLoadingStore().setLoadingInfo(true); //  打开加载动画
    }
    config.cancelToken = source.token;
    return config;
  },
  (error) => {
    return Promise.error(error);
  }
);

_axios.interceptors.response.use(res => {
    --loaddingCounter;
    if (loaddingCounter == 0) {
      useLoadingStore().setLoadingInfo(false);
    }
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
  },
  (err) => {
    --loaddingCounter;
    if (loaddingCounter == 0) {
      useLoadingStore().setLoadingInfo(false);
    }
    // 接口取消
    if (axios.isCancel(err)) {
      console.log("request cancel ", JSON.stringify(err));
    }
    if (err.message && !axios.isCancel(err)) {
      Toast(err.message);
    } else {
      Toast.clear();
    }
    return Promise.reject(err.data);
  }
)

export default _axios
