// pages/tabmessage/tabmessage.js
let bmap = require('../lib/bmap-wx.js'); 
let wxMarkerData = []; 
Page({

  /**
   * 页面的初始数据1
   */
  data: {
    latitude: '',
    longitude: '',
    markers: [],
    placeData: {}
  },
  markertap: function(e){
    let that = this;
    let id = e.markerId;
    that.showSearchInfo(wxMarkerData, id);
    that.changeMarkerColor(wxMarkerData, id);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onload')
    let that = this;
    let BMap = new bmap.BMapWX({
      ak: 'b8ZVGiIMhrzuXpVdRUenR74Pocv8q2lu'
    });
    let fail = function(data){
      console.log(data)
    };
    let success = function(data){
      wxMarkerData = data.wxMarkerData;
      that.setData({
        markers: wxMarkerData
      });
      that.setData({
        latitude: wxMarkerData[0].latitude
      });
      that.setData({
        longitude: wxMarkerData[0].longitude
      });
    }
    // baiduMap 发起POI检索请求
    BMap.search({
      "query": '酒店',
      fail: fail,
      success: success,
      iconPath: '../img/Marker_red.png',
      iconTapPath: '../img/Marker_yellow.png'
    });
    console.log('我是history,启动成功')
  },
  showSearchInfo: function(data, i){
    let that = this;
    that.setData({
      placeData: {
        titile: '名称' + data[i].titile +'\n',
        address: '地址' + data[i].address + '\n',
        telephone: '电话' + data[i].telephone
      }
    });
  },
  changeMarkerColor: function(data, i){
    let that = this;
    let markers = [];
    for (let j = 0;j< data.length;j++){
      if(j ==i){
          // 这里是放相应路径图片文件
        data[j].iconPath = '/img/Marker_yellow.png';
      }else{
        // aaa
        data[j].iconPath = '/img/Marker_red.png';
      }
      markers[j](data[j]); 
    }
    that.setData({
      markers: markers
    });
  },
  // getLocation: function(){
  //   let that = this
  //   wx.getLocation({
  //     success: function(res) {
  //       console.log(res)
  //       that.setData({
  //         hasLocation: true;
  //         location: formatLocation(res.latitude,res.longitude)
  //       })
  //     },
  //   })
  // }

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