import API from "../http/http"

class Ticket {

    _id: String
    userId: String
    tickId: any
    status: Boolean

    constructor(_id: String, userId: String, tickId: any, status: Boolean){
        this._id = _id
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

    // PATCH TICKET
    async PATCH_TICKET(){
        const res = await fetch(API.PATCH_TICKET(this._id), {
            method: 'PATCH',
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
