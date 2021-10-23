import API from "../http/http"
import Like from "./Like"
import Option from "./Option"

class Product {

    _id: any
    shopId: any
    categoryId: any
    name: any
    price: any
    discount: any
    like: any
    comment: any
    expiredTime: any
    likes: any = []
    comments: any = []
    option: any = []

    constructor (_id: any) {
        this._id = _id
    }

    toJSON(){
      return {
          shopId: this.shopId,
          categoryId: this.categoryId,
          name: this.name,
          price: this.price,
          discount: this.discount,
          like: this.like,
          comment: this.comment,
          expiredTime:this.expiredTime,
      }
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

    // GET_PRODUCT

    // GET Detail Product

    // GET List Likes Product by productId

    // POST List Likes Product

    // GET List Comments Product by productId

    // POST List Comment Product by productId

    // GET List Option


    async postLike(like:Like) {
      const data = await like.POST_LIKE()
      this.likes = [...this.likes, data]
    }

    async deleteLike(like:Like) {
      const data = await like.DELETE_LIKE()

      let updateLike = this.likes.filter((item: Like) => {
        return item !== like
      })

      this.likes =updateLike
    }

    async postOption(optionPost:Option) {
      const data = await optionPost.POST_OPTION()
      this.option = [...this.option, data]
    }

}

export default Product
