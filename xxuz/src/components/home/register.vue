<template>
<div id="register">
  <!-- 头 -->
  <header class="head">
    <div class="logo">
      <router-link to="/">
        <img :src="imgUrl+'img/login/logo.jpg'">
      </router-link>
    </div>
    <div class="welreg">
      欢迎注册
    </div>
    <div class="reg_log">
      <p>
        <span>欢迎来到小熊U租，请</span>
        <router-link to="/login">登录</router-link>
        <b>|</b>
        <router-link to="/register">注册</router-link>
      </p>
    </div>
  </header>
  <!-- 注册 -->
  <div class="register">
    <div class="reg-out">
    <!-- 左边表单 -->
    <div class="reg-form">
      <form id="reg">
        <div class="form-hd">
          <div class="hd-top">
            <img :src="imgUrl+'img/login/reghd.png'" alt="">
            <span class="f-18">注册账号</span>
          </div>
          <div class="hd-rad">
              注册类型：<input type="radio" name="utype" value="0" checked>企业<input type="radio" name="utype" value="1">个人
          </div>
        </div>
        <div class="form-bd">
          <ul>
            <li class="reg-item">
              <div class="item-left">来源渠道</div>
              <select name="source" class="item-right">
                <option value="1">朋友推荐</option>
                <option value="2">地推活动</option>
                <option value="3">展会了解</option>
                <option value="4">业务联系</option>
                <option value="5">百度推广</option>
                <option value="6">其它广告</option>
              </select>
            </li>
            <li class="reg-item">
              <div class="item-left">用户名</div>
              <input type="text" name="uname" placeholder="用户名不能为纯数字" class="item-right" autocomplete="off">
              <div><span>用户名不能为纯数字,支持中文、数字、字母组合，4-20位</span></div>
              <div><span>请输入用户名</span></div>
              <div><span>该用户名可用</span></div>
            </li>
            <li class="reg-item">
              <div class="item-left">手机号</div>
              <input name="phone" type="text" placeholder="建议使用常用手机" class="item-right" autocomplete="off">
              <div><span>建议使用常用手机</span></div>
              <div><span>请输入手机号</span></div>
              <div><span>该手机号可用</span></div>
            </li>
            <li class="reg-item">
              <div class="item-left">设置密码</div>
              <input name="upwd" type="password" placeholder="建议至少使用两种字符" class="item-right">
              <div><span>建议使用字母、数字和符号两种及以上的组合，6-20个字符</span></div>
              <div><span>请输入密码</span></div>
              <div><span>填写正确</span></div>
            </li>
            <li class="reg-item">
              <div class="item-left">确认密码</div>
              <input name="upwd2" type="password" placeholder="请再次输入密码" class="item-right">
              <div><span>请再次输入密码</span></div>
              <div><span>请输入密码</span></div>
              <div><span>填写正确</span></div>
            </li>
          </ul>
        </div>
        <div class="form-ft">
          <div class="read">
            <input id="check" name="read" type="checkbox"><label for="check">我已阅读并同意<a href="javascript:;">《小熊U租用户注册协议》</a></label>
          </div>
          <div class="ritreg">
            <button id="submit">立即注册</button>
          </div>
        </div>
      </form>
    </div>
    <!-- 右侧图片 -->
    <div class="reg-aside">
      <div>
        <div class="img">
          <img :src="imgUrl+'img/login/code.jpg'" alt="">
        </div>
        <div class="gzh">
          扫一扫，关注公众号
        </div>
      </div>
      <div>
        <img :src="imgUrl+'img/login/r-banner.jpg'" alt="">
      </div>
    </div>
    <div class="clear"></div>
    </div>
  </div>
  <!-- 脚 -->
  <footer class="foot">
    <div class="foot-out">
      <div class="foot-top">
        <a href="javascript:;">关于我们</a><span>|</span>
        <a href="javascript:;">关于我们</a><span>|</span>
        <a href="javascript:;">关于我们</a><span>|</span>
        <a href="javascript:;">关于我们</a><span>|</span>
        <a href="javascript:;">关于我们</a><span>|</span>
        <a href="javascript:;">关于我们</a><span>|</span>
        <a href="javascript:;">关于我们</a>
      </div>
      <div class="foot-bottom">
        <p>
          友情链接：
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
          <a href="javascript:;">北京凌雄租赁</a>
        </p>
        <p>Copyright © 2013 - 2017 深圳市凌雄租赁服务有限公司. All Rights Reserved   技术支持：FEC筷云</p>
        <p><a href="javascript:;">粤ICP备15099642号-1</a> 全国热线：400-678-5432 </p>
        <a href="https://www.cnzz.com/stat/website.php?web_id=1258710723" target="_blank" title="站长统计">
          <img border="0" hspace="0" vspace="0" src="http://icon.cnzz.com/img/pic.gif">
        </a>
        <span style="margin: 0">
          <a href="https://www.cnzz.com/stat/website.php?web_id=1262453894" target="_blank" title="站长统计">站长统计</a>
        </span>
        <a href="https://szcert.ebs.org.cn/e8f0ce8d-1f01-4e59-92fd-5257ccaaf8a8" target="_blank">
          <img src="https://szcert.ebs.org.cn/Images/govIcon.gif" width="26" height="36" border="0" style="border-width:0px;border:hidden; border:none;vertical-align: middle">
        </a>
      </div>
    </div>
  </footer>
