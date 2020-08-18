const app = getApp()
Component({
    properties: {
        // defaultData（父页面传递的数据）
        defaultData: {
            type: Object,
            value: {
            },
            observer: function(newVal, oldVal) {}
        }
    },
    data: {
        userInfo: {},
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuBotton: app.globalData.menuBotton,
        menuHeight: app.globalData.menuHeight,
    },
    attached: function() {

    },
    methods: {
      individual(){
        wx.redirectTo({
          url: '../individual/individual'
        })
      }
    }
})