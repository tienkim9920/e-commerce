import API from "../http/http"

class Order{

  _id: any
  userId: any
  payId: any
  noteId: any
  shopId: any
  total: any
  status: any
  pay: any
  createTime: any
  detail: any = []

  constructor (_id: any, userId: any, payId: any, noteId: any, shopId: any, total: any, status: any, pay: any, createTime: any){
    this._id = _id
    this.userId = userId
    this.payId = payId
    this.noteId = noteId
    this.shopId = shopId
    this.total = total
    this.status = status
    this.pay = pay
    this.createTime = createTime
  }

  Order(){}

  toJSON(){
    return {
      userId: this.userId,
      payId: this.payId,
      noteId: this.noteId,
      shopId: this.shopId,
      total: this.total,
      status: this.status,
      pay: this.pay,
      createTime: this.createTime
    }
  }

  // GET DETAIL ORDER
  async getDetailOrder(){
    const res = await fetch(API.GET_DETAIL_ORDER(this._id))
    const data = await res.json()

    this.userId = data.userId
    this.payId = data.payId
    this.noteId = data.noteId
    this.shopId = data.shopId
    this.total = data.total
    this.status = data.status
    this.pay = data.pay
    this.createTime = data.createTime
  }


  // POST_ORDER
  async POST_ORDER(){
    const res = await fetch(API.POST_ORDER(), {
      method: 'POST',
      body: JSON.stringify(this.toJSON()),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    return data.result
  }

  // PATCH_ORDER
  async PATCH_ORDER(item:any,query: any){


    let body ="?"+new URLSearchParams(query)

    console.log(body)
    const res = await fetch(API.PATCH_ORDER(item._id,body), {
      method: 'PATCH',
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })

    const data = await res.json()
    return data.order
  }

  // GET List Detail by orderId
  async getDetailByOrder(){
    const res = await fetch(API.GET_DETAIL_BY_ORDER(this._id))
    const data = await res.json()
    this.detail = data
  }

}
export default Order
