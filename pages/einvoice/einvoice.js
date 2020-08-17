// pages/einvoice/einvoice.js
import {
  checkEmail
} from '../../utils/util.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    money: '',
    invoiceInfo:{
      Email: '',
      num: '',
      name: ''
    },
    isEmail: true,
    isnum: true,
    isname: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const info = JSON.parse(options.info);
    this.setData({ money: info.money})
  },
  submit() {
    const {invoiceInfo, isShow} = this.data;
    if(!invoiceInfo.name) this.setData({ isname: false})
    if(!invoiceInfo.num) this.setData({ isnum: false})
    const flag = checkEmail(invoiceInfo.Email);
    this.setData({ isEmail: flag})
    const arr = Object.values(invoiceInfo).filter(function (item) {
      if (item !== '') {
        return true
      }
    })
    if(isShow){
      if(flag && arr.length>=2) this.makeInvoice();
    }else{
      if(flag && arr.length>=3) this.makeInvoice();
    }
  },
  makeInvoice() {
    wx.showToast({
      title: '开票成功',
      icon: 'success',
      duration: 2000
    })
    wx.navigateTo({
      url: '../einvoiceInfo/einvoiceInfo'
    })
  },
  changeType(e) {
    if(e.detail.value === '1'){
      this.setData({ isShow: true})
    }else{
      this.setData({ isShow: false})
    }
  },
  changeEmail(e) {
    const {invoiceInfo} = this.data;
    let Email = 'invoiceInfo.Email';
    this.setData({ [Email]: e.detail})
  },
  changeName(e) {
    const {invoiceInfo} = this.data;
    let name = 'invoiceInfo.name';
    this.setData({ [name]: e.detail})
  },
  changeNum(e) {
    const {invoiceInfo} = this.data;
    let num = 'invoiceInfo.num';
    this.setData({ [num]: e.detail})
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