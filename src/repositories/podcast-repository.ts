import fs from 'fs'
import path from 'path'
import { Podcast } from '../model/podcast-model';

const pathDate = path.join(__dirname,'../repositories/podcast.json');

export const repositoryPodcast = async ():Promise<Podcast[]> => {
    const rawData = fs.readFileSync(pathDate,'utf-8')
    const jsonFile = JSON.parse(rawData)
    return jsonFile;
}