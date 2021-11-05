import API from "../http/http"

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

  // POST_OPTION
  async POST_OPTION(){
    const res = await fetch(API.POST_OPTION(), {
        method: 'POST',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }
  
}
export default Option
