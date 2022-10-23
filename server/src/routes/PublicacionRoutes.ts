import PublicacionReducidaDao from "../repository/PublicacionReducidaDao";
import Dao from "../repository/Dao"
import PublicacionReducida from "../models/PublicacionReducida";
import express from 'express'

export const PublicacionReducidaRouter = express.Router();

const PublicacionsRepo : Dao<PublicacionReducida,Number> = new PublicacionReducidaDao();
const publicacion : PublicacionReducida = new PublicacionReducida(1,"https://i.pinimg.com/564x/97/2a/33/972a337da81a8b832dfb492a95828987.jpg");
PublicacionsRepo.add(publicacion);
const publicacion1 : PublicacionReducida = new PublicacionReducida(2,"https://i.pinimg.com/564x/97/2a/33/972a337da81a8b832dfb492a95828987.jpg");
PublicacionsRepo.add(publicacion1);

PublicacionReducidaRouter.get('', async (req, res) => {
    res.json( await PublicacionsRepo.findAll())
})
  
PublicacionReducidaRouter.post('', async (req, res) => {   
    const publicacion: PublicacionReducida = new PublicacionReducida(req.body.id, req.body.url);
    await PublicacionsRepo.add(publicacion);
    res.json( {"resultado": "ok"} )
})

PublicacionReducidaRouter.delete('/:id', async (req, res) => {
    await PublicacionsRepo.delete(Number(req.params.id));
    res.json( {"resultado": "ok"} )    
})

PublicacionReducidaRouter.get('/:id', async (req, res) => {    
    res.json( await PublicacionsRepo.get(Number(req.params.id)) )    
})


