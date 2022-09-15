import { nextTick } from "vue";
import { setStorage } from "./storage";

window.deviceType = 2; //设备类型  2:安卓   3：ios

/**
 * ios的ua: Mozilla/5.0 (iPhone; CPU iPhone OS 15_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148
 */
const isIOS = window.webkit != undefined;
const isAndroid = () => {
  let ua = window.navigator.userAgent.toLowerCase();
  if (/(android)/.test(ua)) {
    return true;
  }
  return false;
};
//返回原生页面
const backToApp = () => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.backToApp.postMessage(null);
    });
  } else if (isAndroid()) {
    window.main.backToApp();
  }
};
//获取用户token
const invokeUserInfo = () => {
  if (isIOS) {
    window.deviceType = 3;
    nextTick(() => {
      window.webkit.messageHandlers.getUserInfo.postMessage(null);
    });
  } else if (isAndroid()) {
    window.deviceType = 2;
    window.main.getUserInfo();
  }
};
// 跳原生登陆
const jumpToAppLogin = (num = 1) => {
  console.log(num, "防止连续跳转登录页面");
  // 防止连续跳转登录页面
  // num 需要强登陆的都给1，其他的2(当前只有，基金详情和基金pk)
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.jumpToAppLogin.postMessage(num);
    });
  } else if (isAndroid()) {
    window.main.jumpToAppLogin(num);
  }
};
//跳转到设置设备密码
const jumpToSetEquipPass = () => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.jumpToSetEquipmentPass.postMessage(null);
    });
  } else if (isAndroid()) {
    window.main.jumpToSetEquipmentPass();
  }
};
//分享
const jumpToShare = (params = {}) => {
  console.log(params)
  // 分享参数有个type 0=文章列表，1=文章详情，3=文章海报
  if (isIOS) {
    window.deviceType = 3;
    nextTick(() => {
      window.webkit.messageHandlers.jumpToShare.postMessage(
        JSON.stringify(params)
      );
    });
  } else if (isAndroid()) {
    window.deviceType = 2;
    window.main.jumpToShare(JSON.stringify(params));
  }
};
//退出登录
const toLoginOut = () => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.loginOut.postMessage(null);
    });
  } else if (isAndroid()) {
    window.main.loginOut();
  }
};
// 修改登录密码
const jumpToSetLoginPass = () => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.jumpToSetLoginPass.postMessage(null);
    });
  } else if (isAndroid()) {
    window.main.jumpToSetLoginPass();
  }
};
//调用系统电话
const jumpToSystemCall = (telNo = "") => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.jumpToSystemCall.postMessage(telNo);
    });
  } else if (isAndroid()) {
    window.main.jumpToSystemCall(telNo);
  }
};
// 查询状态栏高度
const getStatusBarHeight = () => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.getStatusBarHeight.postMessage(null);
      //顶部状态栏高度
      window.uploadStatusBarHeight = function (param) {
        setStorage("BarHeight", 37.5 / param);
      };
    });
  } else if (isAndroid()) {
    window.main.getStatusBarHeight();
    //顶部状态栏高度
    window.uploadStatusBarHeight = function (param) {
      setStorage("BarHeight", 37.5 / param);
    };
  }
};
// 跳转到直播
const jumpToExternalLinks = (url) => {
  if (isIOS) {
    setTimeout(window.close, 301);
    nextTick(() => {
      window.webkit.messageHandlers.jumpToExternalLinks.postMessage(url);
    });
  } else if (isAndroid()) {
    window.main.jumpToExternalLinks(url);
  }
};
const keyboardListener = () => {
  if (isAndroid()) {
    const innerHeight = window.innerHeight;
    window.addEventListener("resize", () => {
      const newInnerHeight = window.innerHeight;
      if (innerHeight > newInnerHeight) {
        // 键盘弹出事件处理
        // console.log("android 键盘弹出");
      } else {
        // 键盘收起事件处理
        // console.log("android 键盘收起")
      }
    });
  } else if (isIOS) {
    window.addEventListener("focusin", () => {
      // 键盘弹出事件处理
      // console.log("iphone 键盘弹出")
    });
    window.addEventListener("focusout", () => {
      // 键盘收起事件处理
      // console.log("iphone 键盘收起")
    });
  }
};

