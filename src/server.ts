import * as http from 'http';
import { filterEpidodes, getListEpisodios } from  './controllers/podcast-controller'; 
import { Routes } from './router/routes';
import { HttpMethod } from './utils/httpMethods';

const port = process.env.Port

const server = http.createServer( async (req:http.IncomingMessage,res: http.ServerResponse)=>{
   

   const [baseURL,queryString] = req.url?.split("?") ?? ['','']

    if(req.method === HttpMethod.GET && baseURL === Routes.LIST){
        await getListEpisodios(req,res)
    }
    if(req.method === HttpMethod.GET && baseURL === Routes.EPISODE){
        await filterEpidodes(req,res)
    }
});

server.listen(port,()=>{
    console.log(`servidor iniciado na porta ${port}`)
})