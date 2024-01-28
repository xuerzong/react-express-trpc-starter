import express from "express";
import cors from 'cors'
import { useApiRouter, useTrpcRouter } from "./routers";

export const run = () => {
  const app = express()
  app.use(express.json())
  app.use(cors())

  useApiRouter(app)
  useTrpcRouter(app)

  const port = parseInt(process.env.PORT || '8888', 10)

  app.listen(port, () => {
    console.log(`The server is running at http://localhost:${port}`)
  })
}