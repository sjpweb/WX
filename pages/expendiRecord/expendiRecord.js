// pages/pay/pay.js
import {
  toDecimal2,
  chargeRule,
  formatTime
} from '../../utils/util.js';
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isBtn: true,
    carInfo:{
      carNum: '京A88888',
      stopTimer: '3小时37分钟47秒',
      money: '15.00',
    },
    isValid: true,
    showFeeRule: false,
    expenditureInfo:{
      entTimer: '2020-01-30 10:23:31',
      parkling: '大兴机场停车场',
      allMoeny: '39.00',
      discounts: '5.00',
      havePay: '15.00'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if(options.isBtn) this.setData({isBtn: false})
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

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
  goInvoice() {
    wx.redirectTo({
      url: '../einvoice/einvoice'
    })
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