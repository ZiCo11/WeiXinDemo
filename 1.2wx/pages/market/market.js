// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iconSearch: './img/icon_search.png',
    tags: ["推荐", "咖啡", "饮食", "男装", "女装", "眼镜", 
            "美食", "图书", "玩具"],
    imgArr:[
      "./img/swiperImg01.jpg",
      "./img/swiperImg02.jpg",
      "./img/swiperImg03.jpg",
      "./img/swiperImg04.jpg",
    ], 
    desArr:[
      "大牌制造商直供",
      "七天无忧退货",
      "全平台包邮",
    ],
    desIcon: './img/icon_des.png' ,
    icon_arrow: './img/icon_arrow.png',       
    now: 0,
    left: 0,
    // 面板指示点
    indicatorDots: true,
    // 自动播放
    autoplay: true,
    //  滑动动画时长
    duraion: 1000,
  },
  clickTags(e){
    console.log(e.target)
    this.setData({
      now: e.target.dataset.index,
      left: e.target.offsetLeft
    })
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