import PublicacionService from "../service/PublicacionService";
import express from 'express'

export const PublicacionRouter = express.Router();

const publicacionService : PublicacionService = new PublicacionService();

PublicacionRouter.get('', async (req, res) => {
    console.log("publicaciones",await publicacionService.findAll())
    res.json( await publicacionService.findAll())
})

PublicacionRouter.get('/:categoria', async (req, res) => {
    console.log("publicaciones",await publicacionService.findCategoria(String(req.params.categoria)))
    res.json( await publicacionService.findCategoria(String(req.params.categoria)))
})
  
PublicacionRouter.post('', async (req, res) => {   
    console.log(req.body.publicacion)
    await publicacionService.add(req.body.publicacion);
    res.json( {"resultado": "ok"} )
})

PublicacionRouter.delete('/:id', async (req, res) => {
    await publicacionService.delete(Number(req.params.id));
    res.json( {"resultado": "ok"} )    
})

PublicacionRouter.get('/:id', async (req, res) => {  
    console.log(req.params.id)  
    const publicacion = await publicacionService.get(Number(req.params.id));
    if(publicacion !== null){
        res.json( { publicacion })
    }else{
        res.json({ "resultado":`No se encontro la publicacion con el id : ${req.params.id}` })
    }    
})


