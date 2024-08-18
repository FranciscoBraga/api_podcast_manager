import { PodcastModel } from "./podcast-model";

export interface DTOTransferModel{
    statusCode: number,
    body:PodcastModel[]
}

