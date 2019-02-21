<template>
<div id="index">
  <!-- swiper -->
  <div class="swiper" id="swiper">
    <div class="slider">
      <div class="banner">
        <div class="banner-slid">
          <div class="bd">
            <ul>
              <li :class="{'d-none':hide3}">
                <div class="banner-img">
                  <a href="javascript:;">
                    <img :src="imgUrl+'img/index/banner3.jpg'">
                  </a>
                </div>
              </li>
              <li :class="{'d-none':hide2}">
                <div class="banner-img">
                  <router-link v-if="list[0].pid" :to="`/detail/${list[0].pid}`">
                    <img :src="imgUrl+'img/index/banner1.jpg'">
                  </router-link>
                </div>
              </li>
              <li :class="{'d-none':hide}">
                <div class="banner-img">
                  <router-link v-if="list[0].pid" :to="`/detail/${list[0].pid}`">
                    <img :src="imgUrl+'img/index/banner2.jpg'">
                  </router-link>
                </div>
              </li>
            </ul>
          </div>
          <div class="bd-slid">
            <div class="wrap">
              <div class="hd">
                <ul>
                  <li></li>
                  <li></li>
                </ul>
              </div>
              <a class="prev" href="javascript:;" @click="prev()"></a>
              <a class="next" href="javascript:;" @click="next()"></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- rowbanner -->
  <div class="rowbanner">
    <div class="box">
      <ul>
        <li>
          <a href="javascript:;">
            <div><img :src="imgUrl+'img/index/row1.png'" alt=""></div>
            <div>安全保障</div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div><img :src="imgUrl+'img/index/row2.png'" alt=""></div>
            <div>安全保障</div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div><img :src="imgUrl+'img/index/row3.png'" alt=""></div>
            <div>安全保障</div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div><img :src="imgUrl+'img/index/row4.png'" alt=""></div>
            <div>安全保障</div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div><img :src="imgUrl+'img/index/row5.png'" alt=""></div>
            <div>安全保障</div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div><img :src="imgUrl+'img/index/row6.png'" alt=""></div>
            <div>安全保障</div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div><img :src="imgUrl+'img/index/row7.png'" alt=""></div>
            <div>安全保障</div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div><img :src="imgUrl+'img/index/row8.png'" alt=""></div>
            <div>安全保障</div>
          </a>
        </li>
      </ul>
      <div class="banner-box">
        <ul>
          <li>
            <router-link v-if="list[2].pid" :to="`/detail/${list[2].pid}`">
              <img :src="imgUrl+'/img/index/show1.jpg'">
            </router-link>
          </li>
          <li>
            <router-link v-if="list[0].pid" :to="`/detail/${list[0].pid}`">
              <img :src="imgUrl+'/img/index/show2.jpg'">
            </router-link>
          </li>
          <li>
            <router-link v-if="list[1].pid" :to="`/detail/${list[1].pid}`">
              <img :src="imgUrl+'/img/index/show3.jpg'">
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
  <!-- 今日推荐 -->
  <div class="floorhot" id="anchor00">
    <div class="box">
      <div class="box-bd">
        <div class="floorhot-banner">
            <img :src="imgUrl+'img/index/hot.jpg'" width="228" height="315"/>
        </div>
        <div class="floorhot-list">
          <div class="ladyScroll">
            <div class="scrollWrap">
              <ul class="dlList">
                <li v-for="item of list">
                  <div class="ui-pro">
                    <div class="ui-pro-img">
                      <router-link v-if="item.pid" :to="`/detail/${item.pid}`">
                        <img :src="imgUrl+item.pic">
                      </router-link>
                    </div>
                    <div class="ui-pro-title-row2">
                      <router-link v-if="item.pid" :to="`/detail/${item.pid}`">{{item.details}}</router-link>
                    </div>
                    <div class="ui-pro-price">
                      <div class="desc">
                        {{item.spec}}
                      </div>
                      <div class="price">
                        <span class="c-price">￥{{item.price}}</span>/月
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 1F -->
  <div class="floor" id="anchor01">
    <div class="box">
      <div class="box-hd">
        <div class="floor-flooricon">
          <img :src="imgUrl+'img/index/floor01.png'" alt="">
        </div>
        <div class="floor-title">办公首选</div>
        <div class="floor-sub">
          <ul>
            <li><a href="javascript:;">了解更多></a></li>
          </ul>
        </div>
      </div>
      <div class="box-bd">
        <div class="floor-banner">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/f1-left.jpg'"/>
            </a>
        </div>
        <div class="floor-pro-big">
          <div class="ui-pro" v-for="item of list">
            <div class="ui-pro-img">
              <router-link v-if="item.pid" :to="`/detail/${item.pid}`">
                <img :src="imgUrl+item.pic" />
              </router-link>
            </div>
            <div class="ui-pro-title-row2 f-13">
              <router-link v-if="item.pid" :to="`/detail/${item.pid}`">{{item.details}}</router-link>
            </div>
            <div class="ui-pro-price">
              <div class="desc">
                {{item.spec}}
              </div>
              <div class="price">
                <span class="c-price f-16">￥{{item.price}}</span>/月
              </div>
            </div>
          </div>
          <div class="banner-pro-big pos-r">
            <div class="fullSlide">
              <div class="bd">
                <ul>
                  <li>
                    <div class="fullSlide-img">
                      <a href="javascript:;"  target="_blank" class="fullSlide-a">
                        <img :src="imgUrl+'img/index/f1-bn.jpg'" width="500" height="285"/>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="rank-box">
          <div class="box-hd title">人气排行</div>
          <div class="box-bd">
            <div class="rank-pro-show">
              <div class="rank-pro-bd">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/B9/Ci29Flt7d_mAPlqFAADNE1cVmRY138_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad E480 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥140.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">1</div>
              </div>
            </div>
            <div class="rank-pro-show">
              <div class="rank-pro-bd">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/BA/Ci29Flt72heAeTj9AAByDl31mG8862_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad NEW S2...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥268.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">3</div>
              </div>
            </div>  
            <div class="rank-pro-show">
              <div class="rank-pro-hd" @mouseover="show1()">
                <a href="javascript:;" target="_blank">
                  <span class="rank-num">3</span>
                  <span class="rank-pro-name">ThinkPad NEW S2...</span>
                </a>
              </div>
              <div class="rank-pro-bd" :class="{'d-none':pro1bdHide}">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank"><img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/B9/Ci29Flt7d-OACjxdAADNE1cVmRY457_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad E480 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥217.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">2</div>
              </div>
            </div>
            <div class="rank-pro-show">
              <div class="rank-pro-hd" @mouseover="show2()">
                <a href="javascript:;"  target="_blank">
                  <span class="rank-num">4</span>
                  <span class="rank-pro-name">ThinkPad T430 1...</span>
                </a>
              </div>
              <div class="rank-pro-bd" :class="{'d-none':pro2bdHide}">
                <div class="rank-pro-img">
                  <a href="javascript:;"  target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/4C/Ci29FllMtEGAerJZAAG3L5mqx8E942_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;"  target="_blank">ThinkPad T430 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥99.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
  <div class="floor" id="anchor02">
    <div class="box">
      <div class="box-hd">
        <div class="floor-flooricon">
          <img :src="imgUrl+'img/index/floor02.png'" alt="">
        </div>
        <div class="floor-title">便捷商务</div>
        <div class="floor-sub">
          <ul>
            <li><a href="javascript:;">了解更多></a></li>
          </ul>
        </div>
      </div>
      <div class="box-bd">
        <div class="floor-banner">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/f2-left.jpg'"/>
            </a>
        </div>
        <div class="floor-pro-big">
          <div class="ui-pro" v-for="item of list">
            <div class="ui-pro-img">
              <router-link v-if="item.pid" :to="`/detail/${item.pid}`">
                <img :src="imgUrl+item.pic" />
              </router-link>
            </div>
            <div class="ui-pro-title-row2 f-13">
              <router-link v-if="item.pid" :to="`/detail/${item.pid}`">{{item.details}}</router-link>
            </div>
            <div class="ui-pro-price">
              <div class="desc">
                {{item.spec}}
              </div>
              <div class="price">
                <span class="c-price f-16">￥{{item.price}}</span>/月
              </div>
            </div>
          </div>
          <div class="banner-pro-big pos-r">
            <div class="fullSlide">
              <div class="bd">
                <ul>
                  <li>
                    <div class="fullSlide-img">
                      <a href="javascript:;"  target="_blank" class="fullSlide-a">
                        <img :src="imgUrl+'img/index/f2-bn.jpg'" width="500" height="285"/>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="rank-box">
          <div class="box-hd title">人气排行</div>
          <div class="box-bd">
            <div class="rank-pro-show">
              <div class="rank-pro-bd">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/B9/Ci29Flt7d_mAPlqFAADNE1cVmRY138_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad E480 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥140.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">1</div>
              </div>
            </div>
            <div class="rank-pro-show">
              <div class="rank-pro-bd">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/BA/Ci29Flt72heAeTj9AAByDl31mG8862_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad NEW S2...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥268.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">3</div>
              </div>
            </div>  
            <div class="rank-pro-show">
              <div class="rank-pro-hd" @mouseover="show1()">
                <a href="javascript:;" target="_blank">
                  <span class="rank-num">3</span>
                  <span class="rank-pro-name">ThinkPad NEW S2...</span>
                </a>
              </div>
              <div class="rank-pro-bd" :class="{'d-none':pro1bdHide}">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank"><img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/B9/Ci29Flt7d-OACjxdAADNE1cVmRY457_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad E480 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥217.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">2</div>
              </div>
            </div>
            <div class="rank-pro-show">
              <div class="rank-pro-hd" @mouseover="show2()">
                <a href="javascript:;"  target="_blank">
                  <span class="rank-num">4</span>
                  <span class="rank-pro-name">ThinkPad T430 1...</span>
                </a>
              </div>
              <div class="rank-pro-bd" :class="{'d-none':pro2bdHide}">
                <div class="rank-pro-img">
                  <a href="javascript:;"  target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/4C/Ci29FllMtEGAerJZAAG3L5mqx8E942_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;"  target="_blank">ThinkPad T430 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥99.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
  <div class="floor" id="anchor03">
    <div class="box">
      <div class="box-hd">
        <div class="floor-flooricon">
          <img :src="imgUrl+'img/index/floor03.png'" alt="">
        </div>
        <div class="floor-title">图形设计</div>
        <div class="floor-sub">
          <ul>
            <li><a href="javascript:;">了解更多></a></li>
          </ul>
        </div>
      </div>
      <div class="box-bd">
        <div class="floor-banner">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/f3-left.jpg'"/>
            </a>
        </div>
        <div class="floor-pro-big">
          <div class="ui-pro" v-for="item of list">
            <div class="ui-pro-img">
              <router-link v-if="item.pid" :to="`/detail/${item.pid}`">
                <img :src="imgUrl+item.pic" />
              </router-link>
            </div>
            <div class="ui-pro-title-row2 f-13">
              <router-link v-if="item.pid" :to="`/detail/${item.pid}`">{{item.details}}</router-link>
            </div>
            <div class="ui-pro-price">
              <div class="desc">
                {{item.spec}}
              </div>
              <div class="price">
                <span class="c-price f-16">￥{{item.price}}</span>/月
              </div>
            </div>
          </div>
          <div class="banner-pro-big pos-r">
            <div class="fullSlide">
              <div class="bd">
                <ul>
                  <li>
                    <div class="fullSlide-img">
                      <a href="javascript:;"  target="_blank" class="fullSlide-a">
                        <img :src="imgUrl+'img/index/f3-bn.jpg'" width="500" height="285"/>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="rank-box">
          <div class="box-hd title">人气排行</div>
          <div class="box-bd">
            <div class="rank-pro-show">
              <div class="rank-pro-bd">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/B9/Ci29Flt7d_mAPlqFAADNE1cVmRY138_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad E480 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥140.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">1</div>
              </div>
            </div>
            <div class="rank-pro-show">
              <div class="rank-pro-bd">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/BA/Ci29Flt72heAeTj9AAByDl31mG8862_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad NEW S2...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥268.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">3</div>
              </div>
            </div>  
            <div class="rank-pro-show">
              <div class="rank-pro-hd" @mouseover="show1()">
                <a href="javascript:;" target="_blank">
                  <span class="rank-num">3</span>
                  <span class="rank-pro-name">ThinkPad NEW S2...</span>
                </a>
              </div>
              <div class="rank-pro-bd" :class="{'d-none':pro1bdHide}">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank"><img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/B9/Ci29Flt7d-OACjxdAADNE1cVmRY457_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad E480 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥217.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">2</div>
              </div>
            </div>
            <div class="rank-pro-show">
              <div class="rank-pro-hd" @mouseover="show2()">
                <a href="javascript:;"  target="_blank">
                  <span class="rank-num">4</span>
                  <span class="rank-pro-name">ThinkPad T430 1...</span>
                </a>
              </div>
              <div class="rank-pro-bd" :class="{'d-none':pro2bdHide}">
                <div class="rank-pro-img">
                  <a href="javascript:;"  target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/4C/Ci29FllMtEGAerJZAAG3L5mqx8E942_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;"  target="_blank">ThinkPad T430 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥99.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
  <div class="floor" id="anchor04">
    <div class="box">
      <div class="box-hd">
        <div class="floor-flooricon">
          <img :src="imgUrl+'img/index/floor04.png'" alt="">
        </div>
        <div class="floor-title">技术开发</div>
        <div class="floor-sub">
          <ul>
            <li><a href="javascript:;">了解更多></a></li>
          </ul>
        </div>
      </div>
      <div class="box-bd">
        <div class="floor-banner">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/f4-left.jpg'"/>
            </a>
        </div>
        <div class="floor-pro-big">
          <div class="ui-pro" v-for="item of list">
            <div class="ui-pro-img">
              <router-link v-if="item.pid" :to="`/detail/${item.pid}`">
                <img :src="imgUrl+item.pic" />
              </router-link>
            </div>
            <div class="ui-pro-title-row2 f-13">
              <router-link v-if="item.pid" :to="`/detail/${item.pid}`">{{item.details}}</router-link>
            </div>
            <div class="ui-pro-price">
              <div class="desc">
                {{item.spec}}
              </div>
              <div class="price">
                <span class="c-price f-16">￥{{item.price}}</span>/月
              </div>
            </div>
          </div>
          <div class="banner-pro-big pos-r">
            <div class="fullSlide">
              <div class="bd">
                <ul>
                  <li>
                    <div class="fullSlide-img">
                      <a href="javascript:;"  target="_blank" class="fullSlide-a">
                        <img :src="imgUrl+'img/index/f4-bn.jpg'" width="500" height="285"/>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="rank-box">
          <div class="box-hd title">人气排行</div>
          <div class="box-bd">
            <div class="rank-pro-show">
              <div class="rank-pro-bd">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/B9/Ci29Flt7d_mAPlqFAADNE1cVmRY138_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad E480 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥140.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">1</div>
              </div>
            </div>
            <div class="rank-pro-show">
              <div class="rank-pro-bd">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/BA/Ci29Flt72heAeTj9AAByDl31mG8862_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad NEW S2...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥268.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">3</div>
              </div>
            </div>  
            <div class="rank-pro-show">
              <div class="rank-pro-hd" @mouseover="show1()">
                <a href="javascript:;" target="_blank">
                  <span class="rank-num">3</span>
                  <span class="rank-pro-name">ThinkPad NEW S2...</span>
                </a>
              </div>
              <div class="rank-pro-bd" :class="{'d-none':pro1bdHide}">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank"><img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/B9/Ci29Flt7d-OACjxdAADNE1cVmRY457_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad E480 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥217.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">2</div>
              </div>
            </div>
            <div class="rank-pro-show">
              <div class="rank-pro-hd" @mouseover="show2()">
                <a href="javascript:;"  target="_blank">
                  <span class="rank-num">4</span>
                  <span class="rank-pro-name">ThinkPad T430 1...</span>
                </a>
              </div>
              <div class="rank-pro-bd" :class="{'d-none':pro2bdHide}">
                <div class="rank-pro-img">
                  <a href="javascript:;"  target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/4C/Ci29FllMtEGAerJZAAG3L5mqx8E942_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;"  target="_blank">ThinkPad T430 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥99.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
  <div class="floor" id="anchor05">
    <div class="box">
      <div class="box-hd">
        <div class="floor-flooricon">
          <img :src="imgUrl+'img/index/floor05.png'" alt="">
        </div>
        <div class="floor-title">衍生设备</div>
        <div class="floor-sub">
          <ul>
            <li><a href="javascript:;">了解更多></a></li>
          </ul>
        </div>
      </div>
      <div class="box-bd">
        <div class="floor-banner">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/f5-left.jpg'"/>
            </a>
        </div>
        <div class="floor-pro-big">
          <div class="ui-pro" v-for="item of list">
            <div class="ui-pro-img">
              <router-link v-if="item.pid" :to="`/detail/${item.pid}`">
                <img :src="imgUrl+item.pic" />
              </router-link>
            </div>
            <div class="ui-pro-title-row2 f-13">
              <router-link v-if="item.pid" :to="`/detail/${item.pid}`">{{item.details}}</router-link>
            </div>
            <div class="ui-pro-price">
              <div class="desc">
                {{item.spec}}
              </div>
              <div class="price">
                <span class="c-price f-16">￥{{item.price}}</span>/月
              </div>
            </div>
          </div>
          <div class="banner-pro-big pos-r">
            <div class="fullSlide">
              <div class="bd">
                <ul>
                  <li>
                    <div class="fullSlide-img">
                      <a href="javascript:;"  target="_blank" class="fullSlide-a">
                        <img :src="imgUrl+'img/index/f5-bn.jpg'" width="500" height="285"/>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="rank-box">
          <div class="box-hd title">人气排行</div>
          <div class="box-bd">
            <div class="rank-pro-show">
              <div class="rank-pro-bd">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/B9/Ci29Flt7d_mAPlqFAADNE1cVmRY138_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad E480 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥140.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">1</div>
              </div>
            </div>
            <div class="rank-pro-show">
              <div class="rank-pro-bd">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/BA/Ci29Flt72heAeTj9AAByDl31mG8862_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad NEW S2...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥268.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">3</div>
              </div>
            </div>  
            <div class="rank-pro-show">
              <div class="rank-pro-hd" @mouseover="show1()">
                <a href="javascript:;" target="_blank">
                  <span class="rank-num">3</span>
                  <span class="rank-pro-name">ThinkPad NEW S2...</span>
                </a>
              </div>
              <div class="rank-pro-bd" :class="{'d-none':pro1bdHide}">
                <div class="rank-pro-img">
                  <a href="javascript:;" target="_blank"><img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/B9/Ci29Flt7d-OACjxdAADNE1cVmRY457_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;" target="_blank">ThinkPad E480 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥217.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">2</div>
              </div>
            </div>
            <div class="rank-pro-show">
              <div class="rank-pro-hd" @mouseover="show2()">
                <a href="javascript:;"  target="_blank">
                  <span class="rank-num">4</span>
                  <span class="rank-pro-name">ThinkPad T430 1...</span>
                </a>
              </div>
              <div class="rank-pro-bd" :class="{'d-none':pro2bdHide}">
                <div class="rank-pro-img">
                  <a href="javascript:;"  target="_blank">
                    <img width="77" height="77" src="http://img.lxzl.com.cn/group1/M00/02/4C/Ci29FllMtEGAerJZAAG3L5mqx8E942_500x500.jpg" alt="人气商品" />
                  </a>
                </div>
                <div class="rank-pro-desc-box">
                  <div class="rank-pro-desc">
                    <a href="javascript:;"  target="_blank">ThinkPad T430 1...</a>
                  </div>
                  <div class="rank-pro-price">
                    <span class="c-red f-16">￥99.00</span>/月
                  </div>
                </div>
                <div class="icon-rank-num">4</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="clear: both;"></div>
  </div>
  <!-- 6F -->
  <div class="floor f6" id="floor06">
    <div class="box">
      <div class="box-hd">
        <div class="floor-title"><span>服务客户</span></div>
      </div>
      <div class="box-bd J_guess">
        <div>
          <ul class="J_guessUl">
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/huawei.jpg'" width="150px" height="72px"/>
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/hengda.jpg'" width="150px" height="72px"/>
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/361.jpg'" width="150px" height="72px"/>
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/huarun.jpg'" width="150px" height="72px"/>
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/wanke.jpg'" width="150px" height="72px"/>
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/jinba.jpg'" width="150px" height="72px"/>
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/baoneng.jpg'" width="150px" height="72px"/>
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/hualida.jpg'" width="150px" height="72px"/>
            </a>
          </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <!-- 7F -->
  <div class="floor f7" id="anchor07">
    <div class="box">
      <div class="box-hd">
        <div class="floor-title"><span>合作伙伴</span></div>
      </div>
      <div class="box-bd J_guess">
        <ul class="J_guessUl">
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/jingdong.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/pp.png'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/intel.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/thinkpad.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/hp.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/dell.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/kygf.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/des.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/hz.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/fk.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/wyz.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/mz.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/hfz.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/3w.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/lpw.jpg'" width="150px" height="72px" />
            </a>
          </li>
          <li class="J_guessItem">
            <a href="javascript:;">
              <img :src="imgUrl+'img/index/tx.jpg'" width="150px" height="72px" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <p style="clear:both;" id="aaa"></p>
