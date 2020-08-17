//项目URL相同部分，减轻代码量，同时方便项目迁移

/**
 * 切换环境
 * 1、utils/request.js
 * 切换接口地址
 * 2、utils/util.js
 * 切换app下载地址
 * 3、utils/util.js
 * 切换索取电子发票url
 */

// var host = 'https://m.s-park2019.com';   //正式环境
var host = 'https://uat-m.s-park2019.com'; //预发布环境
// var host = 'https://dev-m.s-park2019.com'; //测试环境

/**
 * POST请求，
 * URL：接口
 * postData：参数，json类型
 * doSuccess：成功的回调函数
 * doFail：失败的回调函数
 */
function fetchPost(url, postData, doSuccess, doFail) {
  wx.request({
    //项目的真正接口，通过字符串拼接方式实现
    url: host + url,
    header: {
      "content-type": "application/x-www-form-urlencoded;charset=UTF-8"
    },
    data: postData,
    method: 'POST',
    success: function(res) {
      //参数值为res.data,直接将返回的数据传入
      doSuccess(res.data);
    },
    fail: function(err) {
      doFail(err);
    },
  })
}

//GET请求，
function fetchGet(url, getData, doSuccess, doFail) {
  wx.request({
    url: host + url,
    header: {
      "content-type": "application/json;charset=UTF-8"
    },
    data: getData ? getData: '',
    method: 'GET',
    success: function(res) {
      doSuccess(res.data);
    },
    fail: function(err) {
      doFail(err);
    },
  })
}

export {
  fetchGet,
  fetchPost
}