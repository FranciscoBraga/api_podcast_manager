import * as http from 'http';
import { filterEpidodes, getListEpisodios } from  './controllers/podcast-controller'; 
import { Routes } from './router/routes';
import { HttpMethod } from './utils/httpMethods';

export const app = async (req:http.IncomingMessage,res: http.ServerResponse)=>{
   
    const [baseURL,queryString] = req.url?.split("?") ?? ['','']
 
     if(req.method === HttpMethod.GET && baseURL === Routes.LIST){
         await getListEpisodios(req,res)
     }
     if(req.method === HttpMethod.GET && baseURL === Routes.EPISODE){
        console.log('filterEpidodes')
         await filterEpidodes(req,res)
     }
 }