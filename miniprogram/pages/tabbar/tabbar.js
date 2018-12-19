// pages/tabmessage/tabmessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    monitorType: ['PM2.5','甲醛','氢硫化物'],
    bedroom: '卧室',
    livingroom: '客厅',
    restroom: '卫生间',
    numberOne: 96,
    numberTwo: 134,
    numberThree: 0.034,
    numberFour: 0.002
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('我是tabbar,启动成功')
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