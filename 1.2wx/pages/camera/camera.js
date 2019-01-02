// pages/camera/camera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src: ''
  },
  takePicture(){
    // comera 
    console.log("点击拍照成功")
    let ctx = wx.createCameraContext();
    ctx.takePhoto({
      success: function(res){
        console.log('成功', res)
      },
      fail: function(error){
        console.log('拍照失败',error);
      },
      complete:function(){
        console.log('111');
      }
    });
    // 获取图片
    // let that = this;
    // wx.chooseImage({
    //   count:1,
    //   sizeType: ['original','compressed'],
    //   success: function(res) {
    //     let tempFilePaths = res.tempFilePaths;
    //     that.setData({
    //       src: tempFilePaths
    //     })
    //   },
    //   fail: function(res){
    //     console.log(res.errMsg,'错了')
    //   }
    // })
    //扫码 二维码
    // wx.scanCode({
    //   success(res){
    //     console.log(res);
    //   },
    //   fail(err){
    //     console.log('扫码失败', err)
    //   }
    // })
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