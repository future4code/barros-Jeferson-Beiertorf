import express, {Request, Response} from 'express'
import cors from 'cors'
import { toDoList } from './data'


const app = express()
app.use(cors())

app.get("/ping", (req:Request, res:Response)=>{
    res.status(200).send("Pong! 🏓")
})

app.get("/toDoStatus",(req:Request,res:Response)=>{
    const toDoStatus = req.query.status
    if(!toDoStatus){
        res.status(400).send("Por favor, colocar um status")
    }else{
        let toDoCompleted = toDoList.filter((toDo)=>{
            return toDo.completed === Boolean(toDoStatus)
        })
        res.status(200).send(toDoCompleted)
    }
})