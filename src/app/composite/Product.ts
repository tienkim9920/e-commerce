class Product{

    id: any
    category: any
    name: any
    price: any
    description: any

    constructor(id: any, category: any, name: any, price: any, description: any){
        this.id = id
        this.category = category
        this.name = name
        this.price = price
        this.description = description
    }

    HienThiThongTin(){
        const data = {
            name: this.name,
            category: this.category
        }
        return data
    }

}

export default Product