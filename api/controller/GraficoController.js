const DB = require('../data/Database')

module.exports = {
    //get data from an specific leader
    async dadosEncarregado(nome) {    
        let producao = []
        let data = await DB.buscarDadosProducao()
        //found leader
        data.map(row => {
            if ((String(row[0])) === (String(nome))) {
                //found leader -> added to array with data
                producao.push(row)
            }
        });
        return producao
    },
    //get data from a specific leader for a specific period
    async dadosGraficoProducao(inicio,fim,nome){
        let qtdPostes = 0
        let producao = []
        let data = await DB.buscarDadosProducao()

        //format -> AAAA-MM-DD
        let dataInicial = new Date(inicio)
        let dataFinal = new Date(fim)
        
        data.map(row => {
            //format the Date to american
            var arrDataBruta = row[1].split('/')
            var dataFormatada = arrDataBruta[1] + '-' + arrDataBruta[0] + '-' +
            arrDataBruta[2]
            let planDate = new Date(dataFormatada)

            //planDate > dataInicial?((planDate <= dataFinal)?((String(row[0])) === (String(nome))?(console.log("sucesso")):(console.log('entrou no if mas o nome deu errado'))):console.log(`${planDate} é maior que ${dataInicial}, mas é maior que ${dataFinal}`)):(console.log(`${planDate} é menor que ${dataInicial}`))
            
            if ((String(row[0])) === (String(nome)) && (planDate >= dataInicial) &&(planDate <= dataFinal)) {
                qtdPostes = qtdPostes + (Number(row[2]))
                console.log('salve')
                //add data that the dates match
                producao.push(row)
            }
        });
        return {producao,qtdPostes}
    }
}