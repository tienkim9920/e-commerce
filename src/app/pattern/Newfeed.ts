import API from "../http/http"

class Newfeed{

  _id: any
  shopId: any
  productId: any
  like: any
  comment: any
  createTime: any

  constructor (_id: any, shopId: String, productId: String, like: Number, comment: Number, createTime: String){
    this._id = _id
    this.shopId = shopId
    this.productId = productId
    this.like = like
    this.comment = comment
    this.createTime = createTime
  }

  toJSON(){
    return {
        shopId: this.shopId,
        productId: this.productId,
        like: this.like,
        comment: this.comment,
        createTime: this.createTime
    }
  }

  // POST_NEWFEED
  async POST_NEWFEED(){
    const res = await fetch(API.POST_NEWFEED(), {
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
export default Newfeed
