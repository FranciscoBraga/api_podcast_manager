import { DTOTransferModel } from "../model/filterPodcast-model";
import { repositoryPodcast } from "../repositories/podcast-repository"
import { StatusCode } from "../utils/statusCodes";

export const  serviceFilterEpisodes= async(podcastName:string | undefined):Promise<DTOTransferModel>=> {

    //buscando os dados
    const queryString = podcastName?.split("?p=")[1] || "";
    const data  =  await repositoryPodcast(queryString);

    let responseFormat: DTOTransferModel = {
        statusCode : (data.length) ? StatusCode.OK : StatusCode.NoContent,
        body: data
    };

    return  responseFormat;
}