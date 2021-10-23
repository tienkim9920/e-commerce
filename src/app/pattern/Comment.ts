import API from "../http/http"

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
    async POST_COMMENT() {
        const res = await fetch(API.POST_COMMENT(), {
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

export default Comment