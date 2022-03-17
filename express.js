const express    = require('express')
const bodyParser = require('body-parser')
const dotenv = require("dotenv");
dotenv.config();


const MY_PORT = 7777//process.env.PORT

const rowController =require('./api/data/Database')
const profileController = require('./api/controller/ProfileController.js');
const graficoController = require('./api/controller/GraficoController');
const sheetController = require('./api/controller/SheetController');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: false}))

//Route of get all data of Sheet with index 0
app.get('/getData',async (req,res)=>{
  let data = await rowController.buscarBD()
  console.log(req.params)
  res.json(data)
})

//Route of test 
app.get('/',async (req,res)=>{
  var data = {
    "resultado": 'online'
  }
  res.json(data)
})

//Route Authenticate
app.post('/authenticate', async (req,res)=> {
  const response = req.body
  //Find user
  const user = await profileController.AuthUser(response.email, (Number(response.password)))
  if(user.found){
    //if User found
    return res.status(200).json(user)
  }else {
    //if user not found
    return res.status(400).json(user)
  }
})

//Route create grafic initial
app.post('/grafico',async(req,res)=>{
  const request = req.body
  const dados = await graficoController.dadosGraficoProducao(request.dataInicial,request.dataFinal,request.name)
  return res.json(dados)
})

//Route of test
app.post('/graf',async(req,res)=>{
  const dados = await graficoController.dadosGraficoProducao('2022-01-03','2022-01-21','ADAILTON')
  return res.json(dados)
})

//Route data of Production
app.get('/Production',async (req,res)=>{
  const nome = req.query.name
  const producao = await graficoController.dadosEncarregado(nome)
  return res.json(producao)
})

//Route of get data from a specific sheet
app.get('/getSheet/:id', async(req,res) => {
  const dados = await sheetController.getDadosSheet(req.params.id)
  return res.json(dados)
})

//port
app.listen(MY_PORT,() => {
  console.log(`Servidor rodando na porta ${MY_PORT}`)
})
  



