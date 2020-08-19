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
    isAuthorization: false,
    show: true,
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
  addCar() {
    wx.navigateTo({
      url: '../addcar/addcar'
    })
  },
  search() {
    wx.navigateTo({
      url: '../search/search'
    })
  },
  pay() {
    wx.navigateTo({
      url: '../pay/pay?carNum='+1
    })
  },
  goExpenditure() {
    wx.navigateTo({
      url: '../expenditure/expenditure'
    })
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
  onCancel: function(e) {
    this.setData({
      value: ""
    });
  },
  onLoad: function () {
    let that = this;
    //进入小程序，若已经授权则自动登录
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
      show: false,
      carList:arr
    })
  },
  getAuthorization(e) {
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
