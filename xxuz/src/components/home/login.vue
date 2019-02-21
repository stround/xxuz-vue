<template>
<div id="login">
  <!-- 头 -->
  <header class="head">
    <div class="logo">
      <router-link to="/">
        <img :src="imgUrl+'img/login/logo.jpg'">
      </router-link>
    </div>
    <div class="welreg">
      欢迎登录
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
  <!-- 登录 -->
  <div class="login">
    <div class="log-out">
      <div class="img">
        <a href="javascript:;">
          <img :src="imgUrl+'img/login/bg.jpg'" alt="">
        </a>
      </div>
      <div class="log-form">
        <div class="form-out">
            <div class="form-top">
              <span>用户登录</span>
              <span><router-link to="/register">注册</router-link></span>
            </div>
            <div class="form-check">
              <div class="chk-pd">
                <div><span>公共场所不建议自动登录，以防账号丢失</span></div>
                <div><span>账户名还没填写，请输入账户名</span></div>
                <div><span>密码还没填写，请输入密码</span></div>
              </div>
            </div>
            <div class="form-bd">
              <ul>
                <li>
                  <div>
                    <img :src="imgUrl+'img/name.png'" alt="">
                  </div>
                  <input name="uname" type="text" placeholder="用户名或手机号" maxlength="20" autocomplete="off">
                </li>
                <li>
                  <div>
                    <img :src="imgUrl+'img/pwd.png'" alt="">
                  </div>
                  <input name="upwd" type="password" placeholder="密码">
                </li>
              </ul>
            </div>
            <div class="form-ft">
              <div class="ft-tp">
                <input id="tweek" type="checkbox"><label for="tweek">两周内自动登录</label>
                <span><a href="javascript:;">忘记密码?</a></span>
              </div>
              <div>
                <button id="submit" @click.prevent="jump()">登 录</button>
              </div>
            </div>
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
  methods:{
    jump(){
      var $uname=$("[name=uname]");
      var $upwd=$("[name=upwd]");
      var $btn=$("#submit");
      var $check=$("[class=chk-pd]");
      $btn.html="nihao"
      if($uname.val()==""){
        $check.children(":first-child").hide();
        $check.children(":nth-child(2)").show();
        $check.children(":last-child").hide();
      }else if($upwd.val()==""){
        $check.children(":first-child").hide();
        $check.children(":nth-child(2)").hide();
        $check.children(":last-child").show();
      }else{
        var uname=$uname.val();
        var upwd=$upwd.val();
        $.ajax({
          url:"http://127.0.0.1:5000/user/login",
          type:"post",
          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data:{uname,upwd},
          success: (res)=>{
            alert(res.msg)
            if(res.code==100){
              sessionStorage.setItem("uname",uname);
              this.$router.push("/")
            }
          }
        })
      }
    }
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
/* 登录 */
.login .log-out{
  width: 1210px;
  margin: 0 auto;
}
/* 图片 */
.login .log-out .img{
  float: left;
}
.login .log-out .img a{
  cursor:pointer;
}
/* 表单 */
/* 头 */
.login .log-out .log-form{
  border: 1px solid #dddddd;
  float: right;
  margin: 50px 40px 0 0;
  width: 350px;
  height: 392px;
}
.login .log-out .log-form .form-out{
  padding: 32px 20px 0;
}
.login .log-out .log-form .form-out .form-top{
  height:42px;
}
.login .log-out .log-form .form-out .form-top span:first-child{
  float: left;
  font-size: 18px;
}
.login .log-out .log-form .form-out .form-top span:last-child{
  float: right;
  margin-top: 7px;
}
.login .log-out .log-form .form-out .form-top span:last-child a{
  color:#0282d3;
  text-decoration: none;
}
/* 验证 */
.login .log-out .log-form .form-out .form-check{
  background-color: #f2f9fd;
  line-height: 20px;
  font-size: 12px;
}
.login .log-out .log-form .form-out .form-check .chk-pd{
  padding: 4px 12px;
  color:#999;
}
.login .log-out .log-form .form-out .form-check .chk-pd div{
  text-align: center;
}
.login .log-out .log-form .form-out .form-check .chk-pd div:nth-child(2),.login .log-out .log-form .form-out .form-check .chk-pd div:nth-child(3){
  display: none;
  color: #dd2727;
}
/* input */
.login .log-out .log-form .form-out .form-bd{
  margin-top: 10px;
}
.login .log-out .log-form .form-out .form-bd ul{
  list-style: none;
  margin: 0;
  padding: 0;
}
.login .log-out .log-form .form-out .form-bd ul li{
  height: 38px;
  margin-bottom: 25px;
  position: relative;
}
.login .log-out .log-form .form-out .form-bd ul li>div{
  position: absolute;
  top: 1px;
  left: 1px;
  width: 36px;
  height: 36px;
  text-align: center;
  line-height: 36px;
}
.login .log-out .log-form .form-out .form-bd ul li>input{
  padding: 8px 8px 8px 40px;
  height: 38px;
  line-height: 20px;
  box-sizing: border-box;
  border: 1px solid #ddd;
  width: 100%;
  transition: all .2s linear;
}
.login .log-out .log-form .form-out .form-bd ul li>input:focus{
  border:1px solid #0282d3;
  outline: 0;
}
/* 底部 */
.login .log-out .log-form .form-out .form-ft .ft-tp{
  margin-bottom: 25px;
  font-size: 12px;
}
.login .log-out .log-form .form-out .form-ft .ft-tp input{
  vertical-align: middle;
  float: left;
  cursor: pointer;
}
.login .log-out .log-form .form-out .form-ft .ft-tp label{
  color:#666;
  cursor: pointer;
}
.login .log-out .log-form .form-out .form-ft .ft-tp span{
  float: right;
}
.login .log-out .log-form .form-out .form-ft .ft-tp span a{
  text-decoration: none;
  color:#666;
}
.login .log-out .log-form .form-out .form-ft div button{
  display: block;
  line-height: 20px;
  font-size: 16px;
  padding: 8px 28px;
  color: #fff;
  background-color: #0282d3;
  box-sizing: border-box;
  cursor: pointer;
  text-align: center;
  font-weight: 400;
  border: solid 1px #ddd;
  border-radius: 3px;
  width: 100%;
}
.login .log-out .log-form .form-out .form-ft div button:hover{
  background-color: #1c9bec;
}
.login .log-out .clear{
  clear: both;
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