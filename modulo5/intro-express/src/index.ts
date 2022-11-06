import express,{Request, Response} from 'express'
import cors from 'cors'
import { postsList, usersList } from './data'

const app = express()

app.use(express.json())
app.use(cors())


app.get("/receba", (req:Request, res:Response) => {          
    res.status(200).send("Hello from Express")
})

app.get('/users',(req:Request, res:Response)=>{
    res.status(200).send(usersList)
})
app.get('/posts',(req:Request, res:Response)=>{
    res.status(200).send(postsList)
})
app.get('/posts/:userId',(req:Request, res:Response)=>{
    const postId =Number(req.query.idpost) 
    const userId = Number(req.headers.iduser)
    if(!postId && !userId){
        res.status(400).send('Erro, obrigatório colocar ID')
    }
    const postFiltered = postsList.filter((post)=>{
        return post.id === postId
    })
    const userFiltered = postsList.filter((user)=>{
        return user.id === userId
    })

    const postUserList = console.log(postFiltered, userFiltered);
    
    res.status(200).send(postUserList)
})






app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});