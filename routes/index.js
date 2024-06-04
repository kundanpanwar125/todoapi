const NewsController = require('../controller/NewsController')
const route =(app)=>{
    app.get("/news",NewsController.read)
    app.post("/news",NewsController.create)
    app.get("/news/:id",NewsController.details)
}

module.exports=route;