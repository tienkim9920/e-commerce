import API from "../http/http"

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
    async POST_NOTE(){
        const res = await fetch(API.POST_NOTE(), {
            method: 'POST',
            body: JSON.stringify(this.toJSON()),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const data = await res.json()
        return data.result
    }
}

export default Note