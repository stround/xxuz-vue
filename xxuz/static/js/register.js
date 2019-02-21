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

//阅读检测
if($check.is(":checked")){
  testcheck=true;
}

//提交
$submit.click(function(e){
  var uname=$uname.val();
  var upwd=$upwd.val();
  var phone=$phone.val();
  var utype=$("input[name='utype']:checked").val();
  e.preventDefault();
  console.log(testcheck);
  if(testuname,testupwd,testupwd2,testphone,testcheck==true){
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
          alert(msg);
        }
      }
    })
  }else{
    alert("填写信息有误，请重新核对后注册")
  }
})