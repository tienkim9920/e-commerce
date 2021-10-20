
class Note {

    distanceId: String
    name: String
    phone: String
    address: String

    constructor (distanceId: String, name: String, phone: String, address: String){
        this.distanceId = distanceId
        this.name = name
        this.phone = phone
        this.address = address
    }

    toJSON(){
        return {
            distanceId: this.distanceId,
            name: this.name,
            phone: this.phone,
            address: this.address
        }
    }

    // POST_NOTE

}

export default Note