</div>
</template>

<script>
import $ from 'jquery'
export default {
  data() {
    return {
      imgUrl:'../../static/'
    }
  },
  mounted() {
    var $uname=$("[name=uname]");
    var $upwd=$("[name=upwd]");
    var $upwd2=$("[name=upwd2]");
    var $phone=$("[name=phone]");
    var $check=$("#check");
    var $submit=$("#submit"); 
    var testuname=false,testupwd=false,testupwd2=false,testphone=false,testcheck=false;
    //用户名检测
    $uname.focus(function(){
      $(this).next().show();
      $(this).next().next().hide();
      $(this).next().next().next().hide();
    });
    $uname.blur(function(){
      $(this).next().hide();
      var reg=/^[0-9a-z]{4,20}$/i;
      var regnum=/^[0-9]{4,20}$/;
      var value=$(this).val()
      if(reg.test(value)){
        if(regnum.test(value)){
          $(this).next().next().children().html("用户名格式有误");
          $(this).next().next().show();
        }else{
          $.ajax({
            url:"http://127.0.0.1:5000/user/reguser",
            type:"get",
            data:{uname:value},
            success:(res)=>{
              console.log(res);
              var msg=res.msg;
              if(res.code==101){
                $(this).next().next().children().html(msg);
                $(this).next().next().show();
              }else if(res.code==100){
                $(this).next().next().next().show();
                testuname=true;
              }
            }
          })
        }
      }else{
        if(!value){
          $(this).next().next().show();
        }else{
          $(this).next().next().children().html("用户名格式有误");
          $(this).next().next().show();
        }
      }
    });

    //手机号检测
    $phone.focus(function(){
      $(this).next().show();
      $(this).next().next().hide();
      $(this).next().next().next().hide();
    });
    $phone.blur(function(){
      $(this).next().hide();
      var reg=/^1[3-8]\d{9}$/;
      var value=$(this).val();
      if(reg.test(value)){
          $.ajax({
            url:"http://127.0.0.1:5000/user/regphone",
            type:"get",
            data:{phone:value},
            success:(res)=>{
              var msg=res.msg;
              if(res.code==101){
                $(this).next().next().children().html(msg);
                $(this).next().next().show();
              }else if(res.code==100){
                $(this).next().next().next().show();
                testphone=true;
              }
            }
          })
      }else{
        if(!value){
          $(this).next().next().show();
        }else{
          $(this).next().next().children().html("手机号格式有误");
          $(this).next().next().show();
        }
      }
    });

    //密码检测
    $upwd.focus(function(){
      $(this).next().show();
      $(this).next().next().hide();
      $(this).next().next().next().hide();
    });
    $upwd.blur(function(){
      $(this).next().hide();
      var reg=/^[0-9a-z_]{6,20}$/;
      var regnum=/^[0-9]{6,20}$/;
      var value=$(this).val();
      if(reg.test(value)){
        if(regnum.test(value)){
          $(this).next().next().children().html("安全强度低,建议使用字母、数字和符号两种及以上组合");
          $(this).next().next().show();
        }else{
          $(this).next().next().next().show();
          testupwd=true;
        }
      }else{
        console.log(value.length);
        if(!value){
          $(this).next().next().show();
        }else if(value.length<6 || value.length>20){
          $(this).next().next().children().html("密码长度只能在6-20位字符之间");
          $(this).next().next().show();
        }
      }
    });

    //二次密码检测
    $upwd2.focus(function(){
      $(this).next().show();
      $(this).next().next().hide();
      $(this).next().next().next().hide();
    });
    $upwd2.blur(function(){
      $(this).next().hide();
      var upwd=$(this).parent().prev().children(":nth-child(2)").val();
      console.log(upwd);
      var value=$(this).val();
      if(value==upwd){
        $(this).next().next().next().show();
        testupwd2=true;
      }else{
        if(!value){
          $(this).next().next().show();
        }else{
          $(this).next().next().children().html("两次输入密码不一致");
          $(this).next().next().show();
        }
      }
    });

    //提交
    $submit.click(function(e){
      var uname=$uname.val();
      var upwd=$upwd.val();
      var phone=$phone.val();
      var utype=$("input[name='utype']:checked").val();
      e.preventDefault();
      console.log(testcheck);
      if(testuname,testupwd,testupwd2,testphone==true){
        $.ajax({
          url:"http://127.0.0.1:5000/user/register",
          type:"post",
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data:{uname,upwd,phone,utype},
          success:(res)=>{
            var msg=res.msg;
            if(res.code==101){
              alert(msg);
            }else if(res.code==100){
              alert(msg)
              sessionStorage.setItem("uname",uname);
              location.href = "http://localhost:8080/#/login";
            }
          }
        })
      }else{
        alert("填写信息有误，请重新核对后注册")
      }
    })
  },
}
</script>

