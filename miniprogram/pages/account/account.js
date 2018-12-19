// pages/tabmessage/tabmessage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.getStorage({
    //   key:'key',
    //   success(res) {
    //     // this.setData({ username: res.data.username })
    //     console.log(res.data)
    //   },
    // })
    try {
      const value = wx.getStorageSync('key')
      if (value) {
        // Do something with return value
        console.log(value.data.username)
        this.setData({ username: value.data.username })
      }
    } catch (e) {
      // Do something when catch error
      console.log(e)
    }
    console.log('我是account,启动成功')
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