</div>
</template>

<script>
export default {
  data() {
    return {
      list:[],
      pid:{},
      imgUrl:'../../../static/',
      hide:false,
      hide2:true,
      hide3:true,
      pro1bdHide:true,
      pro2bdHide:true,
    }
  },
  mounted() {
    var uname=sessionStorage.getItem("uname");
    var Div=document.getElementById("top")
    var Loged=document.querySelector(".loged")
    if(uname){
      Div.style.display="none";
      Loged.style.display="block"
    }else{
      Div.innerHTML="<span>您好欢迎来到小熊U租，请</span><a href='http://localhost:8080/#/login'>登录</a> / <a href='http://localhost:8080/#/register'>注册</a>"
    }
  },
  created() {
    var url="http://127.0.0.1:5000/index"
    this.axios.get(url).then((res)=>{
      this.list=res.data;
    })
  },
  methods: {
    show1() {
      this.pro1bdHide=false;
    },
    show2() {
      this.pro2bdHide=false;
    },
    prev() {
      if(this.hide==false){
        this.hide2=false;
        this.hide=true;
        this.hide3=true;
      }else if(this.hide2==false){
        this.hide3=false;
        this.hide=true;
        this.hide2=true;
      }else if(this.hide3==false){
        this.hide=false;
        this.hide2=true;
        this.hide3=true;
      }
    },
    next() {
      if(this.hide==false){
        this.hide2=false;
        this.hide=true;
        this.hide3=true;
      }else if(this.hide2==false){
        this.hide3=false;
        this.hide=true;
        this.hide2=true;
      }else if(this.hide3==false){
        this.hide=false;
        this.hide2=true;
        this.hide3=true;
      }
    }
  },
}
</script>

