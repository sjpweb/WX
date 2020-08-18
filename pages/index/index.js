//index.js
//获取应用实例
const app = getApp()
import {
  filterText
} from '../../utils/util.js';
Page({
  data: {
    navBarHeight: app.globalData.navBarHeight,
    swiperCurrent:0,
    carList: [
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
      },
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
    wx.redirectTo({
      url: '../addcar/addcar'
    })
  },
  search() {
    wx.redirectTo({
      url: '../search/search'
    })
  },
  pay() {
    wx.redirectTo({
      url: '../pay/pay?carNum='+1
    })
  },
  goExpenditure() {
    wx.redirectTo({
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
  bindGetUserInfo: function(e) {
    console.log(e.detail.userInfo)
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          console.log(res)
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
