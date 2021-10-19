
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
    details: any = []

    constructor (_id: any) {
        this._id = _id
    }

}

export default Product