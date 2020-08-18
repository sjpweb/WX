// pages/expenditure/expenditure.js
import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showInvoiceInfo: false,
    isBacth: false,
    iphoneXbtm: '',
    invoiceNum: [],
    money: 0,
    activeList: [],
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
    wx.getSystemInfo({
      success: function(res) {
        //model中包含着设备信息
        let model = res.model
        if (model.search('iPhone X') != -1) {
          that.setData({
            iphoneXbtm: "68rpx"
          })
        }
      }
    })

  },
  batch() {
    this.setData({
      isBacth: !this.data.isBacth,
    })
  },
  onChange(e) {
    const {invoiceList, activeList} = this.data;
    let checked = 'invoiceList['+e.target.id+'].checked'
    this.setData({
      [checked]: e.detail,
    });
    let arr = invoiceList.filter(item=>item.checked)
    let allmoney = 0;
    arr.forEach((item)=>{
      allmoney+=item.money;
    });
    this.setData({
      invoiceNum: arr,
      money: allmoney
    });
  },
  goIncoice() {
    this.setData({
      showInvoiceInfo: true,
    });
  },
  order() {
    wx.navigateTo({
      url: '../repeatedly/repeatedly'
    })
  },
  getCarNum(e) {
    const {isBacth} = this.data;
    if(isBacth) return;
    wx.navigateTo({
      url: '../expendiRecord/expendiRecord?carNum='+e.currentTarget.id
    })
  },
  confirm() {
    this.setData({
      showInvoiceInfo: false,
    });
    const arr = this.data.invoiceNum.map(item=>item.carNum)
    const obj = {
      money:this.data.money,
      carLinst: arr
    }
    const str = JSON.stringify(obj)
    wx.redirectTo({
      url: '../einvoice/einvoice?info='+str
    })
  },
  counter() {
    this.setData({
      showInvoiceInfo: false,
    });
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