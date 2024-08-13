import { IncomingMessage, ServerResponse } from "http";

import { serviceListEpisode } from "../services/list-episodes-service";


export const getListEpisodios = async (req: IncomingMessage, res: ServerResponse) => {
    
    const content = await serviceListEpisode()

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
        JSON.stringify(content)
    );
};