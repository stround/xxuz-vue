<template>
  <div id="product">
    <!-- 面包屑导航 -->
    <div class="beradnav">
      <div class="wid-auto">
        <span>全部结果</span>
        <span>＞</span>
        <span>清空筛选</span>
      </div>
    </div>
    <!-- 筛选filter -->
    <div class="filter">
      <div class="wid-auto">
        <div class="filter-floor1 floor">
          <div class="kind">
            <span>品牌：</span>
          </div>
          <div class="brand">
            <div class="brand-out">
              <div class="brand-cont">
                <ul>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-1.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">小熊U租</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-2.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">Thinkpad</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-3.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">Apple</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-4.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">Dell</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-5.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">HP</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-6.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">明基</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-7.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">Microsoft</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-8.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">夏普</a>
                    </div>
                  </li><li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-9.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">龙璟</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-10.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">华硕</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-11.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">IBM</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-12.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">企业WIFI</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-13.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">施乐</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-14.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">Lenovo</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-15.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">柯美</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-16.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">兄弟</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-17.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">三星</a>
                    </div>
                  </li>
                  <li>
                    <div class="brand-img">
                      <img :src="imgUrl+'img/product/bd-18.jpg'" alt="">
                    </div>
                    <div>
                      <a href="javascript:;">索尼</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="more">
              <p class="show">
                <a href="javascript:;" @click.prevent="show()">更多</a><span> ∨ </span>
              </p>
              <p class="hide">
                <a href="javascript:;" @click.prevent="hide()">收起</a><span> ∧ </span>
              </p>
            </div>
          </div>
        </div>
        <div class="floor">
          <div class="kind">
            <span>分类：</span>
          </div>
          <div class="classify">
            <div class="classify-out">
              <div class="classify-cont">
                <ul>
                  <li><a href="javascript:;">办公电脑</a></li>
                  <li><a href="javascript:;">办公设备</a></li>
                  <li><a href="javascript:;">手机通讯</a></li>
                  <li><a href="javascript:;">办公软件</a></li>
                  <li><a href="javascript:;">网络设备</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="floor">
          <div class="kind">
            <span>价格：</span>
          </div>
          <div class="classify">
            <div class="classify-out">
              <div class="classify-cont">
                <ul>
                  <li><a href="javascript:;">0-99元</a></li>
                  <li><a href="javascript:;">100-149元</a></li>
                  <li><a href="javascript:;">150-199元</a></li>
                  <li><a href="javascript:;">200-299元</a></li>
                  <li><a href="javascript:;">300以上</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="floor">
          <div class="kind">
            <span>新旧属性：</span>
          </div>
          <div class="classify">
            <div class="classify-out">
              <div class="classify-cont">
                <ul>
                  <li><a href="javascript:;">全新设备</a></li>
                  <li><a href="javascript:;">非全新设备</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="floor">
          <div class="kind">
            <span>CPU：</span>
          </div>
          <div class="classify">
            <div class="classify-out">
              <div class="classify-cont">
                <ul>
                  <li><a href="javascript:;">i3</a></li>
                  <li><a href="javascript:;">i5</a></li>
                  <li><a href="javascript:;">i7</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="floor">
          <div class="kind">
            <span>内存：</span>
          </div>
          <div class="classify">
            <div class="classify-out">
              <div class="classify-cont">
                <ul>
                  <li><a href="javascript:;">4G</a></li>
                  <li><a href="javascript:;">8G</a></li>
                  <li><a href="javascript:;">16G</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 详情列表 -->
    <div class="prolist">
      <div class="wid-auto">
        <div class="list">
          <ul>
            <li v-for="p of products">
              <div class="pro-out">
                <div class="pro-img">
                  <router-link :to="`/detail/${p.lid}`"><img class="bigger" :src="imgUrl+p.pic"></router-link>
                </div>
                <div class="pro-title">
                  <router-link :to="`/detail/${p.lid}`">{{p.title}}</router-link>
                </div>
                <div class="pro-price">
                  <div class="desc">{{p.lname}}：{{p.spec}}</div><div class="price"><span>￥{{p.price}}</span>/月</div>
                </div>
              </div>
            </li>
          </ul>
          <div style="clear:both;"></div>
        </div>
        <div class="page">
          <div class="page-wrapper">
            <ul class="page-ul">
              <li>
                <a href="javascript:;" :class="{disabled:prevDisabled}" @click.prevent="prev()"><span><</span>上一页</a>
              </li>
              <li v-for="i of pageCount" >
                <a href="javascript:;" @click="go(i-1)">{{i}}</a>
              </li>
              <li>
                <a href="javascript:;" :class="{disabled:nextDisabled}" @click.prevent="next()">下一页<span>></span></a>
              </li>
            </ul>
          </div>
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
      kwords:"", products:[], pageCount:0, pno:0,
      imgUrl:'../../../static/',
      prevDisabled:true,
      nextDisabled:true,
      long:'136px',
    }
  },
  created(){
    this.kwords=this.$route.params.kwords;
    this.loadPage();
  },
  methods:{
    loadPage(){
      this.axios.get(
        "http://localhost:5000/product",
        {params:{kwords:this.kwords,pno:this.pno}}
      ).then(res=>{   //output
          console.log(res)
          this.products=res.data.products;
          this.pageCount=res.data.pageCount;
          this.pno=res.data.pno;
          console.log(this.products);
          console.log(this.pageCount,this.pno);
          this.prevDisabled=this.pno==0;
          this.nextDisabled=this.pno==this.pageCount-1;
          console.log(this.prevDisabled,this.nextDisabled)
      })
    },
    prev(){
      this.pno--;
      this.loadPage();
    },
    next(){
      this.pno++;
      this.loadPage();
    },
    go(pno){
      this.pno=pno;
      this.loadPage();
    },
    show(){
      var brand=document.querySelector(".brand-out");
      var show=document.querySelector(".show");
      var hide=document.querySelector(".hide");
      brand.style.height='136px';
      show.style.display='none';
      hide.style.display='block';
    },
    hide(){
      var brand=document.querySelector(".brand-out");
      var show=document.querySelector(".show");
      var hide=document.querySelector(".hide");
      brand.style.height='91px';
      show.style.display='block';
      hide.style.display='none';
    }
  },
  watch:{
    "$route":{
      handler(to){
        this.kwords=to.params.kwords;
        this.pno=0;
        this.loadPage();
      },
      immediate:true
    }
  }
}
</script>

