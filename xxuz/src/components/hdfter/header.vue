<template>
  <div id="header">
    <!-- topbar -->
    <div class="topbar">
      <div class="wid-auto">
        <div id="top" class="top-left">
          <span>您好欢迎来到小熊U租，请</span><a href='http://localhost:8080/#/login'>登录</a> / <a href='http://localhost:8080/#/register'>注册</a>
        </div>
        <div class="loged">
          <span>您好， </span><span style="color:#0282d3;cursor:pointer"> {{uname}} </span><span> 欢迎来到小熊U租</span><a href="#" @click.prevent='leave()'>【退出登录】</a>
        </div>
        <div class="top-right">
          <ul>
            <li><a href="javascript:;">我的订单</a></li>
            <li>
              <a href="javascript:;">会员中心 <span class="rotate">∨</span></a>
              <div class="vip-down">
                <div class="vip-down-pd">
                  <ul>
                    <li><a href="javascript:;">我的优惠券</a></li>
                    <li><a href="javascript:;">免押金额度</a></li>
                    <li><a href="javascript:;">我的关注</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li><a href="javascript:;">收藏网站</a></li>
            <li><a href="javascript:;">帮助中心</a></li>
          </ul>
        </div>
      </div>
    </div>
    <!-- head -->
    <div class="head">
      <div class="wid-auto">
        <!-- logo -->
        <div class="logo">
          <a href="javascript:;"><img :src="imgUrl+'img/login/logo.jpg'" alt=""></a>
        </div>
        <!-- search -->
        <div class="search">
          <div class="searchbar">
            <input id="search" type="text" name="keyword" v-model="kwords" @keyup.13="search()" autocomplete="off">
            <div>
              <img :src="imgUrl+'img/header/s-submit.png'" alt="" @click="search()">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- nav -->
    <div class="nav">
      <div class="wid-auto">
        <div class="categorys">
          <div class="categorys-hd">
            <div class="wrap">
              <a href="javascript:;">全部商品分类</a>
              <span class="fr">∨</span>
            </div>
          </div>
          <div class="categorys-bd">
            <ul>
              <li>
                <div class="categorys-item">
                  <ul>
                    <li>
                      <span class="c-primary f-16">办公电脑</span>
                    </li>
                    <li>
                      <div class="items">
                          <div class="item"><a href="javascript:;" >笔记本</a></div>
                          <div class="item"><a href="javascript:;" >台式电脑</a></div>
                          <div class="item"><a href="javascript:;" >一体机</a></div>
                          <div class="item"><a href="javascript:;" >平板电脑</a></div>
                          <div class="item"><a href="javascript:;" >主机</a></div>
                          <div class="item"><a href="javascript:;" >配件</a></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="categorys-sub">
                  <div class="categorys-sub-wrap">
                    <div class="categorys-sub-l">
                        <ul class="ui-rowlayout">
                          <li class="ui-rowlayout-dttxt">
                          <span class="txt">办公电脑</span>
                          </li>
                          <li class="ui-rowlayout-dd">
                            <span class="ui-rowlayout-dd-items">
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >笔记本</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >台式电脑</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >一体机</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >平板电脑</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >主机</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >配件</a></span>
                            </span>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="categorys-item">
                  <ul>
                    <li>
                      <span class="c-primary f-16">办公设备</span>
                    </li>
                    <li>
                      <div class="items">
                          <div class="item"><a href="javascript:;" >显示器</a></div>
                          <div class="item"><a href="javascript:;" >投影仪</a></div>
                          <div class="item"><a href="javascript:;" >打印机</a></div>
                          <div class="item"><a href="javascript:;" >电视机</a></div>
                          <div class="item"><a href="javascript:;" >多功能一体机</a></div>
                          <div class="item"><a href="javascript:;" >空气净化器</a></div>
                          <div class="item"><a href="javascript:;" >净水器</a></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="categorys-sub">
                  <div class="categorys-sub-wrap">
                    <div class="categorys-sub-l">
                        <ul class="ui-rowlayout">
                          <li class="ui-rowlayout-dttxt">
                          <span class="txt">办公设备</span>
                          </li>
                          <li class="ui-rowlayout-dd">
                            <span class="ui-rowlayout-dd-items">
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >显示器</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >投影仪</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >打印机</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >电视机</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >多功能一体机</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >空气净化器</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >净水器</a></span>
                            </span>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="categorys-item">
                  <ul>
                    <li>
                      <span class="c-primary f-16">手机通讯</span>
                    </li>
                    <li>
                      <div class="items">
                          <div class="item"><a href="javascript:;" >手机</a></div>
                          <div class="item"><a href="javascript:;" >对讲机</a></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="categorys-sub">
                  <div class="categorys-sub-wrap">
                    <div class="categorys-sub-l">
                        <ul class="ui-rowlayout">
                          <li class="ui-rowlayout-dttxt">
                          <span class="txt">手机通讯</span>
                          </li>
                          <li class="ui-rowlayout-dd">
                            <span class="ui-rowlayout-dd-items">
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >手机</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >对讲机</a></span>
                            </span>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="categorys-item">
                  <ul>
                    <li>
                      <span class="c-primary f-16">办公软件</span>
                    </li>
                    <li>
                      <div class="items">
                          <div class="item"><a href="javascript:;" >Office</a></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="categorys-sub">
                  <div class="categorys-sub-wrap">
                    <div class="categorys-sub-l">
                        <ul class="ui-rowlayout">
                          <li class="ui-rowlayout-dttxt">
                          <span class="txt">办公软件</span>
                          </li>
                          <li class="ui-rowlayout-dd">
                            <span class="ui-rowlayout-dd-items">
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >Office</a></span>
                            </span>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <div class="categorys-item">
                  <ul>
                    <li>
                      <span class="c-primary f-16">网络设备</span>
                    </li>
                    <li>
                      <div class="items">
                          <div class="item"><a href="javascript:;" >服务器</a></div>
                          <div class="item"><a href="javascript:;" >工作站</a></div>
                          <div class="item"><a href="javascript:;" >网络部署</a></div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="categorys-sub">
                  <div class="categorys-sub-wrap">
                    <div class="categorys-sub-l">
                        <ul class="ui-rowlayout">
                          <li class="ui-rowlayout-dttxt">
                          <span class="txt">网络设备</span>
                          </li>
                          <li class="ui-rowlayout-dd">
                            <span class="ui-rowlayout-dd-items">
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >服务器</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >工作站</a></span>
                                <span class="ui-rowlayout-dd-item"><a href="javascript:;" >网络部署</a></span>
                            </span>
                          </li>
                        </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu">
          <ul>
            <li><a @click="jump()">首页</a></li> 
            <li><router-link to="/product">长租下单</router-link></li>
            <li><router-link to="/shortrent">小熊短租</router-link></li>
          </ul>
          <div class="nav-phone"><img :src="imgUrl+'img/header/phone.png'" style="vertical-align:top"></img>400-678-5432</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      kwords:"",
      imgUrl:'../../../static/',
      uname:''
    }
  },
  mounted() {
    var uname=sessionStorage.getItem("uname");
    this.uname=uname;
  },
  methods:{
    leave(){
      sessionStorage.removeItem("uname");
      this.$router.push({path:'/',});
      this.$router.go(0);
    },
    search(){
      this.$router.push("/product/"+this.kwords);
    },
    jump(){
      this.$router.push({
        path:'/',
      })
      this.$router.go(0)
    }
  }
}
</script>

