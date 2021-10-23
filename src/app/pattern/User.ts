import API from "../http/http"
import Coupon from "./Coupon"
import Ticket from "./Ticket"
import Notification from "./Notification"
import Reputation from "./Reputation"

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
    like: any = []
    order: any = []
    comment: any = []
    notification: any = []
    reputation: any = []

    constructor(_id: any) {
        this._id = _id
    }

    // GET Ticket
    async getTickets() {
        const res = await fetch(API.GET_TICKETS(this._id))
        const data = await res.json()
        this.ticket = data
    }

    // POST Ticket
    async postTicket(ticket: Ticket) {
        const data = await ticket.POST_TICKET()
        this.ticket = [...this.ticket, data]
        console.log(this.ticket)
    }

    // GET Coupon
    async getCoupons() {
        const res = await fetch(API.GET_COUPONS(this._id))
        const data = await res.json()
        this.coupon = data
    }

    // POST coupon
    async postCoupon(coupon: Coupon) {
        const data = await coupon.POST_COUPON()
        this.coupon = [...this.coupon, data]
        console.log(this.coupon)
    }


    // GET Detail User
    async getDetail() {
        const res = await fetch(API.GET_DETAIL_USER(this._id))
        const data = await res.json()
        this.authId = data.authId
        this.email = data.email
        this.password = data.password
        this.name = data.name
        this.image = data.image
        this.score = data.score
    }

    // GET List Like:TN
    async getListLike() {
      const res = await fetch(API.GET_LIKE_PRODUCT(this._id))
      const data = await res.json()
      this.like = data
    }
    // GET List Reputation

    // GET List Order:TN
    async getListOrder() {
      const res = await fetch(API.GET_DETAIL_ORDER(this._id))
      const data = await res.json()
      this.order = data
    }

    // GET List Comment:TN
    async getListComment() {
      const res = await fetch(API.GET_COMMENT_USER(this._id))
      const data = await res.json()
      this.comment = data
    }

    // GET List Notification

    // GET List Reputation

    // POST List Notification

    // Function Sign In User return true - false

    // Function Sign Up User

    // Checking Permisstion User return "admin", "client", "shop"

    async postNotification(notificationPost:Notification) {
      const data = await notificationPost.POST_NOTIFICATION()
      this.notification = [...this.notification, data]
    }

    async postReputation(reputationPost:Reputation) {
      const data = await reputationPost.POST_REPUTATION()
      this.notification = [...this.notification, data]
    }

    async deleteReputation(reputationDelete:Reputation) {
      const data = await reputationDelete.DELETE_REPUTATION()

      let updateReputation = this.reputation.filter((item: Reputation) => {
        return item !== reputationDelete
      })
      this.reputation =updateReputation
    }

}

export default User
