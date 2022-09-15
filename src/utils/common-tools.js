import { isString, isEmpty } from "javascript-validate-utils";
import { Toast } from "vant";

/** @type {*} */
const tools = {
  // 取月和日
  formatTimeFromStr: (str) => {
    if (str) {
      let data = str.split("-").join("");
      if (data.length == 8) {
        // let year = str.subString(0,4);
        let math = data.substring(4, 6);
        let day = data.substring(6, 8);
        return math + "-" + day;
      } else {
        return "";
      }
    } else {
      return "";
    }
  },
  formatTimeFromStr1: (str) => {
    if (!str) {
      return "";
    }
    //格式如：20220505
    if (str.length == 8) {
      let year = str.substring(0, 4);
      let math = str.substring(4, 6);
      let day = str.substring(6, 8);
      return year + "-" + math + "-" + day;
    } else {
      return str;
    }
  },
  formatMonthAndDay: (dateStr) => {
    if (!dateStr) {
      return "";
    }
    dateStr = dateStr.replace(":", "").replace("-", "").replace(/\s*/g, "");
    const resValue = dateStr.substring(dateStr.length - 4); // '0620格式'
    if (resValue.length == 4) {
      return resValue.replace(/(\d{2})(\d{2})/, "$1-$2");
    }
    return "";
  },
  formatTimeFromStr2: (str) => {
    //格式如：20220505
    if (str.length == 8) {
      let year = str.substring(0, 4);
      let math = str.substring(4, 6);
      // let day = str.substring(6,8)
      return year + "-" + math;
    } else {
      return str;
    }
  },
  format: (date, _pattern) => {
    let _date = new Date(date);
    const o = {
      "M+": _date.getMonth() + 1, // 月份
      "d+": _date.getDate(), // 日
      "h+": _date.getHours(), // 小时
      "m+": _date.getMinutes(), // 分
      "s+": _date.getSeconds(), // 秒
      "q+": Math.floor((_date.getMonth() + 3) / 3), // 季度
      S: _date.getMilliseconds(), // 毫秒
    };
    if (/(y+)/.test(_pattern)) {
      _pattern = _pattern.replace(
        RegExp.$1,
        (_date.getFullYear() + "").substr(4 - RegExp.$1.length)
      );
    }
    for (let k in o) {
      if (new RegExp("(" + k + ")").test(_pattern)) {
        _pattern = _pattern.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ("00" + o[k]).substr(("" + o[k]).length)
        );
      }
    }
    return _pattern;
  },
  //对象深度克隆
  deepClone: (origin) => {
    let _target = null;
    if (!origin) {
      return {};
    }
    _target = JSON.stringify(origin);
    return JSON.parse(_target);
  },
  telFormat: (tel) => {
    tel = tel.toString();
    const _len = tel.length;
    if (_len <= 3) {
      return tel;
    } else if (_len <= 7) {
      return tel.replace(/(\d{3})(\d{0,4})/, "$1 $2");
    } else {
      return tel.replace(/(\d{3})(\d{4})/, "$1 $2 ");
    }
  },

  // 输入框控制输入两位小数
  controlInputTwoDecimal: (num) => {
    num = num.toString().match(/^\d*(\.?\d{0,2})/g)[0] || null;
    return num;
  },

  formatStrToNum: (str) => {
    //1,2000.00 => 12000.00
    if (!str) {
      return 0;
    }
    // console.log('common-tools formatStrToNum,参数： ', str)
    const strNum = str.toString().replace(/\,/g, "");
    return isNaN(Number(strNum)) ? 0 : Number(strNum);
  },
  //日期格式化
  formatTime: (_d, pattern) => {
    if (!_d) {
      return tools.format(new Date(), pattern);
    }
    return tools.format(_d, pattern);
  },
  trim: (str) => {
    if (!isString(str)) {
      return "";
    }
    return str.replace(/\s*/g, "");
  },
  // 数组拉平，deepFlatten([1,[2],[[3],4]]) -> [1,2,3,4]
  arrayFlatten: (arr) =>
    arr.reduce(
      (a, v) => a.concat(Array.isArray(v) ? tools.arrayFlatten(v) : v),
      []
    ),

  arrayUnique: (arr) => {
    return arr.filter((i) => arr.indexOf(i) === arr.lastIndexOf(i));
  },
  /**
   * 获得url的查询参数
   * "https://developer.mozilla.org/en-US/docs/Web/API/URL_API?name=hyw&age=25&appId=22222&from=mdn"
   * @param {*} url
   * @returns {name: 'hyw', age:25,appId: '22222', from:'mdn'}
   */
  getQueryParams: (url) => {
    if (!url) {
      return {};
    }
    let addr = new URL(url);
    return addr.searchParams;
  },
  /**
   * 数字千分符  1000.22 => 1,000.22
   * @param {*} num
   * @returns
   */
  numFormate: (num) => {
    if (!num) {
      return "0.00";
    }
    //fixed: 如果有逗号会有转换错误的问题
    num = num.toString().replace(",", "");
    num = Number(num).toFixed(2);
    let res = num.toString().replace(/\d+/, function (n) {
      return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
        return $1 + ",";
      });
    });
    return res;
  },
  trimPercent: (param) => {
    param = param.toString();
    let index = param.lastIndexOf("%");
    if (index > 0) {
      return param.substring(0, index);
    } else {
      return "";
    }
  },
  isBiggerThanZero: (num) => {
    let _num = Number(num);
    return _num > 0;
  },
  telDesensitization: (str, count) => {
    if (isEmpty(str)) {
      return "*".repeat(count);
    }
    return str.slice(0, 3) + "****" + str.slice(str.length - count);
  },
  /**
   * 数字转汉字  1、2 =>一、二
   * @param {*} num
   * @returns
   */
  getChinaNum: (num) => {
    let n = num;
    if (!Number.isInteger(n) && n < 0) {
      return;
    }
    const digits = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
    const positions = [
      "",
      "十",
      "百",
      "千",
      "万",
      "十万",
      "百万",
      "千万",
      "亿",
      "十亿",
      "百亿",
      "千亿",
    ];
    const charArray = String(n).split("");
    let result = "";
    let prevIsZero = false;
    //处理0  deal zero
    for (let i = 0; i < charArray.length; i++) {
      const ch = charArray[i];
      if (ch !== "0" && !prevIsZero) {
        result += digits[parseInt(ch)] + positions[charArray.length - i - 1];
      } else if (ch === "0") {
        prevIsZero = true;
      } else if (ch !== "0" && prevIsZero) {
        result +=
          "零" + digits[parseInt(ch)] + positions[charArray.length - i - 1];
      }
    }
    //处理十 deal ten
    if (n < 100) {
      result = result.replace("一十", "十");
    }
    return result;
  },

  /**
   * 四舍五入保留两位小数
   * 若第2位小数为0，则保留一位小数
   */
  keepTwoDecimal: (num) => {
    let resultNum = parseFloat(num);
    if (isNaN(resultNum)) {
      return false;
    }
    resultNum = Math.round(num * 100) / 100;
    return resultNum;
  },
  /**
   * 单纯保留n位小数（不要四舍五入===默认2位）type=n
   */
  KeepTwoDecimals: (num, type = 2) => {
    let resultNum = "";
    // 换成字符串根据.换成数组例如 0.11 = ['0','11'] || 0.1 = ['0','1']
    let arr = String(num).split(".");
    // 截取2位 如果第二位不足拼接0,之后保留两位（因为截取原因就两位所有toFixed并不会四舍五入，同时保证了数据是小数一位时后面加0）
    resultNum = Number(
      arr[0] + "." + (arr[1] ? arr[1].slice(0, type) : "0")
    ).toFixed(type);
    return num ? resultNum : "0.00";
  },
  /**
   * 匹配基金状态
   */
  getFundState: (type) => {
    // FUNDSTATUS_0("0", "正常开放"),
    // FUNDSTATUS_1("1", "认购时期"),
    // FUNDSTATUS_2("2", "停止赎回"),
    // FUNDSTATUS_3("3", "停止申购"),
    // FUNDSTATUS_4("4", "封闭期"),
    // FUNDSTATUS_5("5", "停止交易"),
    // FUNDSTATUS_6("6", "基金终止"),
    // FUNDSTATUS_7("7", "权益登记"),
    // FUNDSTATUS_8("8", "红利发放"),
    // FUNDSTATUS_9("9", "发行失败"),
    // FUNDSTATUS_a("a", "非本机构代销"),
    // FUNDSTATUS_b("b", "发行成功"),
    // FUNDSTATUS_z("z", "转认购期");
    let name = "";
    switch (String(type)) {
      case "0":
        name = "正常开放";
        break;
      case "1":
        name = "认购时期";
        break;
      case "2":
        name = "停止赎回";
        break;
      case "3":
        name = "停止申购";
        break;
      case "4":
        name = "封闭期";
        break;
      case "5":
        name = "停止交易";
        break;
      case "6":
        name = "基金终止";
        break;
      case "7":
        name = "权益登记";
        break;
      case "8":
        name = "红利发放";
        break;
      case "9":
        name = "发行失败";
        break;
      case "a":
        name = "非本机构代销";
        break;
      case "b":
        name = "发行成功";
        break;
      case "z":
        name = "转认购期";
        break;
    }
    return name;
  },
  // http 转https
  httpTransformationHttps: (val) => {
    if (!val) return;
    val = val.replace(/^http:\/\//i, "https://");
    return val;
  },

  loadJs: (src) => {
    return new Promise((resolve, reject) => {
      let script = document.createElement("script");
      script.type = "text/javascript";
      script.src = src;
      document.body.appendChild(script);

      script.onload = () => {
        resolve();
      };
      script.onerror = () => {
        reject();
      };
    });
  },
};

export default tools;
