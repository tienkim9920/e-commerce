
class Comment {

    productId: String
    userId: String
    star: Number
    content: String
    createTime: String

    constructor (productId: String, userId: String, star: Number, 
        content: String, createTime: String){
        this.productId = productId
        this.userId = userId
        this.star = star
        this.content = content
        this.createTime = createTime
    }

    toJSON(){
        return {
            productId: this.productId,
            userId: this.userId,
            star: this.star,
            content: this.content,
            createTime: this.createTime
        }
    }

    // POST_COMMENT

}

export default Comment