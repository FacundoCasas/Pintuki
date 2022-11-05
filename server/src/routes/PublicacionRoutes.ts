import PublicacionService from "../service/PublicacionService";
import express from 'express'

export const PublicacionReducidaRouter = express.Router();

const publicacionService : PublicacionService = new PublicacionService();

PublicacionReducidaRouter.get('', async (req, res) => {
    console.log("publicaciones",await publicacionService.findAll())
    res.json( await publicacionService.findAll())
})
  
PublicacionReducidaRouter.post('', async (req, res) => {   
    console.log(req.body)
    await publicacionService.add(req);
    res.json( {"resultado": "ok"} )
})

PublicacionReducidaRouter.delete('/:id', async (req, res) => {
    await publicacionService.delete(Number(req.params.id));
    res.json( {"resultado": "ok"} )    
})

PublicacionReducidaRouter.get('/:id', async (req, res) => {  
    console.log(req.params.id)  
    const publicacion = await publicacionService.get(Number(req.params.id));
    if(publicacion !== null){
        res.json( { publicacion })
    }else{
        res.json({ "resultado":`No se encontro la publicacion con el id : ${req.params.id}` })
    }    
})


