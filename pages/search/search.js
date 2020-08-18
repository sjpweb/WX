Page({

  /**
   * 页面的初始数据
   */
  data: {
    showKeyBoard: false,
    showCnKeyBoard: true,
    recordList: [],
    init: true,
    isShow: true,
    newEnergyCar: false,
    carlicenseArr: [],
    carlength: 7
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () { },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  },

  goback() {
    wx.navigateTo({
      url: '../index/index'
    })
  },
  clear() {
    this.setData({
      recordList: []
    });
  },
  findHistoryCarOrder(e) {
    const car = e.currentTarget.dataset.car;
    console.log(car);
    // this.setData({
    //   carlicenseArr: car.split(''),
    //   carlength: car.length,
    //   init: false,
    //   showCnKeyBoard: false,
    //   newEnergyCar: car.length == 8 ? true : false
    // })
  },
  showKeyBoard() {
    this.setData({
      showKeyBoard: true,
      showCnKeyBoard: false
    })
  },

  onProvinceTap() {
    this.setData({
      carlicenseArr: [],
      showCnKeyBoard: true
    })
  },

  showABCKeyBoard() {
    this.setData({
      showCnKeyBoard: false
    })
  },

  bindCar() {
    const carlicense = this.data.carlicenseArr.join('');
    if (!carlicense || carlicense.length < 7) {
      wx.showToast({
        title: '请先填写正确的车牌号',
        icon: 'none',
        duration: 2000
      })
      return;
    }
    this.data.recordList.push(carlicense);
    this.setData({
      recordList: this.data.recordList
    });
    // this.setData({
    //   isShow: false,
    // })
  },

  showCnKeyBoardClick() {
    this.setData({
      showKeyBoard: true,
      showCnKeyBoard: true,
      init: true,
      carlicenseArr: []
    })
  },


  //键盘组件事件---start

  keyPress(e) {
    let carArr = this.data.carlicenseArr;
    if (carArr.length == this.data.carlength) {
      console.log("长度超出");
      return;
    }
    carArr.push(e.detail.value);
    this.setData({
      carlicenseArr: carArr,
      showCnKeyBoard: carArr.length > 0 ? false : this.data.showCnKeyBoard,
      init: carArr.length > 0 ? false : this.data.init,
    })
  },

  delPress() {
    let carArr = this.data.carlicenseArr;
    if (carArr.length == 0) return;
    carArr.pop();
    this.setData({
      carlicenseArr: carArr,
      showCnKeyBoard: carArr.length == 0 ? true : this.data.showCnKeyBoard,
      init: carArr.length == 0 ? true : this.data.init,
    })
  },

  clearPress() {
    this.setData({
      carlicenseArr: [],
      showCnKeyBoard: true
    })
  },


  //键盘组件事件---end


  changeCarType() {
    this.setData({
      newEnergyCar: true,
      carlength: 8,
      showCnKeyBoard: false
    });
  }

})