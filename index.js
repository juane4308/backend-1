import http, { Server } from "node:http"
import fs from"node:fs" 
import * as url from "url"

const __dirname = url.fileURLToPath(new URL(".", import.meta.url))

export const datapath = "${__dirname}"
//console.log(fs)

fs.writeFileSync("./ejemplo.txt", "joya mega disco")

const server = http.createServer((reques,Response)=>{

    Response.end("korn")
})

server.listen(8080, () => { 
    console.log("server on")
})