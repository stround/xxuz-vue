<template>
  <div id="detail">
    <!-- 面包屑 -->
    <div class="bread">
      <div class="wid-auto">
        <span class="f-18">办公电脑</span>
        <span> > </span>
        <a href="javascript:;">平板电脑</a>
        <span> > </span>
        <span>Apple iPad Pro平板电脑租赁  12.9英寸</span>
      </div>
    </div>
    <!-- 详情 -->
    <div class="container">
      <div class="wid-auto">
        <div class="preview">
          <div class="lg-img">
            <img :src="imgUrl+mImg" alt="" width="500" height="500" class="position-absolute">
            <div id="mask" class="position-absolute" :class="{'d-none':maskHide}" :style="maskStyle"></div>
            <div id="super-mask" class="position-absolute" @mouseover="show()" @mouseout="hide()" @mousemove="move($event)"></div>
            <div id="div-lg" class="position-absolute" :class="{'d-none':lgDivHide}" :style="lgDivStyle"></div>
          </div>
          <div class="sm-img">
            <div class="sm-out">
              <div class="sm-prev"></div>
              <div class="sm-list">
                <ul>
                  <li v-for="p of pics">
                    <img :src="imgUrl+p.img_url" alt="" width="75" height="75" @mouseover="changeMImg(p.img_url)">
                  </li>
                </ul>
              </div>
              <div class="sm-next"></div>
            </div>
          </div>
        </div>
        <div class="details">
          <h3>{{product.title}}</h3>
          <h4>{{product.subtitle}}</h4>
          <div class="price"><p>月租金：<span>￥{{product.price.toFixed(2)}}</span></p></div>
          <div class="model">
            <div class="first">{{product.lname}}:</div>
            <ul>
              <li v-for="sp in specs"><router-link :to="`${sp.lid}`" :class="lid==sp.lid?'active':''"> {{sp.spec}}</router-link></li>
            </ul>
            <p style="clear: both;"></p>
          </div>
          <div class="repair">
            <div class="first">保修:</div>
            <ul>
              <li><a href="javascript:;" > 意外保：¥15.00/月</a></li>
              <li><a href="javascript:;" class="active"> 标准保：¥0.00/月</a></li>
            </ul>
            <p style="clear: both;"></p>
          </div>
          <div class="sum">
            <div class="first">数量:</div>
            <div class="ad-ca">
              <span class="reduce"></span>
              <input class="texts" type="text" value="1"/>
              <span class="add"></span>
            </div>
            <p style="clear: both;"></p>
          </div>
          <div class="send">
            <div class="first">配送至:</div>
            <div>
              <select name="provs" style="margin-top:3px">
                <option>—请选择—</option>
                <option>北京市</option>
                <option>天津市</option>
                <option>河北省</option>
              </select>
            </div>
          </div>
          <div class="extra">
            <p>单台设备价值：<span>￥3787</span> ，您的租赁方案为：<span>全额押金+月付</span>， 需支付押金：<span>￥3787</span></p>
          </div>
          <p style="font-size:14px;height: 62px;background-color: #f0f8fc; line-height: 62px; padding-left: 15px; margin-top: 15px;">
            <img src="http://s.lxzl.com.cn/kz/ui/zmyx-web/images/zmxylogo3.png" style="float: left; margin-top: 15px;">
            <span style="height: 24px; margin: 18px 10px 0px 10px; display: inline-block; float: left;"></span>
            开通芝麻企业信用分，1350分以上可享受免押金租机
            <a href="javascript:;" style="margin-left:30px;height:26px;background-color:#0080f4;border-radius:4px;color:white;font-size: 13px;padding: 2px 5px">申请免押金租机</a>
          </p>
          <div class="action">
            <a @click="alert" class="btn btn-primary" href="javascript:;"><h5>立即下单</h5></a>
            <a @click="alert" class="btn btn-light" href="javascript:;"><h5>立即申请免押金</h5></a>
            <a @click="alert" class="btn btn-red" href="javascript:;"><h5>加入购物车</h5></a>
          </div>
        </div>
      </div>
      <p style="clear: both;"></p>
    </div>
    <!-- 参数 -->
    <div class="parame wid-auto">
      <div class="parame-section">
        <div class="box">
          <div class="box-nav">
            <div class="out-bd">
              <ul>
                <li class="on"><span>商品介绍</span></li>
                <li><span>商品介绍</span></li>
                <li><span>商品介绍</span></li>
              </ul>
            </div>
          </div>
          <div class="box-bd">
            <div class="introduce">
              <div class="img-out">
                <p>
                  <img :src="imgUrl+'img/detail/in-1.jpg'" alt="">
                  <img :src="imgUrl+'img/detail/in-2.jpg'" alt="">
                  <img :src="imgUrl+'img/detail/in-3.jpg'" alt="">
                  <img :src="imgUrl+'img/detail/in-4.jpg'" alt="">
                  <img :src="imgUrl+'img/detail/in-5.jpg'" alt="">
                  <img :src="imgUrl+'img/detail/in-6.jpg'" alt="">
                  <img :src="imgUrl+'img/detail/in-7.jpg'" alt="">
                  <img :src="imgUrl+'img/detail/in-8.jpg'" alt="">
                  <img :src="imgUrl+'img/detail/in-9.jpg'" alt="">
                  <img :src="imgUrl+'img/detail/in-10.jpg'" alt="">
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lid:0,product:{}, specs:[], pics:[],
      mImg:"",
      imgUrl:'../../../static/',
      maskHide:true,
      lgDivHide:true,
      lgDivStyle:{
        "background-image":"",
        "background-position":"0px 0px",
      },
      moved:0,
      maskStyle:{ left:"0px", top:"0px" },
    }
  },
  created(){
    this.lid=this.$route.params.lid;
    this.getByLid();
  },
  methods: {
    getByLid(){
      this.axios.get(
          "http://localhost:5000/detail",
          {params:{lid:this.lid}
      }).then(res=>{
          console.log(res.data)
          var output=res.data;
          this.product=output.product;
          this.specs=output.specs;
          this.pics=output.pics;
          this.mImg=this.pics[0].img_url;
          this.lgDivStyle["background"]="url("+this.imgUrl+this.pics[0].img_url+") no-repeat";
          this.rightDisabled=this.pics.length<5;
      })
      },
      show(){
        this.maskHide=false;
        this.lgDivHide=false;
      },
      hide(){
        this.maskHide=true;
        this.lgDivHide=true;
      },
      move(e){
      var left=e.offsetX-100;
      var top=e.offsetY-100;
      if(left<0) left=0; 
      else if(left>300) left=300;
      if(top<0) top=0; 
      else if(top>300) top=300;
      this.maskStyle.left=left+"px";
      this.maskStyle.top=top+"px";
      this.lgDivStyle["background-position"]=
          `-${left*0.01}px -${top*0.01}px`;
      },
      changeMImg(pic){
        this.mImg=pic;
        this.lgDivStyle["background-image"]=
            "url("+this.imgUrl+pic+")";
      },
      alert(){
        alert("购物车功能开发中")
      }
  },
  watch:{
    "$route":{
        handler(to){
            this.lid=to.params.lid;
            this.getByLid();
            this.leftDisabled=true;
            this.moved=0;
        },
        immediate:true//立刻
    }
  }
}
</script>

