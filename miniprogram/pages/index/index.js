//index.js
const app = getApp()

Page({
  // data是页面的初始数据
  data: {
    text: '这里是测试的文本',
    array:[{msg:1},{msg:2}],
    username: '',
    password: '',
    logged: false,
    takeSession: false,
    requestResult: '',
    src:'../../images/盒子.png',
  },

  onLoad: function() {
    // do some init when page load
    if (!wx.cloud) {
      wx.redirectTo({
        url: '../chooseLib/chooseLib',
      })
      return
    }
  },
  onReady(){
    // do something when page ready
  },
  onShow(){
  // do something when page show 
  },
  onHide(){
    // do someting when page hide
  },
  onUnload(){
    // do something when page close
  },
  onPullDownRefresh(){
    // do something when pull down
    // 监听用户下拉动作
  },
  onReachBottom(){
    // do something when reach bottom
    // 页面上拉触底的处理函数
  },
  onShareAppMessage(res){
    // return custom share data when user share
    // 用户点击右上角转发
    return{
      title: '这里是转发的标题',
      path: '/page/index'
    }
  },
  onPageScrool(){
    // do something when page scroll
  },
  onResize(){
    // do something when page resize
    // 页面尺寸改变时触发
  },
  onTabItemTap(item){
    // 当前是tab页面时，点击tab时触发
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
        username: this.data.username,
        password: this.data.password,
      },
      dataType: 'json',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        if(res){
          wx.setStorage({
            key: 'key',
            data: res.data,
          });
        }
      },
    });
    wx.reLaunch({
      url: '../tabbar/tabbar'
    })
  },
 
})
