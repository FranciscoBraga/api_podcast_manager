import { DTOTransferModel } from "../model/filterPodcast-model";
import { repositoryPodcast } from "../repositories/podcast-repository";
import { StatusCode } from "../utils/statusCodes";

export const serviceListEpisode =  async ():Promise<DTOTransferModel> => {
    
    const  data = await repositoryPodcast()

    let responseFormat: DTOTransferModel = {
        statusCode : (data.length) ? StatusCode.OK : StatusCode.NoContent,
        body: data
    };

    return responseFormat;

}