//A função da controller é só receber a requisição e devolver o conteúdo solicitado

import {IncomingMessage, request, ServerResponse} from "http"
import { serviceListEpisodes } from "../services/list-episodes"
import { filterUser } from "../services/filter-users"




export const getListEpisodes = async(request: IncomingMessage, response:ServerResponse)=>{


    const content = await serviceListEpisodes()


    response.writeHead(200,{'Content-Type': "application/json"})
    response.end(JSON.stringify(content))

}

export const getFilterUser = async(request:IncomingMessage, response:ServerResponse)=>{

    

    const content = await filterUser(request.url)


    response.writeHead(200,{'Content-Type': "application/json"})
    response.end(JSON.stringify(content))

}