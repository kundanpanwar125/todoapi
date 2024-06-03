const {PrismaClient}=require("@prisma/client");
const express=require("express");
const app=express();
const port=8800;
const routes = require("./routes/index");
routes(app);

app.listen(port);