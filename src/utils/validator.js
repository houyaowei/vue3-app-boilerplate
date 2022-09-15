import { Toast } from "vant";
// import tools from "@/utils/common-tools";

// 身份证号验证
export function isIdCard(val) {
  var format =
    /^(([1][1-5])|([2][1-3])|([3][1-7])|([4][1-6])|([5][0-4])|([6][1-5])|([7][1])|([8][1-2]))\d{4}(([1][9]\d{2})|([2]\d{3}))(([0][1-9])|([1][0-2]))(([0][1-9])|([1-2][0-9])|([3][0-1]))\d{3}[0-9xX]$/;
  if (!val) {
    Toast("请输入身份证号");
    return false;
  } else if (!format.test(val)) {
    Toast("请输入正确的身份证号");
    return false;
  } else {
    return true;
  }
}

// 手机号验证
export function isPhone(val) {
  var format = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  val = String(val).replace(/\s+/g, '')
  if (!val) {
    Toast("请输入手机号");
    return false;
  } else if (!format.test(val)) {
    Toast("请输入正确的手机号");
    return false;
  } else {
    return true;
  }
}

// 验证码验证
export function isCode(val) {
  var format = /^[0-9]{6}$/;
  if (!val) {
    Toast("请输入验证码");
    return false;
  } else if (!format.test(val)) {
    Toast("请输入正确的验证码");
    return false;
  } else {
    return true;
  }
}

// 银行卡验证 10 - 19位数字
export function isBank(val) {
  var format = /^\d{10,19}$/;
  val = val.replace(/\s+/g, '')
  if (!val) {
    Toast("请输入银行卡号");
    return false;
  } else if (!format.test(val)) {
    Toast("请输入正确的银行卡号");
    return false;
  } else {
    return true;
  }
}

// 表单自定义校验，页面没有用form写的情况下
export function validator(rule, formData) {
  let errorMessage = "";
  for (let key in rule) {
    let ruleItem = rule[key];
    if (ruleItem.required) {
      if (!formData[key]) {
        errorMessage = ruleItem.message;
        break;
      }
    }

    if (!ruleItem.required && !formData[key]) {
      continue;
    }

    if (ruleItem.validator instanceof RegExp) {
      if (!ruleItem.validator.test(formData[key])) {
        errorMessage = ruleItem.message;
        break;
      }
    }

    if (typeof ruleItem.validator === "function") {
      if (!ruleItem.validator(formData[key])) {
        errorMessage = ruleItem.message;
        break;
      }
    }
  }

  return errorMessage
    ? { result: false, message: errorMessage }
    : { result: true, message: errorMessage };
}

// 大于等于0的数字  两位小数
export function isPosTwodec(val) {
  let reg = /^[0-9]+(.[0-9]{1,2})?$/;
  if (!val && val !== 0) {
    Toast("请输入");
    return false;
  } else if (!reg.test(val)) {
    Toast("只支持最多两位小数的正数");
    return false;
  } else {
    return true;
  }
}

// 判断是在手机还是电脑
export function isMobile_pc() {
  let flag = navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
  return flag;
}
// 判断是在安卓还是ios打开
export function is_andriod_ios() {
    var u = navigator.userAgent;
    return {
        //移动终端浏览器版本信息
        trident: u.indexOf("Trident") > -1, //IE内核
        presto: u.indexOf("Presto") > -1, //opera内核
        webKit: u.indexOf("AppleWebKit") > -1, //苹果、谷歌内核
        gecko: u.indexOf("Gecko") > -1 && u.indexOf("KHTML") == -1, //火狐内核
        mobile:
            !!u.match(/AppleWebKit.*Mobile/i) ||
            !!u.match(
                /MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/
            ), //是否为移动终端
        ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
        android: u.indexOf("Android") > -1 || u.indexOf("Linux") > -1, //android终端或者uc浏览器
        iPhone: u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1, //是否为iPhone或者QQHD浏览器
        iPad: u.indexOf("iPad") > -1, //是否iPad
        webApp: u.indexOf("Safari") == -1, //是否web应该程序，没有头部与底部
    };
}
// 生成uid
export function guid() {
  function S4() {
     return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
  return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}