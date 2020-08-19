const app = getApp()
Component({
    properties: {
        defaultData: {
            type: Object,
            value: {
            },
            observer: function(newVal, oldVal) {}
        },
        isAuthorization:{
          type: Boolean,
          value: false
        }
    },
    data: {
        userInfo: {},
        navBarHeight: app.globalData.navBarHeight,
        menuRight: app.globalData.menuRight,
        menuBotton: app.globalData.menuBotton,
        menuHeight: app.globalData.menuHeight,
    },
    methods: {
      individual(){
        if(!this.properties.isAuthorization) return;
        wx.navigateTo({
          url: '../individual/individual'
        })
      },
      bindGetUserInfo(e) {
        if(e.detail.errMsg ===  "getUserInfo:ok"){
          this.setData({
            isAuthorization: true
          });
          this.triggerEvent('getAuthorization',e)
        }
      },
    }
})