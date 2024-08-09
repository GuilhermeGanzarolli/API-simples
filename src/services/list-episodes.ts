import { repoUsuarios } from "../data/users-repository"


export const serviceListEpisodes = async()=>{
    const data = await repoUsuarios()

    return data
}