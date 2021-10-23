import API from "../http/http"

class ThamSo {

    productDiscount: any = []
    productHomePagination: any = []
    productCategory: any = []

    constructor () {}

    async getListCategory() {
        const res = await fetch(API.GET_CATEGORY())
        const data = await res.json()
        this.productCategory = data
    }

    async getHomeProduct(page: any){
        const res = await fetch(API.GET_HOME_PRODUCT(page))
        const data = await res.json()
        this.productHomePagination = data
    }

    async getDiscountProduct(){
        const res = await fetch(API.GET_DISCOUNT_PRODUCT())
        const data = await res.json()
        this.productDiscount = data
    }

}

export default ThamSo