//自建组合立即体验通知原生
const experienceSelfCompostion = () => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.experienceSelfCompostion.postMessage(null);
    });
  } else if (isAndroid()) {
    window.main.experienceSelfCompostion();
  }
};

//和Mars聊聊
const jumpToAppStoryLine = () => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.jumpToAppStoryLine.postMessage(null);
    });
  } else if (isAndroid()) {
    window.main.jumpToAppStoryLine();
  }
};

//改变状态栏颜色
/**
 *
 * @param {*} value
 * '1' 黑色
 * '2' 白色
 */
const setStatusBarFontColor = (value) => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.setStatusBarFontColor.postMessage(value);
    });
  } else if (isAndroid()) {
    window.main.setStatusBarFontColor(value);
  }
};

// 投顾管家。跳转恒生
const jumpToHengshengH5 = (pageType, productCode) => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.jumpToHengshengH5.postMessage(
        JSON.stringify({ pageType, productCode })
      );
    });
  } else if (isAndroid()) {
    window.main.jumpToHengshengH5(JSON.stringify({ pageType, productCode }));
  }
};
// 开启通知
const openNotification = () => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.openNotification.postMessage(true);
    });
  } else if (isAndroid()) {
    window.main.openNotification(true);
  }
};
// 跳转风力指数二级页
const jumpToPlate = (id) => {
  console.log(id);
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.jumpToPlate.postMessage(id);
    });
  } else if (isAndroid()) {
    window.main.jumpToPlate(id);
  }
};
// 是否开启通知
const isOpenNotification = () => {
  if (isIOS) {
    nextTick(() => {
      console.log("isOpenNotification===isIOS");
      window.webkit.messageHandlers.isOpenNotification.postMessage(null);
    });
  } else if (isAndroid()) {
    window.main.isOpenNotification();
  }
};

/**
 * 跳转到原生tab页,默认为陪伴
 * @param index 首页:0,理财:1,财商:2, 陪伴:3
 */
const goToAppTab = (index = 3) => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.goBackToMain.postMessage(index);
    });
  } else if (isAndroid()) {
    window.main.goBackToMain(index);
  }
};

const setBackgroundColor = (value) => {
  console.log("a安全区1", value);
  if (isIOS) {
    console.log("a安全区2", value);
    nextTick(() => {
      console.log("改变安全区颜色", value);
      window.webkit.messageHandlers.setBackgroundColor.postMessage(value);
    });
  }
};
  
const openNewWebView = (url) => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.openNewWebView.postMessage(url);
    });
  } else if (isAndroid()) {
    window.main.openNewWebView(url);
  }
};

// 返回版本信息
const getVersionInfo = () => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.getVersionInfo.postMessage(null);
      window.updateVersionInfo = function(param) {
        setStorage("versionInfo", param);
        return true
      }
    });
  } else if (isAndroid()) {
    const param = window.main.getVersionInfo()
    setStorage("versionInfo", param);
  }
};

// 升级弹框，本地下载安装
const getVersionUpgrade = () => {
  if (isIOS) {
    nextTick(() => {
      window.webkit.messageHandlers.versionUpgrade.postMessage(null);
    });
  } else if (isAndroid()) {
    window.main.versionUpgrade()
  }
};


export {
  backToApp,
  invokeUserInfo,
  jumpToAppLogin,
  jumpToSetEquipPass,
  jumpToShare,
  toLoginOut,
  getStatusBarHeight,
  jumpToSetLoginPass,
  jumpToSystemCall,
  jumpToExternalLinks,
  keyboardListener,
  experienceSelfCompostion,
  setStatusBarFontColor,
  jumpToHengshengH5,
  jumpToAppStoryLine,
  openNotification,
  isOpenNotification,
  jumpToPlate,
  setBackgroundColor,
  goToAppTab,
  getVersionInfo,
  openNewWebView,
  getVersionUpgrade
};
