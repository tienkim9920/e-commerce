import API from "../http/http"

class Coup {

  _id: any
  shopId: String
  code: String
  discount: Number
  limit: any

  constructor(id: any,shopId: String, code: String, discount: Number, limit: any) {
      this._id = id;
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

  // Get detail address by AddressId
  async getDetailCoupByCoupId(id : any){
    const res = await fetch(API.GET_DETAIL_COUP_BY_COUPID(id))
    const data = await res.json()
    this._id=data._id
    this.shopId = data.shopId
    this.code = data.code
    this.discount = data.discount
    this.limit = data.limit
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
    return data
  }

  // // PATCH_COUP:TN
  // async PATCH_COUP(){
  //   const res = await fetch(API.PATCH_COUP_SHOP(), {
  //       method: 'PATCH',
  //       body: JSON.stringify(this.toJSON()),
  //       headers: {
  //           'Content-type': 'application/json; charset=UTF-8',
  //       }
  //   })
  //   const data = await res.json()
  //   return data.result
  // }

  // // DELETE_COUP:TN
  // async DELETE_COUP(){
  //   const res = await fetch(API.DELETE_COUP_SHOP(), {
  //       method: 'DELETE',
  //       body: JSON.stringify(this.toJSON()),
  //       headers: {
  //           'Content-type': 'application/json; charset=UTF-8',
  //       }
  //   })
  //   const data = await res.json()
  //   return data.result
  // }
}

export default Coup
