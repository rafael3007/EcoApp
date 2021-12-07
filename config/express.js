const express    = require('express')
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();

const MY_PORT = process.env.PORT

const RowController =require('../api/data/Database')
const profileController = require('../api/controller/ProfileController.js')

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}))


app.get('/getData',async (req,res)=>{
  let data = await RowController.buscarBD()
  console.log("xd")
  res.json(data)
})

app.post('/authenticate', async (req,res)=> {
  const response = req.body
  //console.log(response.email)
  //pesquisar user
  const user = await profileController.AuthUser(response.email, (Number(response.password)))

  //console.log("user= "+user.found)
  if(user.found){
    //encontrado

    return res.status(200).json(user)
  }else {
    return res.status(400).send( { error: "Usuário não encontrado"})
  }
})




app.listen(MY_PORT,() => {
  console.log(`Servidor rodando na porta ${MY_PORT}`)
})
  



