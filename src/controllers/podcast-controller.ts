import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisode } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { ContentType } from "../utils/contentType";


export const getListEpisodios = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content = await serviceListEpisode()

    res.writeHead(200, {'Content-Type':ContentType.JSON});
    res.end(
        JSON.stringify(content)
    );
};

export const filterEpidodes = async (req:IncomingMessage,res:ServerResponse)=>{


    

    const content = await serviceFilterEpisodes(req.url);

    res.writeHead(200,{'Content-Type':ContentType.JSON});
    res.end(JSON.stringify(content));
};