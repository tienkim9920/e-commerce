import API from "../http/http"

class ThamSo {

    productDiscount: any = []
    productHomePagination: any = []
    productCategory: any = []
    productSearch: any = []
    listTick: any = []
    listPay: any = []
    listNewfeed: any = []
    listStatistic: any = []

    constructor () {}

    async getListCategory() {
        const res = await fetch(API.GET_CATEGORY())
        const data = await res.json()
        this.productCategory = data
    }

    async getHomeProduct(page: any){
        const res = await fetch(API.GET_HOME_PRODUCT(page))
        const data = await res.json()
        this.productHomePagination = this.productHomePagination.concat(data)
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

    async getListPayment() {
        const res = await fetch(API.GET_PAYMENT())
        const data = await res.json()
        this.listPay = data
    }

    async getListSearch(word: any) {
        const res = await fetch(API.GET_PRODUCT_SEARCH(word))
        const data = await res.json()
        this.productSearch = data
    }

    async getListNewfeed(page: any) {
        const res = await fetch(API.GET_PAGINATION_NEWFEED(page))
        const data = await res.json()
        this.listNewfeed = this.listNewfeed.concat(data)
    }

    async getListStatistic(shopId: any, query: any){
        const res = await fetch(API.GET_STATISTIC_SHOP(shopId, query))
        const data = await res.json()
        console.log(data)
        this.listStatistic = data
    }

}

export default ThamSo