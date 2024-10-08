import fs from 'fs';
import path from 'path';
import { PodcastModel } from '../model/podcast-model';

const pathDate = path.join(__dirname,'../repositories/podcast.json');

export const repositoryPodcast = async (podcastName?:string):Promise<PodcastModel[]> => {
    const language = 'utf-8'
    const rawData = fs.readFileSync(pathDate,language)
    let jsonFile = JSON.parse(rawData)
   
    if(podcastName){
        jsonFile = jsonFile.filter(
            (podcast:PodcastModel)=> podcast.podcastName === podcastName
        );
    }
    
    return jsonFile;
}