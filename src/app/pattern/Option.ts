class Option{

  _id: any
  productId: any
  size: any
  count: any
  kilogram: any

  constructor (productId: String, size: String, count: Number, kilogram: Number){
    this.productId = productId
    this.size = size
    this.count = count
    this.kilogram = kilogram
  }

  toJSON(){
    return {
        productId: this.productId,
        size: this.size,
        count: this.count,
        kilogram: this.kilogram
    }
  }

}
export default Option
