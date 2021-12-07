
export default {
    getAuth: async (profile) => {
        //
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