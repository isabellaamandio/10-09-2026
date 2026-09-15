import express from 'express'
import { equipamentoRouter } from './routes/equipamento.routes.js'

const app = express()
const port = 3000

app.use(express.json())

app.use ("/equipamento", equipamentoRouter)

app.listen (port, ()=> {
    console.log (`app rodando em http://localhost:3000`)
})