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

  constructor (_id: any, userId: String, payId: String, noteId: String, shopId: String, total: String, status: String, pay: Boolean, createTime: String){
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

}
export default Order