<style>
.active{
  border: 2px solid #ed2441 !important;
}
.position-absolute{
  position:absolute;
}
.categorys-bd{
  display:none;
}
.bread{
  padding: 8px 0;
  line-height: 35px;
  overflow: hidden;
}
.bread .wid-auto span{
  padding:0 5px;
}
/* 详情图片 */
.container .wid-auto .preview{
  float: left;
  width:500px;
}
.container .wid-auto .preview .lg-img{
  width: 500px;
  height: 500px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  position: relative;
}
.container .wid-auto .preview .lg-img #mask{
  width: 200px;
  height: 200px;
  background-color: #ffa;
  opacity: .5;
}
.container .wid-auto .preview .lg-img #super-mask{
  width: 500px;
  height: 500px;
}
.container .wid-auto .preview .lg-img #div-lg{
  width:500px;
  height:500px;
  left: 500px;
  z-index: 1000;
  border: 1px solid rgba(0, 0, 0, 0.125);
}
.container .wid-auto .preview .sm-img{
  height: 80px;
  margin-top: 20px;
}
.container .wid-auto .preview .sm-img .sm-out{
  position: relative;
  width: 100%;
  height: 80px;
  overflow: hidden;
}
.container .wid-auto .preview .sm-img .sm-out .sm-prev{
  float: left;
  display: block;
  width: 25px;
  height: 80px;
  background: url(../../../static/img/detail/btn.png) no-repeat;
  cursor: pointer;
}
.container .wid-auto .preview .sm-img .sm-out .sm-next{
  float: right;
  display: block;
  width: 25px;
  height: 80px;
  background: url(../../../static/img/detail/btn.png) no-repeat;
  cursor: pointer;
  background-position: -25px 0;
}
.container .wid-auto .preview .sm-img .sm-out .sm-prev:hover{
  background-position: 0 -80px;
}
.container .wid-auto .preview .sm-img .sm-out .sm-next:hover{
  background-position: -25px -80px;
}
.container .wid-auto .preview .sm-img .sm-out .sm-list{
  float: left;
  overflow: hidden;
  margin-left: 5px;
  width: 445px;
}
.container .wid-auto .preview .sm-img .sm-out .sm-list ul{
  height: 80px;
  overflow: hidden;
}
.container .wid-auto .preview .sm-img .sm-out .sm-list ul li{
  position: relative;
  float: left;
  margin: 0 9px 0 0;
  width: 80px;
  height: 80px;
}
.container .wid-auto .preview .sm-img .sm-out .sm-list ul li img{
  border: 2px solid transparent;
}
.container .wid-auto .preview .sm-img .sm-out .sm-list ul li img:hover{
  border-color:#0282d3
}
/* 详情 */
.details{
  float: left;
  width: 680px;
  margin-left: 30px;
  font-size: 12px;
}
.details h3{
  font-size: 18px;
  color:#333;
  font-weight:500;
  margin-bottom:5px;
}
.details h4{
  font-size: 13px;
  color:#666;
  font-weight: 400;
}
.details .price{
  margin: 12px 0 0;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}
