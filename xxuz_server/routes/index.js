const express = require("express");
const router = express.Router();
const pool = require("../pool.js");

//首页商品
router.get("/",(req,res)=>{
  var sql="SELECT * FROM xx_index_product"
  pool.query(sql,(err,result)=>{
    res.send(result);
  })
})

//

module.exports=router;