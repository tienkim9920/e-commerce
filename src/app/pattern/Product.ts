
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