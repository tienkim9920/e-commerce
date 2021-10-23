import API from "../http/http"

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

    // POST TICKET
    async POST_TICKET(){
        const res = await fetch(API.POST_TICKET(), {
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

export default Ticket