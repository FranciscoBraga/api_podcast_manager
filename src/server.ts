import * as http from 'http';
import { getListEpisodios } from  './controllers/podcast-controller'; 

const port = process.env.Port

const server = http.createServer( async (req:http.IncomingMessage,res: http.ServerResponse)=>{
    if(req.method === 'GET'){
        await getListEpisodios(req,res)
    }
});

server.listen(port,()=>{
    console.log(`servidor iniciado na porta ${port}`)
})