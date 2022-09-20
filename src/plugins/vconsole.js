/**
 * web调试工具,
 * 注意：上线去需要在main.js中去掉入口
 */

import VConsole from 'vconsole';

let _vConsole = null
console.log('import.meta.env.MODE:', import.meta.env.MODE)
if (import.meta.env.MODE == 'test' || import.meta.env.MODE == 'development') {
  _vConsole = new VConsole()
}

export default _vConsole
