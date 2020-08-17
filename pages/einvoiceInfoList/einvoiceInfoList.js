// pages/einvoiceInfoList/einvoiceInfoList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    invoiceList:[
      {
        carNum: '京A99999',
        parkName: '北京大兴停车场',
        monthTimer: '2020年9月15日 - 2020年11月15日',
        type: 0,
        money: 30,
        checked: false
      },
      {
        carNum: '京A88888',
        parkName: '北京大兴停车场',
        entertimer: '2020年9月25日 13:32:21',
        stopTimer: '0天2小时45分钟',
        type: 1,
        money: 600,
        checked: false
      },
      {
        carNum: '京A88888',
        parkName: '北京大兴停车场',
        entertimer: '2020年9月25日 13:32:21',
        stopTimer: '0天2小时45分钟',
        type: 1,
        money: 600,
        checked: false
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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