import { isObject } from "javascript-validate-utils";
const storage = window.sessionStorage;

/**
 * 为了减少覆盖的风险，key的规则如下：{模块_二级区别项_key}
 * @param {*} key 
 * @param {*} val 
 */
export function setStorage(key, val) {
  if (key && val) {
    if (isObject(val)) {
      val = JSON.stringify(val);
    }
    storage.setItem(key, val);
  }
}

export function getStorage(key) {
  let value = storage.getItem(key);
  value = value === null ? "" : value;
  return value;
}

export function removeItem(key) {
  if (storage.getItem(key)) {
    storage.removeItem(key);
  }
}
export function clearStorage(){
  storage.clear();
}

export default {
  getStorage,
  setStorage,
  removeItem,
  clearStorage
};
