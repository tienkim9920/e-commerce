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
    stock: any
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
        this.stock = true
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
            stock: this.stock,
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
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('shopId', this.shopId);
      formData.append('price', this.price);
      formData.append('discount', this.discount);
      formData.append('description', this.description);
      formData.append('like', "0");
      formData.append('comment', "0");
      formData.append('stock', "true");
      formData.append('expiredTime', "0");
      formData.append('categoryId', this.categoryId);
      formData.append('option', JSON.stringify(this.option));

      for (let i = 0; i < this.image.length; i++) {
        formData.append('file', this.image[i].file)
        formData.append('fileName', this.image[i].fileName)
      }
      const res = await fetch(API.POST_PRODUCT(), {
          method: 'POST',
          body: formData,
      })
      const data = await res.json()
      return data.msg
    }

    // PATCH_PRODUCT
    async PATCH_PRODUCT(id: any){
      const formData = new FormData();
      formData.append('name', this.name);
      formData.append('shopId', this.shopId._id);
      formData.append('price', this.price);
      formData.append('discount', this.discount);
      formData.append('description', this.description);
      formData.append('like', this.like);
      formData.append('comment', this.comment);
      formData.append('stock', "true");
      formData.append('expiredTime', "0");
      formData.append('categoryId', this.categoryId);
      formData.append('option', JSON.stringify(this.option));

      for (let i = 0; i < this.image.length; i++) {
        this.image[i].file? formData.append('file', this.image[i].file):""
        this.image[i].fileName ? formData.append('fileName', this.image[i].fileName) : formData.append('fileName', this.image[i])
      }
      const res = await fetch(API.PATCH_PRODUCT(id), {
          method: 'PATCH',
          body: formData,
      })
      const data = await res.json()
      return data.msg
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
        this.stock = data.stock
        this.expiredTime = data.expiredTime
    }

    // GET List Likes Product by productId
    async getLikeProduct(){
        const res = await fetch(API.GET_LIKE_PRODUCT(this._id))
        const data = await res.json()
        this.likes = data
    }

    // GET List Comments Product by productId
    async getCommentProduct(productId: any){
        const res = await fetch(API.GET_COMMENT_PRODUCT(productId))
        const data = await res.json()
        this.comments = data.reverse()
        console.log(this.comments)
    }

    // POST List Comment Product by productId
    async postCommentProduct(comment: Comment){
        const data = await comment.POST_COMMENT()
        this.comments = [data, ...this.comments]
    }

    // GET List Option
    async getOptionProduct(productId: any){
        const res = await fetch(API.GET_OPTION_PRODUCT(productId))
        const data = await res.json()
        this.option = data
    }

    // Thêm vào danh sách Like
    async postLike(like:Like) {
      const data = await like.POST_LIKE()
      this.likes = [...this.likes, data]
    }

    // Xóa khỏi danh sách Like
    async deleteLike(like:Like) {
      const data = await like.DELETE_LIKE()

      let updateLike = this.likes.filter((item: Like) => {
        return item !== like
      })

      this.likes = updateLike
    }

    // Thêm vào danh sách Option
    async postOption(optionPost:Option) {
      const data = await optionPost.POST_OPTION()
      this.option = [...this.option, data]
    }

    // Thay đổi cộng 1 like
    async patchLike(){
        this.like += 1
        await fetch(API.PATCH_LIKE(this._id))
    }

    // Thay đổi trừ 1 like
    async patchDislike(){
        this.like -= 1
        await fetch(API.PATCH_DISLIKE(this._id))
    }

    // Kiểm tra đối tượng đó đã like hay chưa
    async checkingUserLikeProduct(userId: any){
        const res = await fetch(API.CHECKING_LIKE_USER(userId, this._id))
        const data = await res.json()
        return data
    }

    // Thay đổi cộng 1 lượt comment
    async patchCountComment(){
        this.comment += 1
        await fetch(API.PATCH_COUNT_COMMENT(this._id))
    }

    // Checking status Stock Product => true = hết hàng || false = còn hàng
    async checkingCountOptionProduct() {
        const res = await fetch(API.CHECKING_COUNT_OPTION_PRODUCT(this._id))
        const data = await res.json()
        return data
    }

    async patchStatusStockProduct() {
        await fetch(API.PATCH_STOCK_PRODUCT(this._id))
    }

}

export default Product
