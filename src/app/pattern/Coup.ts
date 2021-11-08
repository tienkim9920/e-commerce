import API from "../http/http"

class Coup {

  shopId: String
  code: String
  discount: Number
  limit: any

  constructor(shopId: String, code: String, discount: Number, limit: any) {
      this.shopId =shopId;
      this.code = code;
      this.discount = discount;
      this.limit = limit;
  }

  toJSON(){
      return {
        shopId: this.shopId,
        code: this.code,
        discount: this.discount,
        limit: this.limit,
      }
  }

  // POST_COUP:TN
  async POST_COUP(){
    const res = await fetch(API.POST_COUP_SHOP(), {
        method: 'POST',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }

  // PATCH_COUP:TN
  async PATCH_COUP(){
    const res = await fetch(API.PATCH_COUP_SHOP(), {
        method: 'PATCH',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }

  // DELETE_COUP:TN
  async DELETE_COUP(){
    const res = await fetch(API.DELETE_COUP_SHOP(), {
        method: 'DELETE',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }
}

export default Coup
