export default {
    getAuth: async (profile) => {
        //authentication
        let list = [
            {
                "Autorizacao": "",
                "Nivel": "",
                "Acesso": ["await AuthController.getAcess(profile.Auth)"]
            }
        ]   
        return list  
    }
}