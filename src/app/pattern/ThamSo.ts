import API from "../http/http"

class ThamSo {

    productDiscount: any = []
    productHomePagination: any = []
    productCategory: any = []
    listTick: any = []

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

    async getListTick() {
        const res = await fetch(API.GET_TICK())
        const data = await res.json()
        this.listTick = data
    }

}

export default ThamSo