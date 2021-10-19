
class Auth {

    auth: String

    constructor (auth: String){
        this.auth = auth
    }

    toJSON(){
        return {
            auth: this.auth
        }
    }

}

export default Auth