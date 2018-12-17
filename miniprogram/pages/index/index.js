//index.js
const app = getApp()

Page({
  data: {
    avatarUrl: './user-unlogin.png',
    username: '',
    password: '',
    logged: false,
    takeSession: false,
    requestResult: ''
  },

  onLoad: function() {
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
  },
  username(e){
    this.setData({
      username: e.detail.value
    })
  },
  password(e) {
    this.setData({
      password: e.detail.value
    })
  },
  clickme() {
    wx.request({
      url: 'http://hn.uwjx.com:8080/uwjx-iot-api/account/login',
      method: 'POST',
      data: {
        username: 'username',
        password: 'password',
      },
      dataType: 'json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      },
      complete(){
        console.log(username)
      }
    });
  }
})
