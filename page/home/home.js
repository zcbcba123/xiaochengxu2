import request from '../../service/network.js'

Page({
  data:{
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    goods:{
      pop:{page:0,list:[]},
      "new": { page: 0, list: [] },
      "sell": { page: 0, list: [] },
    },
    currentType:'pop'
  },
  onLoad:function(options){
    //1.请求轮播图一集推荐数据
    request({
      url:'http://123.207.32.32:8000/home/multidata'
    }).then(res => {
      // console.log(res)
  const banners=res.data.data.banner.list;
  const recommends=res.data.data.recommend.list;

  console.log(banners)
  console.log(recommends)
  this.setData({
    // banners:banners,
    // recommends:recommends
    banners,
    recommends
  })
    })

    const page = this.data.goods["pop"].page+1;
    request({
      url: 'http://123.207.32.32:8000/home/data',
      data: {
        type: "pop",
        page: page
      }
    }).then(res => {
      console.log(res)

    })  
  },
  handleTabClick(event){
    // console.log(event)
     const index=event.detail.index;
     console.log(index)
  }
})