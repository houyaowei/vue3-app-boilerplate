/**
 * 目的：处理原生手势返回的问题
 * 生产-消费者模式,事件对象为单对象，所以不用考虑消费者列表
 * @type {{CusEvent}}
 */

import { isFunction } from "javascript-validate-utils";

const CusEvent = window.CusEvent = {}
//target为要执行的方法，默认为空
CusEvent.target = ()=>{}
//默认可以操作
CusEvent.disableOperation = true

CusEvent.fire = (event)=> {
  if(isFunction(CusEvent.target)) {
    CusEvent.target(event);
  } else {
    console.log("返回异常")
  }
}

export {
  CusEvent
}

window.onBackKeyDown = function () {
  //
  if (CusEvent.disableOperation) {
    const _event = new Event('backKeyDown', {
      bubbles: false,
      cancelable: true
    })
    console.log("android 返回键触发,target:", CusEvent.target,',event:',_event)
    CusEvent.fire(_event);
  }
}