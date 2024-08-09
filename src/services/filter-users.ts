import { IncomingMessage } from "http"
import { repoUsuarios } from "../data/users-repository"

export const filterUser = async (UserName:string | undefined)=>{

    const queryString = UserName?.split("?u=")[1] || ""

    const data = await repoUsuarios(queryString)

    return data
}