<style>
.hide{
  display:none;
}
.disabled{
  pointer-events: none;
  opacity:0.5;
}
.categorys-bd{
  display:none;
}
a{color:#666}
a:hover{color:#0282d3;}
/* 面包屑导航 */
.beradnav{
  padding: 8px 0;
  line-height: 35px;
  overflow: hidden;
}
.beradnav span{
  padding:0 5px;
  cursor: pointer;
}
.beradnav span:hover{
  color:#0282d3;
}
/* 筛选 */
/* l楼 */
.filter{
  width: 100%;
  margin-bottom: 15px;
}
.filter .floor{
  margin-top:0;
  position: relative;
  margin-bottom: -1px;
  overflow: hidden;
  border: #e5e5e5 1px solid;
  background-color: #f3f3f3;
}
.filter .kind{
  float: left;
  width: 115px;
  color: #333;
}
.filter .kind span{
  display: block;
  float: right;
  padding: 12px 0;
  height: 26px;
  line-height: 26px;
  margin-right: 15px;
}
.filter .filter-floor1 .brand{
  min-height: 91px;
  position: relative;
  float: left;
  width: 1053px;
  padding: 12px 20px;
  background-color: #fff;
}
.filter .filter-floor1 .brand .brand-out{
  height: 91px;
  width: 953px;
  overflow: hidden;
  transition: all 0.5s;
}
.filter .filter-floor1 .brand .brand-out .brand-cont{
  padding-bottom: 1px;
  display: block;
  overflow: hidden;
}
.filter .filter-floor1 .brand .brand-out .brand-cont ul li{
  position: relative;
  float: left;
  padding: 1px;
  width: 116px;
  height: 42px;
  line-height: 42px;
  margin: 0 0 -1px -1px;
  overflow: hidden;
  border: 1px solid #e8e8e8;
  text-align: center;
}
.filter .filter-floor1 .brand .brand-out .brand-cont ul li:nth-child(1),.filter .filter-floor1 .brand .brand-out .brand-cont ul li:nth-child(9),.filter .filter-floor1 .brand .brand-out .brand-cont ul li:nth-child(17){
  margin:0 0 -1px 0;
}
.filter .filter-floor1 .brand .brand-out .brand-cont ul li:hover{
  z-index: 1;
  padding: 0;
  border: #0282d3 2px solid;
}
.filter .filter-floor1 .brand .brand-out .brand-cont ul li:hover .brand-img{
  display: none;
}
.filter .filter-floor1 .brand .brand-out .brand-cont ul li a{
  height: 42px;
  line-height: 42px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  transition: all .2s;
  display: block;
  padding: 0 8px;
  color:#0282d3;
}
.filter .filter-floor1 .brand .brand-out .brand-cont ul li img{
  width:116px;
  height:42px;
}
.filter .filter-floor1 .brand .more{
  position: absolute;
  top: 12px;
  line-height: 26px;
  right: 13px;
  text-align: right;
}
.filter .filter-floor1 .brand .more p a{
  color:#666;
}
.filter .filter-floor1 .brand .more p a:hover{
  color:#0282d3;
}
/* 2楼 */
.filter .floor .classify {
  position: relative;
  float: left;
  width: 1053px;
  min-height: 26px;
  padding: 12px 20px;
  background-color: #fff;
}
.filter .floor .classify .classify-out{
  width: 953px;
  height: 26px;
  overflow: hidden;
}
.filter .floor .classify .classify-out .classify-cont{
  overflow: hidden;
}
.filter .floor .classify .classify-out .classify-cont ul li{
  float: left;
  height: 26px;
  margin: 0 10px 0 0;
}
.filter .floor .classify .classify-out .classify-cont ul li a{
  display: block;
  height: 26px;
  line-height: 26px;
  padding: 0 8px;
  white-space: nowrap;
  transition: all .2s;
}
.filter .floor .classify .classify-out .classify-cont ul li a:hover{
  background-color: #0282d3;
  color: #fff;
}
/* 商品列表 */
.prolist .list{
  padding: 20px 2px 2px 2px;
  border: 1px solid #eee;
}
.prolist .list ul{
  margin: -20px 0 0 -30px;
}
.prolist .list ul li{
  float: left;
  margin: 20px 0 0 30px;
  width: 276px;
  overflow: hidden;
  padding-bottom: 15px;
  border: 1px solid #fff;
  text-align: center;
}
.prolist .list ul li:hover{
  border: #eee 1px solid;
  box-shadow: 0 0 6px 1px rgba(0,0,0,.1);
}
.prolist .list ul li div.pro-out:hover .pro-img .bigger{
  transform: scale(1.3,1.3);
}
.prolist .list ul li .pro-out{
  padding: 0 20px;
}
.prolist .list ul li .pro-out .pro-img{
  margin: 20px auto 10px;
  width: 240px;
  height: 240px;
  overflow: hidden;
}
.prolist .list ul li .pro-out .pro-img img{
  width:100%;
  height:100%;
  transition: all .3s;
}
.prolist .list ul li .pro-out .pro-title{
  height: 60px;
  line-height: 20px;
}
.prolist .list ul li .pro-out .pro-title a{
  color:#333
}
.prolist .list ul li .pro-out .pro-price{
  margin-top: 5px;
  font-weight: 400;
  line-height: 25px;
  position: relative;
}
.prolist .list ul li .pro-out .pro-price{
  margin-top: 5px;
  font-weight: 400;
  line-height: 25px;
  color:#666
}
.prolist .list ul li .pro-out .pro-price .desc{
  margin-right: 90px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.prolist .list ul li .pro-out .pro-price .price{
  position: absolute;
  right: 0;
  top: 0;
}
.prolist .list ul li .pro-out .pro-price .price span{
  color: #ed2441;
  font-size: 18px;
}
/* 分页 */
.prolist .page{
  padding: 45px 0;
  font-size: 16px;
  height: 30px;
}
.prolist .page .page-wrapper{
  position: relative;
  left: 50%;
  float: left;
}
.prolist .page .page-wrapper .page-ul{
  position: relative;
  left: -50%;
  float: left;
  text-align: center;
  overflow: hidden;
}
.prolist .page .page-wrapper .page-ul li{
  float: left;
  margin-left: 6px;
  white-space: nowrap;
}
.prolist .page .page-wrapper .page-ul li a{
  padding: 0 14px;
  height: 32px;
  line-height: 32px;
  display: inline-block;
  color: #666;
  background-color: #fff;
  border: 1px solid #ddd;
}
</style>