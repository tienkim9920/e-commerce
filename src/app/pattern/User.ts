import API from "../http/http"
import Coupon from "./Coupon"
import Ticket from "./Ticket"

class User {

    _id: any
    authId: any
    email: any
    password: any
    name: any
    image: any
    score: any
    ticket: any = []
    coupon: any = []
<<<<<<< HEAD

=======
    like: any = []
    order: any = []
    comment: any = []
    notification: any = []
    
>>>>>>> 2beba6771d1b6e0a0222a0d476866c5f43df323d
    constructor (_id: any){
        this._id = _id
    }

    async getTickets(){
        const res = await fetch(API.GET_TICKETS_USER(this._id))
        const data = await res.json()
        this.ticket = data
    }

    async getCoupons(){
        const res = await fetch(API.GET_COUPONS_USER(this._id))
        const data = await res.json()
        this.coupon = data
    }

    async getDetail(){
        const res = await fetch(API.GET_DETAIL_USER(this._id))
        const data = await res.json()
        this.authId = data.authId
        this.email = data.email
        this.password = data.password
        this.name = data.name
        this.image = data.image
        this.score = data.score
    }

    async postTicket(ticket: Ticket){
        const res = await fetch(API.POST_TICKET_USER(), {
            method: 'POST',
            body: JSON.stringify(ticket.toJSON()),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const data = await res.json()
        this.ticket = [...this.ticket, data.result]
        console.log(this.ticket)
    }

    async postCoupon(coupon: Coupon){
        const res = await fetch(API.POST_COUPON_USER(), {
            method: 'POST',
            body: JSON.stringify(coupon.toJSON()),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const data = await res.json()
        this.coupon = [...this.coupon, data.result]
        console.log(this.coupon)
    }

}

export default User
