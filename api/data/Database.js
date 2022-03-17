const getDoc = require('./config')

module.exports = {
    //get all data of sheet on position 0
    async buscarBD() {
        let sheet;
        var row
        //connection with googhe sheets and get sheet with index 0
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[0];
            row = await sheet.getRows()
        })
        let data = []
        //map all rows and inset in the array 
        for(let i = 0; i < row.length; i++){
            data.push(row[i]._rawData)
        }
        //return the data of sheet
        return data
    },
    //get all the data from the specific sheet, in the case of production 
    async buscarDadosProducao(){
        let sheet;
        var row
        //conection and get the sheet with index 3
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[3];
            row = await sheet.getRows()
        })
        let data = []
        //map all rows and inset in the array 
        for(let i = 0; i < row.length; i++){
            data.push(row[i]._rawData)
        }
        //return the data of sheet
        return data
    },
    //get all the data from the specific sheet, in the case of Leaders 
    async buscarListaEncarregados(){
        let sheet;
        var row
        //conection and get the sheet with index 4
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[4];
            row = await sheet.getRows()
        })
        let data = []
        //map all rows and inset in the array 
        for(let i = 0; i < row.length; i++){
            data.push(row[i]._rawData)
        }
        //return the data of sheet
        return data
    },
    //get all data from the a specific sheet that is passed by function
    async buscarPlanilha(id){
        let sheet;
        var row
        //get the id of sheet that is passed for get its data
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[id];
            row = await sheet.getRows()
        })
        let data = []
        //map all rows and inset in the array 
        for(let i = 0; i < row.length; i++){
            data.push(row[i]._rawData)
        }
        //return the data of sheet
        return data
    } 
}











































/*
/*,
    async atualizarProfile(dados) {
        let sheet;
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[1];
            linhas = await sheet.getRows().then(rows => {
                rows.map(row => {
                    if (Number(row.ID) === Number(dados.ID)) {
                        row.ID = dados.ID;
                        row.Nome = dados.Nome;
                        row.Link_Avatar = dados.Link_Avatar;
                        //row.Telefone = dados.Telefone;
                        //row.email = dados.email;
                        //row.password = dados.password;
                        row.save().then(() => {
                            console.log('Dado atualizado!');
                        });
                    }
                });
            })
        })
    },
    async atualizarBD(dados) {
        let sheet;
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[0];
            await sheet.getRows().then(rows => {
                rows.map(row => {
                    if (Number(row.ID) === Number(dados.ID)) {
                        row.ID = dados.ID,
                        row.Uniorg = dados.Uniorg,
                        row["NOME AGÊNCIA"] = dados["NOME AGÊNCIA"],
                        row.ENDEREÇO = dados.ENDEREÇO,
                        row.CIDADE = dados.CIDADE,
                        row.TIPO = dados.TIPO,
                        row.AMBIENTE = dados.AMBIENTE,
                        row.ANDAR = dados.ANDAR,
                        row.CAPACIDADE = dados.CAPACIDADE,
                        row.QUANTIDADE = dados.QUANTIDADE,
                        row.MANTENEDORA = dados.MANTENEDORA;
                        row["VENCIMENTO RECARGA"] = dados["VENCIMENTO RECARGA"],
                        row["TESTE HIDROSTÁTICO"] = dados["TESTE HIDROSTÁTICO"],
                        row.MEMORIAL = dados.MEMORIAL
                        row.save().then(() => {
                            console.log('Dado atualizado!');
                        });
                    }
                });
            })
        })
    },
    async adicionarProfile(dados) {
        let sheet;
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[1];
            await sheet.addRow({
                ID: dados.ID,
                Nome: dados.Nome,
                Link_Avatar: dados.Link_Avatar,
                Telefone: 'none',
                email:'none',
                Password:'none',
            }).then(() => {
                console.log('dado salvo!')
            })
        });
    },
    async adicionarBD(dados) {
        let sheet;
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[0];
            await sheet.addRow({
                ID: dados.ID,
                Uniorg: dados.Uniorg,
                "NOME AGÊNCIA": dados["NOME AGÊNCIA"],
                ENDEREÇO: dados.ENDEREÇO,
                CIDADE: dados.CIDADE,
                TIPO: dados.TIPO,
                AMBIENTE: dados.AMBIENTE,
                ANDAR: dados.ANDAR,
                CAPACIDADE: dados.CAPACIDADE,
                QUANTIDADE: dados.QUANTIDADE,
                MANTENEDORA: dados.MANTENEDORA,
                "VENCIMENTO RECARGA": dados["VENCIMENTO RECARGA"],
                "TESTE HIDROSTÁTICO": dados["TESTE HIDROSTÁTICO"],
                MEMORIAL: dados.MEMORIAL
            }).then(() => {
                console.log('dado salvo!')
            })
        });
    },
    async buscarUniorgs(uniorg){
        let sheet;
        var linhas
        var RowsEquals = []
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[0];
            linhas = await sheet.getRows()

            linhas.map(row => {
                if (Number(row.Uniorg) === Number(uniorg)) {
                    RowsEquals.push(row)
                }
            });
        })
        return RowsEquals
    }*/



