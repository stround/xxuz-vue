const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

//商品详情页
router.get("/",(req,res)=>{
  var output={product:{},specs:[],pics:[]};
  var lid=req.query.lid;
  if(lid!==undefined){
    var sql="select * from xx_product where lid=?";
    pool.query(sql,[lid],(err,result)=>{
      if(err) console.log(err);
      output.product=result[0];
      var family_id=output.product.family_id;
      var sql="select lid,spec from xx_product where family_id=?";
      pool.query(sql,[family_id],(err,result)=>{
        if(err) console.log(err);
        output.specs=result;
        var sql="select * from xx_product_pic where family_id=?";
        pool.query(sql,[family_id],(err,result)=>{
          if(err) console.log(err);
          output.pics=result;
          res.send(output);
        })
      })
    })
  }else{
    output.err="请提供lid"
    res.send(output);
  }
})

module.exports=router;