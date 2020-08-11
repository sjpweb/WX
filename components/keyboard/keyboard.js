// components/keyboard.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    show: Boolean,
    showCnKeyBoard: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    // showKeyBoard: true,
    // showCnKeyBoard: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeKeyBoard(e) {
      this.setData({
        showCnKeyBoard: !this.data.showCnKeyBoard
      })
    },

    delCarlicense() {
      this.triggerEvent('del-press');
    },

    clearInput() {
      this.triggerEvent('clear-press');
    },

    inputComplete() {
      this.setData({
        show: false
      })
    },

    onKeyBoardPress(e) {
      let keyVal = e.currentTarget.dataset.text;
      var myEventDetail = {
        value: keyVal
      }; // detail对象，提供给事件监听函数
      var myEventOption = {}; // 触发事件的选项
      this.triggerEvent('key-press', myEventDetail, myEventOption);
    },

  },

})