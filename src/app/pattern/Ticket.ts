
class Ticket {

    userId: String
    tickId: String
    status: Boolean

    constructor(userId: String, tickId: String, status: Boolean){
        this.userId = userId
        this.tickId = tickId
        this.status = status
    }

    toJSON(){
        return {
            userId: this.userId,
            tickId: this.tickId,
            status: this.status
        }
    }

}

export default Ticket