<template>
  <!-- foot -->
  <div class="footer">
    <div class="foot-top">
      <div class="wid-auto">
        <ul>
          <li>
            <a href="javascript:;"><img :src="imgUrl+'img/index/ft-1.jpg'" alt=""></a>
          </li>
          <li>
            <a href="javascript:;"><img :src="imgUrl+'img/index/ft-2.jpg'" alt=""></a>
          </li>
          <li>
            <a href="javascript:;"><img :src="imgUrl+'img/index/ft-3.jpg'" alt=""></a>
          </li>
          <li>
            <a href="javascript:;"><img :src="imgUrl+'img/index/ft-4.jpg'" alt=""></a>
          </li>
        </ul>
        <div style="clear: both;"></div>
      </div>
      <div style="clear: both;"></div>
    </div>
    <div class="foot-center">
      <div class="wid-auto">
        <ul>
          <h3>新手指南</h3>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
        </ul>
        <ul>
          <h3>新手指南</h3>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
        </ul>
        <ul>
          <h3>新手指南</h3>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
        </ul>
        <ul>
          <h3>新手指南</h3>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
        </ul>
        <ul>
          <h3>新手指南</h3>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
          <li><a href="javascript:;">租赁流程</a></li>
        </ul>
        <div class="ct-rt">
          <div class="phone">
            <div>
              <h3>售前热线</h3>
              <p>400-678-5432</p>
            </div>
            <div>
              <h3>售后热线</h3>
              <p>400-678-5482</p>
            </div>
          </div>
          <div class="code">
            <p><img :src="imgUrl+'img/login/code.jpg'" width="142" alt=""></p>
            <p>扫一扫，关注凌雄公众号</p>
          </div>
        </div>
      </div>
      <div style="clear: both;"></div>
    </div>
    <div class="foot-bottom">
        <div class="foot-out">
          <div>
            <a href="javascript:;">关于我们</a><span>|</span>
            <a href="javascript:;">关于我们</a><span>|</span>
            <a href="javascript:;">关于我们</a><span>|</span>
            <a href="javascript:;">关于我们</a><span>|</span>
            <a href="javascript:;">关于我们</a><span>|</span>
            <a href="javascript:;">关于我们</a><span>|</span>
            <a href="javascript:;">关于我们</a>
          </div>
          <div class="footbt-bottom">
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
      </div>
  </div> 
</template>

<script>
export default {
  data() {
    return {
      imgUrl:'../../static/'
    }
  },
}
</script>

<style>
/* foot-top */
.footer{
  margin: 20px auto 0;
}
.footer .foot-top{
  background-color: #0282d3;
}
.footer .foot-top .wid-auto{
  border-bottom: 1px solid #fff;
}
.footer .foot-top ul{
  list-style: none;
}
.footer .foot-top ul li{
  float: left;
}
/* foot-center */
.foot-center{
  padding: 30px;
  background-color: #0282d3;
}
.foot-center ul{
  list-style: none;
  width: 160px;
  float: left;
}
.foot-center ul h3{
  margin-bottom: 15px;
  font-size: 16px;
  color: #fff;
}
.foot-center ul li{
  line-height: 24px;
}
.foot-center ul li a{
  color:#ddd;
  text-decoration: none;
}
.foot-center ul li a:hover{
  color:white;
}
.foot-center .ct-rt{
  float: right;
  width: 350px;
  overflow: hidden;
  text-align: center;
}
.foot-center .ct-rt .phone{
  float: left;
  width: 186px;
  color: #fff;
}
.foot-center .ct-rt .phone div{
  text-align: left;
}
.foot-center .ct-rt .phone div h3{
  font-size: 18px;
  margin-bottom: 3px;
}
.foot-center .ct-rt .phone div p{
  font-size: 22px;
}
.foot-center .ct-rt .phone div:first-child{
  margin-bottom: 15px;
}
.foot-center .ct-rt .code{
  float: right;
  width: 142px;
  margin-top: 5px;
  overflow: hidden;
  color: #fff;
}
.foot-center .ct-rt .code p:last-child{
  margin-top: 5px;
  font-size: 12px;
}
/* foot-bottom */
.foot-bottom{
  padding: 20px 0;
  font-size: 12px;
  text-align: center;
  border-top: #ddd 1px solid;
}
.foot-bottom .foot-out{
  margin:0 auto;
  border-top:1px solid #eee;
  padding: 20px 0;
  font-size: 12px;
  text-align: center;
  width: 1210px;
}
.foot-bottom .foot-out>div{
  margin-bottom: 10px;
}
.foot-bottom .foot-out a{
  text-decoration: none;
  color: #666;
}
.foot-bottom .foot-out a:hover{
  color: #1c9bec
}
.foot-bottom .foot-out span{
  margin: 0 10px;
  font-weight: 200;
}
.foot-bottom .foot-out .footbt-bottomm p{
  margin: 0;
  color:#666;
}
</style>