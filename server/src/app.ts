import express from 'express';
import { PublicacionReducidaRouter } from './routes/PublicacionRoutes';
import { UsuarioRouter } from './routes/UsuarioRoutes';
import { CategoriaRouter } from './routes/CategoriaRoutes';
import cors from 'cors';

const app = express();
const port = 3000;
app.use(cors())
app.use(express.json())

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use("/publicaciones", PublicacionReducidaRouter)
app.use("/usuarios", UsuarioRouter)
app.use("/categorias", CategoriaRouter)

app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
