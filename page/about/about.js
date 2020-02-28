// page/home/home.js
const app = getApp()
console.log(app.globalData.name)
Page({
  onLoad() {
    //或者
    //const _this=this;
    //需要在控制台配置
    wx.request({
      // url: 'https://gank.io/api/day/history',
      url: 'https://gank.io/api/add2gank',
      method: "POST",
      // url: 'http://www.baidu.com',
      // success:function(res){ //这样写不行，会找不到this,要用es6的写法
      //当然，如果非要这么写就要用到_this
      success: (res) => {
        // console.log("zs"+res)
        const results = res.data.results;
        console.log("loadres" + results)
        //_this.setData
        this.setData({
          list: results
        })
        // console.log("loadres" + results)
      }
    })
  },
  data: {
    name: 'zs',
    age: 18,
    students: [
      { id: 110, name: 'zs2', age: 11 },
      { id: 111, name: 'zs23', age: 13 }
    ],
    counter: 0,
    list: [],
    imgPath: "",
    isShow: true
  },
  handleBtnClick() {
    //界面不刷新
    //this.data.counter+=1
    this.setData({
      counter: this.data.counter + 1
    })
  },
  handleBtnClick2() {
    //界面不刷新
    //this.data.counter+=1
    this.setData({
      counter: this.data.counter - 1
    })
  },
  onPageScroll(obj) {
    // console.log(obj)
  },
  onReachBottom() {
    //console.log('滚到底了')
  },
  onPullDownRefresh() {
    console.log('下拉刷新')
  },
  handleChooseAlbum() {
    wx.chooseImage({
      success: (res) => {
        const path = res.tempFilePaths[0]
        this.setData({
          imgPath: path
        })
      },
    })
  },
  handleSwitchColor() {
    this.setData({
      isActive: !this.data.isActive
    })
  },
  handleSwitchShow() {
    this.setData({
      isShow: !this.data.isShow
    })
  }
})