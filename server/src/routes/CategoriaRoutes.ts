import CategoriaService from "../service/CategoriaService";
import express from 'express'

export const CategoriaRouter = express.Router();

const categoriaService : CategoriaService = new CategoriaService();

CategoriaRouter.get('', async (req, res) => {
    console.log("categorias",await categoriaService.findAll())
    res.json( await categoriaService.findAll())
})
  
CategoriaRouter.post('', async (req, res) => {  
    console.log(req.body.categoria)
    await categoriaService.add(req.body.categoria);
    res.json( {"resultado": "ok"} )
})

CategoriaRouter.delete('/:id', async (req, res) => {
    await categoriaService.delete(Number(req.params.id));
    res.json( {"resultado": "ok"} )    
})

CategoriaRouter.get('/:id', async (req, res) => {  
    console.log(req.params.id)  
    res.json( await categoriaService.get(Number(req.params.id)) )    
})