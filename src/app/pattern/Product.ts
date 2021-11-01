import API from "../http/http"
import Detail from "./Detail"
import Like from "./Like"
import Option from "./Option"
import Comment from "./Comment"


class Product {

    _id: any
    shopId: any
    categoryId: any
    name: any
    price: any
    description: any
    image: any
    discount: any
    like: any
    comment: any
    expiredTime: any
    likes: any = []
    comments: any = []
    option: any = []
    detail: any = []

    constructor (_id: any, shopId: any, categoryId: any, name: any, price: any, description: any, image: any,
        discount: any, like: any, comment: any, expiredTime: any) {
        this._id = _id
        this.shopId = shopId
        this.categoryId = categoryId
        this.name = name
        this.price = price
        this.description = description
        this.image = image
        this.discount = discount
        this.like = like
        this.comment = comment
        this.expiredTime = expiredTime
    }

    toJSON(){
        return {
            shopId: this.shopId,
            categoryId: this.categoryId,
            name: this.name,
            price: this.price,
            image: this.image,
            description: this.description,
            discount: this.discount,
            like: this.like,
            comment: this.comment,
            expiredTime: this.expiredTime
        }
    }

    // POST DETAIL:TN
    async postDetail(detail: Detail) {
      const data = await detail.POST_DETAIL()
      this.detail = [...this.detail, data]
  }
    // POST_PRODUCT
    async POST_PRODUCT(){
      const res = await fetch(API.POST_PRODUCT(), {
          method: 'POST',
          body: JSON.stringify(this.toJSON()),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          }
      })
      const data = await res.json()
      return data.result
    }

    // PATCH_PRODUCT
    async PATCH_PRODUCT(id: any){
      const res = await fetch(API.PATCH_PRODUCT(id), {
          method: 'PATCH',
          body: JSON.stringify(this.toJSON()),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          }
      })
      const data = await res.json()
      return data.result
    }

    // DELETE_PRODUCT
    async DELETE_PRODUCT(id: any){
          const res = await fetch(API.DELETE_PRODUCT(id), {
              method: 'DELETE',
              body: JSON.stringify(this.toJSON()),
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              }
          })
          const data = await res.json()
          return data.result
    }

    // DELETE_PRODUCT

    // GET Detail Product
    async getDetailProduct(_id: any){
        const res = await fetch(API.GET_DETAIL_PRODUCT(_id))
        const data = await res.json()
        this._id = _id
        this.shopId = data.shopId
        this.categoryId = data.categoryId
        this.name = data.name
        this.price = data.price
        this.description = data.description
        this.image = data.image
        this.discount = data.discount
        this.like = data.like
        this.comment = data.comment
        this.expiredTime = data.expiredTime
    }

    // GET List Likes Product by productId
    async getLikeProduct(){
        const res = await fetch(API.GET_LIKE_PRODUCT(this._id))
        const data = await res.json()
        this.likes = data
    }

    // GET List Comments Product by productId
    async getCommentProduct(){
        const res = await fetch(API.GET_COMMENT_PRODUCT(this._id))
        const data = await res.json()
        this.comments = data.reverse()
    }

    // POST List Comment Product by productId
    async postCommentProduct(comment: Comment){
        const data = await comment.POST_COMMENT()
        this.comments = [data, ...this.comments]
    }

    // GET List Option
    async getOptionProduct(){
        const res = await fetch(API.GET_OPTION_PRODUCT(this._id))
        const data = await res.json()
        this.option = data
    }

    async postLike(like:Like) {
      const data = await like.POST_LIKE()
      this.likes = [...this.likes, data]
    }

    async deleteLike(like:Like) {
      const data = await like.DELETE_LIKE()

      let updateLike = this.likes.filter((item: Like) => {
        return item !== like
      })

      this.likes = updateLike
    }

    async postOption(optionPost:Option) {
      const data = await optionPost.POST_OPTION()
      this.option = [...this.option, data]
    }

    async patchLike(){
        await fetch(API.PATCH_LIKE(this._id))
        this.like = this.like + 1
    }

    async patchDislike(){
        await fetch(API.PATCH_DISLIKE(this._id))
        this.like = this.like - 1
    }

}

export default Product
