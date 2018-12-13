const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.get("/product",(req,res)=>{
    var sql="SELECT * FROM product1_pic";
    pool.query(sql,[],(err,result)=>{
        if(err) console.log(err)
        res.writeHead(200,{
            "Content-Type":"application/json;charset=utf-8",
            "Access-Control-Allow-Origin":"*"
        })
        res.write(JSON.stringify(result))
        res.end()
    })
})
module.exports=router;