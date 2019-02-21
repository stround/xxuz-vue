$uname=$("[name=uname]");
$upwd=$("[name=upwd]");
$btn=$("#submit");
$check=$("[class=chk-pd]");
$btn.click(function(e){
  e.preventDefault();
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
          location.href = "http://127.0.0.1:5000/register.html";
        }
      }
    })
  }
})