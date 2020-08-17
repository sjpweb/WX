// pages/repeatedly/repeatedly.js
import {
  checkEmail
} from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    value: '',
    Email: '',
    result: false,
    isShow: true,
    isErrorMessage: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChange(e) {
    this.setData({
      value: e.detail
    })
  },
  seek() {
    this.setData({
      result: true
    })
  },
  send() {
    const flag = checkEmail(this.data.Email);
    this.setData({
      isErrorMessage: flag
    })
  },
  changeEmail(e) {
    this.setData({
      Email: e.detail
    })
  },
  help() {

  },
  goback() {
    wx.navigateBack({//返回
      delta: 1
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