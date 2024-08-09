import * as http from "http" //Instale a tipagem do node com o quickfix
import { getFilterUser, getListEpisodes } from "./controllers/podcasts-controllers"
import { Routes } from "./routes/routes"


const server = http.createServer(async(request: http.IncomingMessage, response:http.ServerResponse)=>{// Equivale ao request e ao response

    //QueryString 

    const [baseUrl, queryString] = request.url?.split("?") ?? ["", ""]


    if (request.method == "GET" && baseUrl===Routes.LIST) {
        await getListEpisodes(request, response)
    }

    if(request.method === "GET" && baseUrl===Routes.USER){
        await getFilterUser(request, response)
    }

})

const port = process.env.PORT

server.listen(port,()=>{
    console.log(`servidor iniciado na porta ${port}`)
})