<style>
.loged{
  float: left;
  display:none;
}
/* topvar */
.topbar{
  position: relative;
  z-index: 110;
  width: 100%;
  height: 33px;
  line-height: 33px;
  background-color: #f5f5f5;
  font-size: 12px;
}
.topbar .top-left{
  float: left;
}
/* 右边4ul */
.topbar .top-right{
  float: right;
}
.topbar .top-right>ul{
  list-style:none;
  margin: 0;
}
.topbar .top-right>ul>li{
  position: relative;
  float: left;
  height: 33px;
  border-left: #f5f5f5 1px solid;
  border-right: #f5f5f5 1px solid;
}
.topbar .top-right>ul>li>a{
  display: block;
  padding: 0 10px 0 15px;
  margin-top: 9px;
  margin-left: -2px;
  height: 16px;
  line-height: 16px;
  border-left: #e0e0e0 1px solid;
  color: #666;
  text-decoration:none;
}
.rotate{
  display:block;
  float:right;
  margin-left:3px;
  transition:all linear .2s;
}
.topbar .top-right>ul>li:hover .rotate{
  transform:rotate(180deg);
}
.topbar .top-right>ul>li:hover{
  background-color: #fff;
  border-left: #eee 1px solid;
  border-right: #eee 1px solid;
}
.topbar .top-right>ul li:hover>a{
  color:#0282d3;
  border-left: 0;
}
.topbar .top-right>ul li:first-child>a{
  border-left:0;
}
/* 会员hover显示 */
.vip-down{
  display: none;
  position: absolute;
  top: 33px;
  left: -1px;
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border: #eee 1px solid;
  border-top: 0;
}
.vip-down .vip-down-pd{
  padding: 2px 5px 7px;
}
.vip-down .vip-down-pd>ul{
  list-style: none;
}
.vip-down .vip-down-pd>ul>li{
  padding: 0 9px 0 10px;
  height: 20px;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.vip-down .vip-down-pd>ul>li>a{
  text-decoration: none;
  color:#666;
}
.topbar .top-right>ul>li:nth-child(2):hover .vip-down{
  display: block;
}
/* 图标搜索购物车 */
/* 图标 */
.head{
  height:115px;
}
.head .logo{
  float: left;
  padding-top: 20px;
}
/* 搜索 */
.head .search{
  float: left;
  width: 586px;
  margin: 35px 0 0 130px;  
}
.head .search .searchbar{
  width: 586px;
}
.head .search .searchbar input{
  float: left;
  width: 532px;
  height: 40px;
  line-height: 28px;
  border: 2px solid #0282d3;
  box-sizing: border-box;
}
.head .search .searchbar>div>img{
  width: 54px;
  height: 40px;
  background-color: #0282d3;
  border: 2px solid #0282d3;
  border-color: #0282d3;
  color: #fff;
  font-size: 0;
  box-sizing: border-box;
  padding: 4px 12px;
  cursor: pointer;
}
/* nav */
.nav{
  position:relative;
  z-index:2;
  height:42px;
  background-color:#0282d3
}
.nav a{
  text-decoration: none;
}
.nav .wid-auto{
  position:relative
}
.nav .menu{
  margin-left:238px
}
.nav .menu ul{
  float:left
}
.nav .menu li{
  float:left;
  height:42px;
  line-height:42px;
  font-size:16px;
  cursor:pointer;
}
.nav .menu li a{
  display:block;
  padding:0 20px;
  height:42px;
  color:#fff
}
.nav .menu li a:hover{
  color:#fff;
  background-color:#1c9bec
}
.nav .nav-phone{
  float:right;height:42px;line-height:42px;font-size:16px;color:#fff
}
.categorys{
  position:absolute;top:0;left:0;z-index:100;width:238px
}
.categorys-hd{
  height:42px;line-height:42px;font-size:16px;background-color:#0172ba;color:#fff
}
.categorys-hd .wrap{
  padding:0 10px;
}
.categorys-hd .wrap .fr{
  float:right;
  font-weight: 900;
  font-size: 20px;
}
.categorys-hd a{
  color:#fff
}
.categorys-bd{
  display:none;
  height:431px;border-left:#0172ba 1px solid;border-right:#0172ba 1px solid;border-bottom:#0172ba 1px solid;background-color:#fff
}
.categorys-bd>ul>li{
  height:85px;border-top:#eee 1px solid
}
.categorys-bd .categorys-item{
  position:relative;height:85px;padding:0 15px
}
.categorys-bd .categorys-item li{
  height:24px;line-height:24px;padding-top:12px
}
.categorys-bd .categorys-item li{
  height:22px;overflow:hidden
}
.c-primary{
  color:#0282d3;
}
.categorys-bd .categorys-item li .items{
  margin:0 0 0 -13px
}
.categorys-bd .categorys-item li .item{
  float:left;margin:0 0 0 13px;height:22px;line-height:22px
}
.categorys-bd .categorys-item li .item a{
  color:#333;
}
.categorys-bd .categorys-item-icon{
  position:absolute;top:0;left:0;width:35px;height:35px
}
.categorys-bd .categorys-item-txt{
  display:block;margin:0 23px 0 40px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden
}
.categorys-bd .categorys-item-arrow{
  position:absolute;top:0;right:0;width:23px;height:35px;line-height:37px;color:#fff;overflow:hidden
}
.categorys-bd li:hover .categorys-item{
  background-color:#f7f7f7;color:#0282d3
}
.categorys-bd li:hover .categorys-item-arrow{
  color:#0282d3
}
.categorys-bd li:hover .categorys-sub{
  display:block
}
.categorys-sub{
  display:none;position:absolute;top:42px;left:238px;width:971px;height:431px;border-right:#0282d3 1px solid;border-bottom:#0282d3 1px solid;background-color:#f7f7f7
}
.categorys-sub-wrap{
  overflow:hidden;padding:22px 30px 15px
}
.categorys-sub-l{
  float:left;width:735px;height:415px;overflow:auto
}
.categorys-sub-l .ui-rowlayout{
  margin-top:10px
}
.categorys-sub-l .ui-rowlayout:first-child{
  margin-top:0
}
.categorys-sub-l .ui-rowlayout-dttxt{
  position: relative;
  padding-right: 15px;
  width: 56px;
  line-height: 14px;
  color: #333;
  font-weight: 700;
  text-align: right;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  float: left;
}
.categorys-sub-l .ui-rowlayout-dttxt a{
  color:#333
}
.categorys-sub-l .ui-rowlayout-dttxt a:hover{
  color:#0282d3
}
.categorys-sub-l .ui-rowlayout-dttxt .arrow{
  position:absolute;top:0;right:-5px;width:15px;height:14px;line-height:14px
}
.categorys-sub-l .ui-rowlayout-dd{
  padding-bottom:2px;margin-left:91px;border-bottom:#eee 1px solid
}
.categorys-sub-l .ui-rowlayout-dd-item{
  padding:0 8px;margin:0 0 8px;height:14px;line-height:14px;border-left:#eee 1px solid;font-size:12px
}
.categorys-sub-l .ui-rowlayout-dd-item a{
  color:#666;
}
.categorys-sub-r{
  float:right;width:166px;height:415px
}
.categorys-sub-banner01{
  margin-bottom:1px
}
</style>
