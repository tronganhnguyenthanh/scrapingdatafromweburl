import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./connectDB/config.js"
import router_api from "./routes/routes.api.js"
async function main(){
 const app = express()
 const port = process.env.PORT
 connectDB()
 app.use(express.json())
 app.use(cors())
 app.use("/api", router_api)
 app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
 }) 
}
main()


