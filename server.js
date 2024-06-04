const express=require("express");
const app=express();
app.use(express.json());
const port=8800;
const routes = require("./routes/index");

routes(app);

app.listen(port,function(){
    console.log("Server started at http://localhost:"+port);
});