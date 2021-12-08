const express    = require('express')
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();

const MY_PORT = process.env.PORT

const RowController =require('./api/data/Database')
const profileController = require('./api/controller/ProfileController.js');
const GraficoController = require('./api/controller/GraficoController');
const SheetController = require('./api/controller/SheetController');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}))

app.get('/getData',async (req,res)=>{
  let data = await RowController.buscarBD()
  console.log(req.params)
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
    return res.status(400).json(user)
  }
})

app.get('/Production',async (req,res)=>{
  const nome = req.query.name
  const producao = await GraficoController.dadosEncarregado(nome)
  return res.json(producao)
})

app.get('/getSheet/:id', async(req,res) => {
  const dados = await SheetController.getDadosSheet(req.params.id)
  return res.json(dados)
})

app.listen(MY_PORT,() => {
  console.log(`Servidor rodando na porta ${MY_PORT}`)
})
  



