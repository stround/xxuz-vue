const express = require("express");
const router = express.Router();
const pool = require("../pool.js");
//注册
router.post("/register",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var phone=req.body.phone;
  var utype=req.body.utype;
  var sql="INSERT INTO xx_user VALUES(NULL,?,?,?,?)";
  pool.query(sql,[uname,upwd,phone,utype],(err,result)=>{
    if(err){throw err};
    if(result.affectedRows>0){
      res.send({code:100,msg:"注册成功"});
    }else{
      res.send({code:101,msg:"填写信息有误，请重新核对后注册"});
    }
  })
});
//登录
router.post("/login",(req,res)=>{
  var uname=req.body.uname;
  var upwd=req.body.upwd;
  var sql="SELECT * FROM xx_user WHERE uname=? AND upwd=?";
  pool.query(sql,[uname,upwd],(err,result)=>{
    if(err){throw err};
    if(result.length>0){
      res.send({code:100,msg:"登录成功"})
    }else{
      res.send({code:101,msg:"用户名或密码输入错误,请检查后登录"})
    }
  })
})
//检测
//用户名
router.get("/reguser",(req,res)=>{
  var uname=req.query.uname;
  var sql="SELECT * FROM xx_user WHERE uname=?";
  pool.query(sql,[uname],(err,result)=>{
    if(err){throw err};
    if(result.length>0){
      res.send({code:101,msg:"该用户名已经存在"});
    }else{
      res.send({code:100,msg:"该用户名可用"});
    }
  })
})
//手机号
router.get("/regphone",(req,res)=>{
  var phone=req.query.phone;
  var sql="SELECT * FROM xx_user WHERE phone=?";
  pool.query(sql,[phone],(err,result)=>{
    if(err){throw err};
    if(result.length>0){
      res.send({code:101,msg:"该手机号已被注册"});
    }else{
      res.send({code:100,msg:"该手机号可用"})
    }
  })
})
module.exports=router;