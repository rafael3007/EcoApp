const DB = require('../data/Database')
//const bcrypt = require('')

module.exports = {
    async getDadosSheet(id){
        const dados = await DB.buscarPlanilha(id)
        return dados
    }
}