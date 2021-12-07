const DB = require('../data/Database')
//const bcrypt = require('')

module.exports = {
    async AuthUser(email, password) {
        let found = false
        let profile = {}
        let data = await DB.buscarBD()
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