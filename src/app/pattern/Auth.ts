
class Auth {

    auth: String
    name: String

    constructor (auth: String, name: String){
        this.auth = auth
        this.name = name
    }

    toJSON(){
        return {
            auth: this.auth,
            name: this.name
        }
    }

}

export default Auth