<style>
.categorys-bd{
  display:block;
}
.d-none{
  display:none;
}
/* swiper */
.swiper{
  width: 1210px;
  margin: 0 auto;
}
.swiper .slider{
  position: relative;
  height: 432px;
  z-index: 1;
}
.swiper .slider .banner{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 432px;
  overflow: hidden;
}
.swiper .slider .banner-slid{
  width: 100%;
  position: relative;
  height: 432px;
}
.swiper .slider .banner-slid .bd{
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.swiper .slider .banner-slid .bd ul{
  position: relative;
  height: 432px;
  width:100%;
}
.swiper .slider .banner-slid .bd ul li{
  position: absolute;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 432px;
  overflow: hidden;
  text-align: center;
}
.swiper .slider .banner-slid .bd .banner-img{
  position: relative;
  z-index: 1;
  display: block;
  width: 1210px;
  height: 432px;
  margin: auto;
  padding: 0;
}
.swiper .slider .banner-slid .bd .banner-img a{
  position: absolute;
  z-index: 999;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  padding: 0;
}
.swiper .slider .banner-slid .bd-slid{
  position: relative;
  top: -432px;
  width: 768px;
  height: 432px;
  margin: auto;
  padding: 0 204px 0 238px;
}
.swiper .slider .banner-slid .bd-slid .wrap{
  position: relative;
  width: 972px;
  height: 432px;
}
.hd{
  width: 100%;
  height: 12px;
  position: absolute;
  bottom: 21px;
  z-index: 10;
  text-align: center;
}
.hd ul li{
  overflow: hidden;
  display: inline-block;
  margin-right: 12px;
  width: 12px;
  height: 12px;
  line-height: 999px;
  text-align: center;
  background: #366477;
  cursor: pointer;
  border-radius: 50%;
}
.hd ul li.on{
  background: #fff;
  color: #fff;
}
.prev{
  position: absolute;
  left: 20px;
  top: 50%;
  z-index: 10;
  margin-top: -26px;
  width: 30px;
  height: 52px;
  background-color: #000;
  background: url(../../../static/img/index/slider-pre.png) no-repeat;
  color: #fff;
}
.next{
  position: absolute;
  right: 20px;
  top: 50%;
  z-index: 10;
  margin-top: -26px;
  width: 30px;
  height: 52px;
  background: url(../../../static/img/index/slider-next.png) no-repeat;
  color: #fff;
}
/* rowbanner */
.rowbanner{
  width: 1210px;
  margin: 30px auto 40px;
}
.rowbanner .box>ul{
  float: left;
  width: 484px;
  overflow: hidden;
}
.rowbanner .box>ul>li{
  width: 121px;
  height: 70px;
  float: left;
}
.rowbanner .box>ul>li a{
  display: block;
  padding: 12px 0;
  font-size: 13px;
  color: #333;
  width: 100%;
  background-color: #f9f9f9;
  text-align: center;
}
.rowbanner .box>ul>li a:hover{
  background-color: #f1f1f1;
  color: #1c9bec;
}
.rowbanner .box>ul>li a div:last-child{
  margin-top: 6px;
}
.banner-box{
  float: left;
}
.banner-box ul li{
  margin-left: 10px;
  float: left;
}
/* 今日推荐 */
.floorhot{
  height:315px;overflow:hidden;width:1210px;margin:0 auto;
}
.floorhot-banner{
  float:left;width:228px;height:315px
}
.floorhot-banner img{
  vertical-align:bottom
}
.floorhot-list{
  margin-left:228px;height:315px
}
.ladyScroll{
  width:100%;height:315px;position:relative
}
.ladyScroll .prev{
  left:0;
  margin-top:-28px;
  z-index:100;
  display: block;
}
.ladyScroll .next{
  right:2px;
  left: auto;
  display: block;
}
.ladyScroll .scrollWrap{
  width:100%;overflow:hidden;position:absolute
}
.ladyScroll li{
  position:relative;float:left;margin:0 0 0 -1px;width:244px;height:313px;overflow:hidden;border:#eee 1px solid;transition:all .2s;
}
.ladyScroll li:hover{
  z-index:1;border-color:#0282d3
}
.ladyScroll .ui-pro{
  text-align:center
}
.ladyScroll .ui-pro-img{
  width:192px;height:192px;margin:20px auto 10px
}
.ladyScroll .ui-pro-price{
  margin-top:5px;position:relative
}
.ui-pro{
  padding:0 20px
}
.ui-pro a{
  color:#333
}
.ui-pro a:hover{
  color:#0282d3
}
.ui-pro-img{
  width:154px;height:154px;overflow:hidden;margin:5px auto
}
.ui-pro-img img{
  width:100%;height:100%;transition:all .3s;
}
.ui-pro:hover .ui-pro-img img{
  transform:scale(1.5,1.5);
}
.ui-pro-title-row1{
  height:18px;line-height:18px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden
}
.ui-pro-title-row{
  height:36px;line-height:18px;padding:0 12px;text-overflow:ellipsis;overflow:hidden
}
.ui-pro-title-row2{
  height:36px;line-height:18px;overflow:hidden
}
.ui-pro-title-row3{
  height:54px;line-height:18px;overflow:hidden
}
.ui-pro-price{
  margin-top:5px;position:relative
}
.ui-pro-price .desc{
  margin-right:90px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden
}
.ui-pro-price .price{
  position:absolute;right:0;top:0
}
.ui-pro-price .price .c-price{
  color:#ed2441;
}

/* 1F */
.floor {
  margin:0 auto;
  margin-top:40px;
  width:1210px;
}
.floor .box-hd {
	height:54px;
	padding:0 0 10px;
	border-bottom:#76d8ff 1px solid
}
.floor-title {
	float:left;
	height:54px;
	line-height:44px;
	color:#333;
	font-size:24px
}
.floor-flooricon {
	float:left;
	margin-right:15px;
	width:47px;
	height:47px
}
.floor-sub {
	float:right;
	margin-top:19px
}
.floor-sub li {
	float:left;
	padding-left:14px;
	margin-left:16px;
	height:15px;
	line-height:15px;
	border-left:#dfdfdf 1px solid
}
.floor-sub li:first-child {
	border:0
}
.floor-sub li a{
  color:#999;
}
.floor-sub li a:hover{
  color:#0282d3;
}
.floor-banner {
	float:left;
	width:240px;
	height:570px
}
.floor-banner img {
	width:100%;
	height:100%
}
.floor-pro-big {
	float:left;
	width:753px;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box;
	transition:all .2s;
	-moz-transition:all .2s;
	-webkit-transition:all .2s;
	-o-transition:all .2s
}
.floor-pro-big .ui-pro {
	float:left;
	width:248px;
	height:283px;
	border:#eee 1px solid;
	padding:0;
	border-right-color:#fff;
	border-top-color:#fff
}
.floor-pro-big .ui-pro-img {
	width:192px;
	height:192px;
	margin:10px auto
}
.floor-pro-big .ui-pro-title-row2 {
	margin:0 20px
}
.floor-pro-big .ui-pro-price {
	margin:0 20px 10px;
	text-align:center
}
.floor-pro-big .banner-pro-big {
	float:left;
	width:498px;
	height:283px;
	border:1px solid #eee;
	border-right-color:#fff;
	border-top-color:transparent;
	overflow:hidden
}
.floor-pro-big .fullSlide {
	margin-left:-1px;
	border:1px solid #eee;
	margin-top:-1px;
	border-right-color:#fff
}
.floor-pro-big .fullSlide,.floor-pro-big .fullSlide .bd li,.floor-pro-big .fullSlide .bd .fullSlide-a {
	height:284px
}
.floor-pro-big .fullSlide .bd .fullSlide-img,.floor-pro-big .fullSlide .fullSlide-hd .wrap {
	width:500px;
	height:284px;
	padding:0
}
.floor-pro-big .fullSlide .fullSlide-hd {
	position:relative;
	top:-284px;
	width:auto;
	height:284px;
	padding:0
}
.floor-pro-big .fullSlide .hd ul li {
	background-color:#c0cbcc
}
.floor-pro-big .fullSlide .hd ul .on {
	background-color:#666
}
.rank-box {
	float:left;
	width:218px;
	height:568px;
	margin-left:-3px;
	border:1px solid #eee;
	border-top-color:transparent
}
.rank-box .title {
	width:100%;
	height:40px;
	line-height:40px;
	padding:0;
	font-size:15px;
	border-bottom:1px solid #eee;
	color:#666;
	text-align:center
}
.rank-box .rank-pro-show .box-hd {
	height:50px;
	padding:0 11px;
	border-bottom:1px solid #eee;
	line-height:50px;
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis
}
.rank-box .rank-num {
	margin:0 5px;
	font-size:16px;
	color:#67b4e5
}
.rank-box .rank-pro-name {
	font-size:13px;
	color:#666
}
.rank-box .box-bd {
	width:100%;
	padding:0 11px;
	-webkit-box-sizing:border-box;
	-moz-box-sizing:border-box;
	box-sizing:border-box
}
.rank-box .rank-pro-hd {
	width:100%;
	height:49px;
	line-height:49px;
	border-bottom:1px solid #eee
}
.rank-box .rank-pro-hd2 {
	border:0
}
.rank-box .rank-pro-bd {
	position:relative;
	border-bottom:1px solid #eee;
	overflow:hidden
}
.rank-box .rank-pro-bd2 {
	border:0
}
.rank-box .rank-pro-img,.rank-box .rank-pro-desc-box {
	float:left
}
.rank-box .rank-pro-img {
	width:80px;
	height:80px;
	margin-top:10px;
	text-align:center;
	overflow:hidden
}
.rank-box .rank-pro-desc-box {
	width:90px;
	padding:11px 0;
	margin-left:16px
}
.rank-box .rank-pro-desc {
	height:36px;
	line-height:18px;
	overflow:hidden
}
.rank-box .rank-pro-price {
	margin-top:13px
}
.rank-box .rank-pro-price .c-red{
  color:#ed2441;
}
.rank-box .icon-rank-num {
	position:absolute;
	top:8px;
	left:0;
	width:22px;
	height:24px;
	opacity:.6;
	filter:alpha(opacity=60);
	text-align:center;
	color:#fff
}
/* 6F */
.f6 .box-hd{
  border-color:white;
  padding:0;
}
.f6 .box-hd .floor-title{
  float: left;
  height: 54px;
  line-height: 44px;
  color: #333;
  font-size: 24px;
}
.f6 .box-hd .floor-title span{
  color: #666;
}
.f6 .box-bd div{
  width: 1214px;
  height: 72px;
  overflow: hidden;
}
.f6 .box-bd .J_guessUl{
  margin: 0 0 0 -2px;
}
.f6 .box-bd .J_guessUl .J_guessItem{
  float: left;
  margin: 0 0 0 2px;
  width: 150px;
  height: 72px;
}
/* 7F */
.f7 .box-hd{
  border-color:white;
  padding:0;
}
.f7 .box-hd .floor-title{
  float: left;
  height: 54px;
  line-height: 44px;
  color: #333;
  font-size: 24px;
}
.f7 .box-hd .floor-title span{
  color: #666;
}
.f7 .box-bd .J_guessUl .J_guessItem{
  float: left;
  margin: 0 0 -1px -1px;
  width: 150px;
  height: 72px;
  border: #dfdfdf 1px solid;
}
</style>
