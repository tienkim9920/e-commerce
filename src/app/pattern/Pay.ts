
class Pay {

    payment: String

    constructor (payment: String){
        this.payment = payment
    }

    toJSON(){
        return {
            payment: this.payment
        }
    }

}

export default Pay