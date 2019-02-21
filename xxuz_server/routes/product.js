const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

//产品列表
router.get("/",(req,res)=>{
  var kwords=req.query.kwords;
  var pno=req.query.pno;
  if(pno===undefined) pno=0;
  //macbook i5 128g
  if(kwords===undefined){
    var sql="select * from xx_product"
    pool.query(sql,(err,result)=>{
      var count=result.length;
      var pageCount=Math.ceil(count/12);
      var products=result.slice(pno*12,pno*12+12);
      var output={pno,count,pageCount,products}
      res.send(output);
    })
  }else{
  kwords=kwords.split(" ");
  //[macbook,i5,128g]
  var arr=kwords.map(function(){
    return " title like ? ";
  })
  //[title like ? , title like ? , title like ?]
  var titles=arr.join(" and ");
  //title like ? and title like ? and title like ?
  var sql="select * , pic from xx_product where "+titles;
  kwords.forEach(function(val,i,arr){
    kwords[i]=`%${val}%`;
  })
  //[%macbook%,%i5%,%128g%]
  pool.query(sql,kwords,(err,result)=>{
    if(err) console.log(err);
    var count=result.length;
    var pageCount=Math.ceil(count/12)
    var products=result.slice(pno*12,pno*12+12)
                              //0
                              //12
                              //24
    var output={pno,count,pageCount,products}
    res.send(output);
  })
  }
})

module.exports=router;