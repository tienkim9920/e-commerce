import API from "src/app/http/http"

class ListProduct {

    count: any = []
    products: any = []

    constructor (){
    }

    // Get list all product of shop
    async getAllProductShop(shopId: any, query: any) {
        const res = await fetch(API.GET_ALL_PRODUCT_SHOP(shopId, query))
        const data = await res.json()
        this.products = data.result

        this.count = []
        for (let i = 1; i <= data.pagination; i++){
            this.count.push(i)
        }
    }

    // Get list all product of shop
    async getSaleProductShop(shopId: any, query: any) {
        const res = await fetch(API.GET_SALE_PRODUCT_SHOP(shopId, query))
        const data = await res.json()
        this.products = data.result

        this.count = []
        for (let i = 1; i <= data.pagination; i++){
            this.count.push(i)
        }
    }

    // Get list all product of shop
    async getOutSaleProductShop(shopId: any, query: any) {
        const res = await fetch(API.GET_OUTSALE_PRODUCT_SHOP(shopId, query))
        const data = await res.json()
        this.products = data.result
        console.log(data)

        this.count = []
        for (let i = 1; i <= data.pagination; i++){
            this.count.push(i)
        }
    }

}

export default ListProduct