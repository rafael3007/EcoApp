const DB = require('../data/Database')

module.exports = {
    async dadosEncarregado(nome) {
        //let found = false
        let producao = []
        let data = await DB.buscarDadosProducao()
        console.log(nome)
        data.map(row => {
            if ((String(row[0])) === (String(nome))) {
                producao.push(row)
            }
        });

        return producao
        
    }
}