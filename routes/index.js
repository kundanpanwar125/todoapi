const route =(app)=>{
    app.get("/news",(req,res)=>{
        res.send({
            "msg":"hello world 55"
        });
    });
}

module.exports=route;