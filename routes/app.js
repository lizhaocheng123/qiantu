//使用express构建web服务器
const express=require('express');
const user=require('./routes/user.js');
const bodyParser=require('body-parser');
/*引入路由模块*/
const index=require("./routes/index.js");
const product=require("./routes/product.js");
const details=require("./routes/details.js")
var app=express();
app.listen(3000);
//托管静态资源到public目录下
app.use(express.static('./public'));
//使用body-parser中间件
app.use(bodyParser.urlencoded({
	extend:false
}));
/*使用路由器来管理路由*/
app.use('/user',user);
app.use("/index",index);
app.use('/product',product);
app.use('/details',details)