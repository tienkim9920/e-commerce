import API from "../http/http"

class Coupon {

    userId: String
    coupId: String
    status: Boolean

    constructor(userId: String, coupId: String, status: Boolean){
        this.userId = userId
        this.coupId = coupId
        this.status = status
    }

    toJSON(){
        return {
            userId: this.userId,
            coupId: this.coupId,
            status: this.status
        }
    }

    // POST_COUPON
    async POST_COUPON(){
        const res = await fetch(API.POST_COUPON_USER(), {
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

export default Coupon
