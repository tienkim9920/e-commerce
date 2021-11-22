import API from "../http/http"

class Option{

  _id: any
  productId: any
  size: any
  count: any

  constructor (_id: String,productId: String, size: String, count: Number){
    this._id = _id
    this.productId = productId
    this.size = size
    this.count = count
  }

  toJSON(){
    return {
      productId: this.productId,
      size: this.size,
      count: this.count
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

  // PATCH_OPTION
  async PATCH_OPTION(){
    const res = await fetch(API.PATCH_OPTION(this._id), {
        method: 'PATCH',
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
