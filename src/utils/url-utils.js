/**
 * url工具方法,hash模式是用
 */

const getQueryVariable = (variable) => {
  let _hash = window.location.hash;
  let vars = _hash.split("?");
  let params = {};
  if (vars[1]) {
    let _params = vars[1].split("&")
    _params.forEach(item => {
      let _items = item.split('=');
      params[_items[0]] = _items[1]
    })
  }
  return params[variable]
}
const getUrlPath = ()=>{
  const _hash = window.location.hash;
  const pathWithPrefix = _hash.split("?")[0]
  const _path = pathWithPrefix.substring(1,pathWithPrefix.length)
  return  _path;
}

export {
  getQueryVariable,
  getUrlPath
}
