//index.js
//获取应用实例
const app = getApp()
import {
  filterText
} from '../../utils/util.js';
Page({
  data: {
    userInfo: '',
    navBarHeight: app.globalData.navBarHeight,
    swiperCurrent:0,
    isAuthorization: false,   //默认未授权
    carList: [
      {
        carNum: null,
      }
    ],
    indicatorDots: false,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    value: '',
  },
  showToast(){
    wx.showToast({
      title: '请点击左上角授权登录',
      icon: 'none',
      duration: 2000
    })
  },
  addCar() {
    if(this.data.isAuthorization){
      wx.navigateTo({
        url: '../addcar/addcar'
      })
      return;
    }
    this.showToast();
  },
  search() {
    if(this.data.isAuthorization){
      wx.navigateTo({
        url: '../search/search'
      })
      return;
    }
    this.showToast();
  },
  pay() {
    if(this.data.isAuthorization){
      wx.navigateTo({
        url: '../pay/pay?carNum='+1
      })
      return;
    }
    this.showToast();
  },
  goExpenditure() {
    if(this.data.isAuthorization){
      wx.navigateTo({
        url: '../expenditure/expenditure'
      })
      return;
    }
    this.showToast();
  },
  onSearch: function(e) {
    this.setData({
      value: e.detail
    });
  },
  swiperChange: function(e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  onLoad: function () {
    let that = this;
    //进入小程序，若已经授权则自动获取用户信息
    wx.getSetting({
      success(res) {
        if (res.authSetting['scope.userInfo']) {
          that.setData({
            isAuthorization: res.authSetting['scope.userInfo']
          })
          that.autoLogin();
        }
      }
    })
    // wx.setStorageSync('openid', res.data.userCode);
  },
  getUserInfo() {
    const arr = [
      {
        carNum: '京A88888',
        type: 0,
        state: 0,
        entranceTimer: '2020年07月15日 17:00:00',
        monthlyTimer: '2020年08月10日'
      },
      {
        carNum: '京A88888',
        type: 1,
        state: 0,
        entranceTimer: '2020年07月15日 17:00:00',
        stopTimer: '0天1小时'
      },
      {
        carNum: '京A88888',
        type: 2,
        state: 0,
        entranceTimer: '2020年07月15日 17:00:00',
        stopTimer: '0天1小时'
      },
      {
        carNum: '京A88888',
        type: 3,
        state: 0,
        entranceTimer: '2020年07月15日 17:00:00',
        stopTimer: '0天1小时'
      },
      {
        carNum: '京A88888',
        type: 4,
        state: 0,
        entranceTimer: '2020年07月15日 17:00:00',
        stopTimer: '0天1小时'
      },
      {
        carNum: '京A88888',
        state: 1,
      }
    ]
    arr.push(this.data.carList)
    this.setData({
      carList:arr
    })
  },
  getAuthorization(e) {  // 用户授权触发
    this.setData({
      isAuthorization: true
    })
    const {detail:{detail:{encryptedData,iv}}} = e;
    wx.login({
      success: res => {
        const code = res.code;
        const param = {
          encryptedData: encryptedData,
          iv: iv,
          code: code
        }
        console.log(param)
      }
    })
    this.getUserInfo();
  },
  autoLogin() {
    let that = this;
    // 登录
    wx.login({
      success: res => {
        const code = res.code;
        wx.getUserInfo({
          withCredentials: true,
          success: function(res) {
            const param = {
              encryptedData: res.encryptedData,
              iv: res.iv,
              code: code
            }
            console.log(param);
            that.getUserInfo();
          },
          fail: function(res) {
            console.log(err);
          },
        })
      }
    })
  },
  bindGetUserInfo(e) {
    console.log(e)
  }
})
