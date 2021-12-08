const DB = require('../data/Database')

module.exports = {
    async dadosEncarregado(nome) {
        //let found = false
        let producao = []
        let data = await DB.buscarDadosProducao()
       
        data.forEach(row => {
            if(row[0] = nome ){
                producao.push(row)
            }
        });

        return producao
        
    }
}