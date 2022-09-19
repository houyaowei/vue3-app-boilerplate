/**
 * 1、可以在config中增加hideAlert=true，隐藏某次请求的toast提示
 */
import axios from 'axios'
import { Toast } from 'vant'
import { isObject } from "javascript-validate-utils";

let loaddingCounter = 0;
// cancel request
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
      useLoadingStore().setLoadingInfo(true);
    }
    return {
      ...config,
      signal: controller.signal
    };
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
    if (!isObject(res.data)) {
      Toast('服务端异常！')
      return Promise.reject(res)
    }
    if (res.status != 200) {
      if (res.config.hideAlert == true) {
        return Promise.reject(res.data.msg)
      } else {
        if (res.data.msg){
          Toast(res.data.msg)
        }
        return Promise.reject(res.data)
      }
    }
    return Promise.resolve(res.data)
  },
  (err) => {
    --loaddingCounter;
    if (loaddingCounter == 0) {
      useLoadingStore().setLoadingInfo(false);
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
