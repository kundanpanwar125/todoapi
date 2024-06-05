const { PrismaClient } = require( '@prisma/client')
const prisma = new PrismaClient()
const read = async (req,res) => {
    try {
           const response = await prisma.News.findMany();
        res.send(response);
    } catch (error) {
        
    }
}
const create =async(req,res) =>{
    try {
        await prisma.News.create({
            data:req.body
        })
        res.send({
            msg:"Data Added..!",
           
        })

    } catch (error) {
        res.send(error)
    }
}

const details = async(req,res)=>{
    try {
        let response = await prisma.News.findFirst({
            where:{
                id: parseInt(req.params.id)
            }
        })
        res.send(response)
    } catch (error) {
        res.send(error)
    }
}

const update = async(req,res) => {

    try {
        await prisma.News.update({
            where:{
                id: parseInt(req.params.id)
            },
            data: req.body
        })
        res.send({
            msg:"Update..!"
        })
    } catch (error) {
        res.send(error)
    }
}

const destroy = async (req,res) =>{

    try {
        await prisma.News.delete({
            where:{
                id:parseInt(req.params.id)  
            }
        })
        res.send({
            msg:"Success..! Deleted..!"
        })
    } catch (error) {
        res.send(error)
    }
}
module.exports={read,create,details,update,destroy}