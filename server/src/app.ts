import express from 'express';
import { PublicacionReducidaRouter } from './routes/PublicacionRoutes';


const app = express();
const port = 3000;

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.use(express.json())

app.use("/publicaciones", PublicacionReducidaRouter)


app.listen(port, () => {
    return console.log(`Server is listening on ${port}`);
});
