import fs from "fs"
import path from "path"
import { Usuarios } from "../models/Usuarios"




const pathData = path.join(__dirname, "../data/usuarios.json")

export const repoUsuarios = async(usuarioName?:string): Promise<Usuarios>=>{
    const rawdata = fs.readFileSync(pathData,"utf-8")
    let jsonFile = JSON.parse(rawdata)

    if (usuarioName) {
        jsonFile = jsonFile.filter((usuario:Usuarios)=>usuario.name===usuarioName)
    }
    return jsonFile
}