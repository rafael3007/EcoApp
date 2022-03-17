const DB = require('../data/Database')
//const bcrypt = require('')

module.exports = {
    //get all dados of a specific sheet
    async getDadosSheet(id){
        const dados = await DB.buscarPlanilha(id)
        return dados
    }
}