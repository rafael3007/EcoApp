const DB = require('../data/Database')

module.exports = {
    async dadosEncarregado(nome) {
        //let found = false
        let qtdPostes = 0
        let producao = []
        let data = await DB.buscarDadosProducao()
        data.map(row => {
            if ((String(row[0])) === (String(nome))) {
                producao.push(row)
            }
        });

        return producao
        
    },
    async dadosGraficoProducao(inicio,fim,nome){
        let producao = []
        let data = await DB.buscarDadosProducao()
        //AAAA-MM-DD
        let dataInicial = new Date(inicio)
        let dataFinal = new Date(fim)

        data.map(row => {
            //nome
            var arrDataBruta = row[1].split('/')
            var dataFormatada = arrDataBruta[1] + '-' + arrDataBruta[0] + '-' +
            arrDataBruta[2]
            let planDate = new Date(dataFormatada)
            //console.log(planDate.getDate() <= dataInicial.getDate()?'sim '+planDate+"é menor que "+dataInicial:'não')
            if ((String(row[0])) === (String(nome)) && (planDate >= dataInicial) &&(planDate <= dataFinal)) {
                qtdPostes = qtdPostes + row[2]
                producao.push(row)
            }
        });

        return {producao,qtdPostes}
    }
}