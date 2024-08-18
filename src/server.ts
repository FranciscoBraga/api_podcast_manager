import * as http from 'http';
import { filterEpidodes, getListEpisodios } from  './controllers/podcast-controller'; 

const port = process.env.Port

const server = http.createServer( async (req:http.IncomingMessage,res: http.ServerResponse)=>{
   
    if(req.method === 'GET' && req.url === '/api/list'){
        await getListEpisodios(req,res)
    }
    if(req.method === 'GET' && req.url === '/api/filter'){
        await filterEpidodes(req,res)
    }
});

server.listen(port,()=>{
    console.log(`servidor iniciado na porta ${port}`)
})