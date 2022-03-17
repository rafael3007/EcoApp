const DB = require('../data/Database')
//Is recommended that uses a encrypter for transmition of login, specficly for the password
//const bcrypt = require('')

module.exports = {
    //verification of login
    async AuthUser(email, password) {
        let found = false
        let profile = {}
        let data = await DB.buscarBD()
        //map the datas until the match or fail of login
        data.forEach(row => {
            if(row[1] == email && (Number(row[2])) == (Number(password))){
                console.log("está dentro do if")
                found = true
                profile = {
                    "id": row[0],
                    "email": row[1],
                    "auth": row[3],
                    "found": found
                }
                found = true
            }
        });
        return profile
    }
}