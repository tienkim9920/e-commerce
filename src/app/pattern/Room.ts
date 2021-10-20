class Room{

  _id: any
  clientId: any
  shopId: any
  message: any = []

  constructor (_id: any, clientId: String, shopId: String, message: String){
    this._id = _id
    this.clientId = clientId
    this.shopId = shopId
    this.message = message
  }

  toJSON(){
    return {
        clientId: this.clientId,
        shopId: this.shopId,
        message: this.message
    }
  }

  // POST_ROOM

  // GET List message by _id

  // POST List message

}
export default Room