.details .price p{
  line-height: 25px;
  text-align: left;
  font-size: 14px;
  color: #333;
  letter-spacing: 5px;
}
.details .price p span{
  color: #ed2441;
  font-size: 20px;
  letter-spacing: 0px;
}
.details .model,.details .repair{
  position: relative;
  margin-top: 8px;
  padding: 12px 0 5px;
}
.details>div>div.first{
  line-height: 34px;
  width: 75px;
  line-height: 25px;
  text-align: left;
  font-size: 14px;
  color: #333;
  float: left;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  letter-spacing: 7px;
}
.details .model>div{
  letter-spacing: 0px !important;
}
.details .model ul,.details .repair ul{
  margin-left: 80px;
  line-height: 25px;
}
.details .model ul li a,.details .repair ul li a{
  padding: 2px 5px;
  position: relative;
  border: 2px solid #aaa;
  float: left;
  margin: 0 10px 10px 0;
  height: 26px;
  line-height: 26px;
  cursor: pointer;
  color:#333
}
.details .model ul li a{
  min-width: 185px;
  text-align: center;
}
.details .sum{
  margin-top: 15px;
}
.details .sum .ad-ca{
  position: relative;
  float: left;
  width: 118px;
  height: 34px;
  background: url(../../../static/img/detail/count.png) no-repeat;
}
.details .sum .ad-ca span{
  position: absolute;
  top: 1px;
  width: 32px;
  height: 32px;
  margin: 0;
  cursor: pointer;
}
.details .sum .ad-ca span.reduce{
  left: 1px;
}
.details .sum .ad-ca span.add{
  right: 1px;
}
.details .sum .ad-ca input.texts{
  padding: 0 4px;
  margin: 1px 32px 0;
  width: 50px;
  height: 32px;
  line-height: 32px;
  border: 0;
  background: 0;
  text-align: center;
  font-size: 12px;
  color: #333;
  box-sizing: border-box;
}
.details .sum .ad-ca input.texts:focus{
  outline:0;
}
.details .send{
  margin-top: 25px;
}
.details .extra{
  overflow: hidden;
  margin-top: 25px;
  font-size: 16px;
}
.details .extra span{
  color:#ed2441
}
.details .action{
  margin-top: 20px;
  height: 44px;
  line-height: 44px;
}
.details .action a.btn{
  margin-left:35px;
  line-height: 22px;
  padding: 10px 20px;
  height: 44px;
  border: solid 1px #ddd;
  border-radius: 2px;
  display: inline-block;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
  white-space: nowrap;
  vertical-align: middle;
}
.details .action a.btn-primary{
  color: #fff;
  background-color: #0282d3;
  border-color: #0282d3;
}
.details .action a.btn-light{
  color: #0282d3;
  border-color: #0282d3;
}
.details .action a.btn-red{
  color: #fff;
  background-color: #ed2441;
  border-color: #ed2441;
}
.details .action a h5{
  font-size:18px;
}
/* 参数 */
.parame-section{
  width: 100%;
  margin-top: 40px;
  font-size: 14px;
}
.parame .box .box-nav{
  height: 42px;
}
.parame .box .box-nav .out-bd{
  height: 40px;
  border: #ddd 1px solid;
  background-color: #f7f7f7;
  color: #333;
  padding: 0;
}
.parame .box .box-nav .out-bd ul li.on{
  color: #0282d3;
  background-color: #fff;
  border-top: 3px solid #0282d3;
  border-bottom: 1px solid #fff;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
}
.parame .box .box-nav .out-bd ul li{
  float: left;
  padding: 0 28px;
  margin-left: -1px;
  height: 37px;
  line-height: 37px;
  font-size: 16px;
  cursor: pointer;
  border-top: 3px solid #f7f7f7;
  border-bottom:  1px solid transparent;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;
}
.parame .box .box-bd .introduce{
  margin-bottom: 20px;
  overflow: hidden;
  border: 1px solid #ddd;
  border-top:0;
}
.parame .box .box-bd .introduce .img-out{
  overflow: hidden;
  padding: 30px 20px;
}
.parame .box .box-bd .introduce .img-out p{
  text-align: center;
}
.parame .box .box-bd .introduce .img-out p img{
  width:100%;
  vertical-align:top;
}
</style>