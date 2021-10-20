
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
}

export default Like