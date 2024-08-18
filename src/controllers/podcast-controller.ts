import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisode } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";


export const getListEpisodios = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content = await serviceListEpisode()

    res.writeHead(200, {'Content-Type':'application/json'});
    res.end(
        JSON.stringify(content)
    );
};

export const filterEpidodes = async (req:IncomingMessage,res:ServerResponse)=>{

    const content = await serviceFilterEpisodes("venus")

    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(content));
};