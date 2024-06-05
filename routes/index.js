const NewsController = require('../controller/NewsController')
const route =(app)=>{
    app.get("/news",NewsController.read)
    app.post("/news",NewsController.create)
    app.get("/news/:id",NewsController.details)
    app.put("/news/:id",NewsController.update)
    app.delete("/news/:id",NewsController.destroy)
}


module.exports=route;