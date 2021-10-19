
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

}

export default Coupon
