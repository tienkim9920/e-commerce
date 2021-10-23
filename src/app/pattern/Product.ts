import API from "../http/http"
import Detail from "./Detail"

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
    detail: any = []

    constructor (_id: any) {
        this._id = _id
    }

    // POST DETAIL:TN
    async postDetail(detail: Detail) {
      const data = await detail.POST_DETAIL()
      this.detail = [...this.detail, data]
      console.log(this.detail)
  }
    // POST_PRODUCT

    // PATCH_PRODUCT

    // GET_PRODUCT

    // GET Detail Product

    // GET List Likes Product by productId

    // POST List Likes Product

    // GET List Comments Product by productId

    // POST List Comment Product by productId

    // GET List Option

}

export default Product
