import { IncomingMessage, ServerResponse } from "http";


export const getListEpisodios = async (req: IncomingMessage, res: ServerResponse) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(
        JSON.stringify(
           [
            {
                "podcastName":"flow",
                "episode":"TECNOLOGIA E IA [+ FABIO AKITA]",
                "videoID":"--slRywdonM&t=219s",
                "categories":[
                    "Tecnologia",
                    "IA",
                    "Fabio Akita"
                ] 
            },
             {
                "podcastName":"flow",
                "episode":"TECNOLOGIA E IA [+ FABIO AKITA]",
                "videoID":"u78AkEhOqmM",
                "categories":[
                    "curiosidade",
                    "Inteligência Artificial"
                    
                ] 
            }
           ]
        )
    );
};