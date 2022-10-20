import PublicacionReducidaDao from "./repository/PublicacionReducidaDao";
import Dao from "./repository/Dao"
import PublicacionReducida from "./models/PublicacionReducida";
import express from 'express'
import bodyParser from "body-parser";

const PublicacionsRepo : Dao<PublicacionReducida,Number> = new PublicacionReducidaDao();
const publicacion : PublicacionReducida = new PublicacionReducida(1,"https://i.pinimg.com/564x/97/2a/33/972a337da81a8b832dfb492a95828987.jpg", 3,"Pedro");
PublicacionsRepo.add(publicacion);
const publicacion1 : PublicacionReducida = new PublicacionReducida(2,"https://i.pinimg.com/564x/97/2a/33/972a337da81a8b832dfb492a95828987.jpg", 3,"Pedro");
PublicacionsRepo.add(publicacion1);


const app = express()
app.use(bodyParser.json());
app.use(cors());

const port = 3000

app.get('/api/ping', (req, res) => {
  res.send('pong')
})

app.get('/api/Publicacions', async (req, res) => {
    res.json( await PublicacionsRepo.findAll())
})
  
app.post('/api/Publicacions', async (req, res) => {   
    const publicacion: PublicacionReducida = new PublicacionReducida(req.body.id, req.body.url,req.body.likes,req.body.autor);
    await PublicacionsRepo.add(publicacion);
    res.json( {"resultado": "ok"} )
})

app.delete('/api/Publicacions/:id', async (req, res) => {
    await PublicacionsRepo.delete(Number(req.params.id));
    res.json( {"resultado": "ok"} )    
})

app.get('/api/Publicacions/:id', async (req, res) => {    
    res.json( await PublicacionsRepo.get(Number(req.params.id)) )    
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

function cors(): any {
    throw new Error("Function not implemented.");
}
