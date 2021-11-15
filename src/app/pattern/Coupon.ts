import API from "../http/http"
import Coup from "./Coup"

class Coupon {

    _id: String
    userId: String
    coupId: any
    status: Boolean

    constructor(_id: String, userId: String, coupId: any, status: Boolean){
        this._id = _id
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
        const res = await fetch(API.POST_COUPON(), {
            method: 'POST',
            body: JSON.stringify(this.toJSON()),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
        const data = await res.json()
        return data.result
    }

    // PATCH_COUPON
    async PATCH_COUPON(){
        const res = await fetch(API.PATCH_COUPON(this.userId, this.coupId), {
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

export default Coupon
