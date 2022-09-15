
/**
 * 原生传的数据全部存了，所以提供这个方法方便取值,
 * 目前传的参数有:
 * token,
 * accountType: 账户类型
 * phoneNum: 手机号,
 * systemType: 系统状态，1：Android，2：IOS
 */
import { getStorage } from "./storage"

const getSpecialKey = (key)=> {
  const _authStr = getStorage('auth');
  if(_authStr){
    try {
      return JSON.parse(_authStr)[key]
    }catch{
      return ''
    }
  }
  return  '';
}

export {
  getSpecialKey
}
