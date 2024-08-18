import { IncomingMessage, ServerResponse } from "http";
import { serviceListEpisode } from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-services";
import { ContentType } from "../utils/contentType";
import { StatusCode } from "../utils/statusCodes";
import { DTOTransferModel } from "../model/filterPodcast-model";


export const getListEpisodios = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content:DTOTransferModel = await serviceListEpisode()

    res.writeHead(content.statusCode, {'Content-Type':ContentType.JSON});
    res.write(JSON.stringify(content.body))
    res.end();
};

export const filterEpidodes = async (req:IncomingMessage,res:ServerResponse)=>{

    const content:DTOTransferModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode,{'Content-Type':ContentType.JSON});
    res.write(JSON.stringify(content.body))
    res.end();
};