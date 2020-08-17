// const formatTime = date => {
//   const year = date.getFullYear()
//   const month = date.getMonth() + 1
//   const day = date.getDate()
//   const hour = date.getHours()
//   const minute = date.getMinutes()
//   const second = date.getSeconds()

//   return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
// }

// const formatNumber = n => {
//   n = n.toString()
//   return n[1] ? n : '0' + n
// }

// module.exports = {
//   formatTime: formatTime
// }

const formatTime = num =>{
  const min = Math.floor(num/60);
  const sec = num%60;
  const str = formatNumber(min)+':'+formatNumber(sec);
  return str;
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const urlencode =(data) => {
  var str = '';
  Object.keys(data).map(item => {
    str += "&" + item + "=" + data[item];
  })
  var params = '?' + str.slice(1);
  return params;
}

//保留两位小数
const toDecimal2 = (x) => {
  var f = parseFloat(x);
  if (isNaN(f)) {
    return false;
  }
  f = Math.round(f * 100) / 100;
  var s = f.toString();
  var rs = s.indexOf('.');
  if (rs < 0) {
    rs = s.length;
    s += '.';
  }
  while (s.length <= rs + 2) {
    s += '0';
  }
  return s;
}

//返回车牌颜色
const carColor = function (value) {
  if (value == '1') return '蓝牌 ';
  if (value == '2') return '黄牌 ';
  if (value == '3') return '白牌 ';
  if (value == '4') return '黑牌 ';
  if (value == '5') return '绿牌 ';
  return '';
}

//返回车辆类型
const carType = function (value) {
  if (value == '1') return '小型汽车，';
  if (value == '2') return '中型汽车，';
  if (value == '3') return '大型汽车，';
  if (value == '4') return '其他汽车，';
  return '';
}

//拼接计费规则
const chargeRule = function (data) {
  let feeStr = "";
  let feeArr = [];
  data.map(item => {
    let timeType = item.timeType == 0 ? "小时" : "分钟";
    if (item.valuationType == "0") {
      feeStr =
        "统一计费：" +
        carColor(item.licenseColor) +
        carType(item.carType) +
        "免费时间" +
        item.freeTime +
        "分钟，起步价" +
        item.firstTime +
        timeType +
        "/" +
        item.firstPrice +
        "元，后续每" +
        item.afterTime +
        timeType +
        "/" +
        item.afterPrice +
        "元。";
      feeArr.push(feeStr);
    } else if (item.valuationType == "1") {
      feeStr =
        "分段计费：" +
        carColor(item.licenseColor) +
        carType(item.carType) +
        "白天：起步价" +
        item.dayFirstTime +
        timeType +
        "/" +
        item.dayFirstPrice +
        "元，后续每" +
        item.dayAfterTime +
        timeType +
        "/" +
        item.dayAfterPrice +
        "元。" +
        "晚上：起步价" +
        item.nightFirstTime +
        timeType +
        "/" +
        item.nightFirstPrice +
        "元，后续每" +
        item.nightAfterTime +
        timeType +
        "/" +
        item.nightAfterPrice +
        "元。";
      feeArr.push(feeStr);
    } else if (item.valuationType == "2") {
      feeStr =
        "按次计费：" +
        carColor(item.licenseColor) +
        carType(item.carType) +
        "免费时间" +
        item.freeTime +
        "分钟，单次停车" +
        item.loopHour +
        timeType +
        "内，收费" +
        item.firstPrice +
        "元，超出时间重新计费。";
      feeArr.push(feeStr);
    }
  });

  return feeArr;
}
// 判断邮箱
const checkEmail = (value) => {
  const reg = /^.+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/;
  if (!reg.test(value)) {
    return false;
  }
  return true;
};

module.exports = {
  urlencode: urlencode,
  formatTime: formatTime,
  toDecimal2: toDecimal2,
  chargeRule: chargeRule,
  checkEmail: checkEmail
}

