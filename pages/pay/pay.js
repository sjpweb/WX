// pages/pay/pay.js
import {
  toDecimal2,
  chargeRule,
  formatTime
} from '../../utils/util.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    carInfo:{
      carNum: '京A88888',
      stopTimer: '3小时37分钟47秒',
      paySataus:0,
      money: '15.00',
    },
    isValid: true,
    showFeeRule: false,
    iphoneXbtm: '',
    countdownTime: ['--', '--'],
    expenditureInfo:{
      entTimer: '2020-01-30 10:23:31',
      parkling: '大兴停车场',
      allMoeny: '39.00',
      discounts: '5.00',
      havePay: '15.00'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let that = this;
    let time = 300;
    that.data.timer = setInterval(() => {
      that.setData({
        countdownTime: formatTime(time).split(":")
      })
      time--;
      if (time < 0) {
        that.setData({
          isValid: false,
          timer: null
        })
        clearInterval(that.data.timer);
      }
    }, 1000);

    wx.getSystemInfo({
      success: function(res) {
        //model中包含着设备信息
        console.log(res.model)
        var model = res.model
        if (model.search('iPhone X') != -1) {
          that.setData({
            iphoneXbtm: "68rpx"
          })
        }
      }
    })
  },
  lookRule() {
    this.setData({
      showFeeRule: true
    })
  },
  hideFeeRule() {
    this.setData({
      showFeeRule: false
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})