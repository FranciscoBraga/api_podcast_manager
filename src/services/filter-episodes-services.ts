import { repositoryPodcast } from "../repositories/podcast-repository"

export const  serviceFilterEpisodes= async(podcastName:string | undefined)=>{
 
    const queryString = podcastName?.split("?p=")[1] || "";

    console.log(queryString)

    const data  =  await repositoryPodcast(queryString);


    return data;
}