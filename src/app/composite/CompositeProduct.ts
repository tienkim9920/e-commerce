import Product from "./Product"

class CompositeProduct{
    listProduct: any = []

    initComposite(composite: any){
        this.listProduct = composite
    }

    addProduct(product: Product){
        this.listProduct.push(product)
    }

    removeProduct(product: Product){
        const index = this.listProduct.findIndex((element: Product) => {
            return element.id === product.id
        })
        this.listProduct.splice(index, 1)
    }

    updateProduct(product: Product){
        const index = this.listProduct.findIndex((element: Product) => {
            return element.id === product.id
        })
        this.listProduct[index] = product
    }

    HienThiThongTin(){
        let arrayList: any = []
        this.listProduct.forEach((element: Product) => {
            arrayList = arrayList.concat(element.HienThiThongTin())
        })
        return arrayList
    }
}

export default CompositeProduct