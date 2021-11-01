
class Note {

    fee: Number
    name: String
    phone: String
    address: String

    constructor (fee: Number, name: String, phone: String, address: String){
        this.fee = fee
        this.name = name
        this.phone = phone
        this.address = address
    }

    toJSON(){
        return {
            fee: this.fee,
            name: this.name,
            phone: this.phone,
            address: this.address
        }
    }

    // POST_NOTE

}

export default Note