const express=require('express');
const pool=require('../pool.js');
var router=express.Router();
router.get('/login',(req,res)=>{
  //获取浏览器请求的数据
  var obj=req.query;
  var $uname=obj.uname;
  if(!$uname){//如果用户名为空
    res.send({code:401,msg:'uname required'});
	return;
  }
  var $upwd=obj.upwd;
  if(!$upwd){
    res.send({code:402,msg:'upwd required'});
	return;
  }
  //执行判断是否登录成功——用户名和密码同时正确
  //查询数据，查询的结果中，要有对应的记录
  var sql='SELECT * FROM login WHERE uname=? AND upwd=?';
  pool.query(sql,[$uname,$upwd],(err,result)=>{
    if(err) throw err;
	console.log(result);
	if(result.length>0){
	  res.send({code:200,msg:'login success'});
	}else{
	  res.send({code:301,msg:'login error'});
	}
  });
});
router.get('/register',(req,res)=>{
  var obj=req.query;
  //验证表单提交的内容是否为空
  //验证用户名为空
  var $uname=obj.uname;
  if($uname==''){
    res.send({code:401,msg:'uname required'});
	return;
  }
  //验证密码为空
  var $upwd=obj.upwd;
  if($upwd==''){
    res.send({code:402,msg:'upwd required'});
    return;
  }
  //验证电话和姓名
  var $phone=obj.phone;
  if($phone==''){
    res.send({code:403,msg:'phone required'});
	return;
  }
  var $user_name=obj.user_name;
  if($user_name==''){
    res.send({code:404,msg:'user_name required'});
	return;
  }
  //以上验证都通过了，执行插入数据库操作
  var sql='INSERT INTO login VALUES(NULL,?,?,?,?)';
  pool.query(sql,[$uname,$upwd,$phone,$user_name],(err,result)=>{
    if(err) throw err;
    //如何判断插入成功————affectedRows
	if(result.affectedRows>0){
	  res.send({code:200,msg:'reg success'});
	}else{
	  res.send({code:301,msg:'reg error'});
	}
  });
});
module.exports=router;