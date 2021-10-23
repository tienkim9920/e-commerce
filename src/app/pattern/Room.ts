import Message from "./Message"

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

  async postMessage(messagePost:Message) {
    const data = await messagePost.POST_MESSAGE()
    this.message = [...this.message, data]
  }


}
export default Room
