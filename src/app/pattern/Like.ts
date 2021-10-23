import API from "../http/http"

class Like {

    productId: String
    userId: String

    constructor(productId: String, userId: String){
        this.productId = productId
        this.userId = userId
    }

    toJSON(){
        return {
            productId: this.productId,
            userId: this.userId
        }
    }

    // POST_LIKE

    // DELETE_LIKE

    // Checking Like User
    async checkingLikeUser(){
        const res = await fetch(API.CHECKING_LIKE_USER(this.userId, this.productId))
        const data = await res.json()
        return data
    }
}

export default Like