import UsuarioService from "../service/UsuarioService";
import express from 'express'

export const UsuarioRouter = express.Router();

const usuarioService : UsuarioService = new UsuarioService();

UsuarioRouter.get('', async (req, res) => {
    console.log("usuarios",await usuarioService.findAll())
    res.json( await usuarioService.findAll())
})
  
UsuarioRouter.post('', async (req, res) => {   
    await usuarioService.add(req);
    res.json( {"resultado": "ok"} )
})

UsuarioRouter.delete('/:id', async (req, res) => {
    await usuarioService.delete(Number(req.params.id));
    res.json( {"resultado": "ok"} )    
})

UsuarioRouter.get('/:id', async (req, res) => {  
    console.log(req.params.id)  
    res.json( await usuarioService.get(Number(req.params.id)) )    
})