<style>
/* 头部 */
.head{
  height:130px;
  width:1210px;
  margin:0 auto;
}
.head>div.logo{
  float: left;
  padding-top: 20px;
}
.head div.logo img{
  vertical-align: middle;
}
.head>div.welreg{
  color: #0282d3;
  float: left;
  margin:40px 0 0 15px;
  font-size: 24px;
}
.head>div.reg_log{
  float: right;
  margin-top:50px;
}
.head div.reg_log b{
  margin:0 5px 0;
}
.head div.reg_log a{
  text-decoration:none;
  color: #666;
}
.head div.reg_log a:hover{
  color:#0282d3;
}
/* 注册 */
.register{
  padding:50px 0 100px;
  border-top:4px solid #ddd;
}
.register .reg-out{
  width:1210px;
  margin:0 auto;
}
.register div:last-child{
  clear: both;
}
.register .reg-form{
  float: left;
  margin-left: 198px;
  padding-right: 140px;
  width: 406px;
  border-right:1px solid #ddd;
}
/* 注册头 */
.register .reg-form .form-hd{
  margin-bottom: 20px;
  text-align: center;
}
.register .reg-form .form-hd .hd-top{
  margin-bottom: 15px;
  height: 30px;
  line-height: 30px;
}
.register .reg-form .form-hd .hd-top img{
  vertical-align: bottom
}
.register .reg-form .form-hd .hd-rad{
  text-align: left;
  font-weight: 400;
  color:#666;
}
.register .reg-form .form-hd .hd-rad input{
  margin:0 5px 0 10px ;
  width: 16px;
  height: 16px;
  vertical-align:bottom;
}
.register .reg-form .form-hd .hd-rad input:last-child{
  margin:0 5px 0 20px;
}
/* 注册中 */
.register .reg-form .form-bd ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.register .reg-form .form-bd .reg-item{
  position: relative;
  height: 44px;
  margin-bottom: 25px;
}
.register .reg-form .form-bd .reg-item .item-left{
  position: absolute;
  top: 1px;
  left: 1px;
  padding-left: 20px;
  width: 85px;
  height: 42px;
  line-height: 43px;
  color: #333;
  letter-spacing: 5px;
}
.register .reg-form .form-bd .reg-item .item-right{
  padding: 4px 8px 4px 112px;
  color: #666;
  font-size: 14px;
  height: 44px;
  line-height: 34px;
  border: solid 1px #ddd;
  box-sizing: border-box;
  font-weight: 400;
  width: 100%;
  white-space: nowrap;
}
.register .reg-form .form-bd .reg-item div:nth-child(3),.register .reg-form .form-bd .reg-item div:nth-child(4),.register .reg-form .form-bd .reg-item div:nth-child(5){
  display:none;
  color:#666;
  font-size: 12px;
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  line-height: 25px;
}
.register .reg-form .form-bd .reg-item div:nth-child(4){
  color:#dd2727;
}
.register .reg-form .form-bd .reg-item div:nth-child(5){
  color:rgb(147, 208, 95);
}
.register .reg-form .form-bd .reg-item .item-right:hover,.register .reg-form .form-bd .reg-item .item-right:focus{
  outline: 0;
}
/* 注册底 */
.register .reg-form .form-ft .read{
  font-size: 12px;
  margin-bottom:20px;
}
.register .reg-form .form-ft .read #check{
  vertical-align: middle;
  margin: 0;
}
.register .reg-form .form-ft .read label{
  cursor: pointer;
  margin-left: 5px;
}
.register .reg-form .form-ft .read a{
  text-decoration: none;
  color:#005aa0;
}
.register .reg-form .form-ft .ritreg button{
  display: block;
  font-size: 18px;
  line-height: 22px;
  padding: 10px 166px;
  color: #fff;
  background-color: #0282d3;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
  white-space: nowrap;
  border: solid 1px #ddd;
  width: auto;
  transition: background-color .1s linear;
}
.register .reg-form .form-ft .ritreg button:hover{
  color: #fff;
  background-color: #1c9bec;
}
/* aside */
.register .reg-aside{
  float: left;
  margin: 52px 0 0 50px;
  width: 340px;
}
.register .reg-aside>div{
  margin-bottom: 40px;
}
.register .reg-aside .img{
  margin: 0 auto 15px;
  text-align: center;
}
.register .reg-aside .img img{
  width: 138px;
  height: 138px;
}
.register .reg-aside .gzh{
  text-align: center;
  color: #666;
}
/* footer */
.foot{
  margin:20px auto 0;
}
.foot .foot-out{
  margin:0 auto;
  border-top:1px solid #eee;
  padding: 20px 0;
  font-size: 12px;
  text-align: center;
  width: 1210px;
}
.foot .foot-out>div{
  margin-bottom: 10px;
}
.foot .foot-out a{
  text-decoration: none;
  color: #666;
}
.foot .foot-out a:hover{
  color: #1c9bec
}
.foot .foot-out span{
  margin: 0 10px;
  font-weight: 200;
}
.foot .foot-out .foot-bottom p{
  margin: 0;
  color:#666;
}
</style>