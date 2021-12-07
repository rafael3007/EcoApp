

const credenciais = require("./Credentials/credenciais.json");
const { GoogleSpreadsheet } = require('google-spreadsheet');
const getDoc = async () => {
    
    const doc = new GoogleSpreadsheet(credenciais.SPREADSHEET_ID);
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.CLIENT_EMAIL,
        private_key: credenciais.PRIVATE_KEY//.replace(/\\n/g, '\n')
    })

    await doc.loadInfo();
    
    return doc;
}

module.exports = getDoc;