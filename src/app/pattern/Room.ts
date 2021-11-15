
import API from "../http/http"
import Message from "./Message"

class Room{

  _id: any
  clientId: any
  shopId: any
  checkingId: any
  message: any = []

  constructor (_id: any, clientId: any, shopId: any, checkingId: any){
    this._id = _id
    this.clientId = clientId
    this.shopId = shopId
    this.checkingId = checkingId
  }

  toJSON(){
    return {
      clientId: this.clientId,
      shopId: this.shopId,
      checkingId: this.checkingId
    }
  }

  // POST_ROOM
  async POST_ROOM(){
    const res = await fetch(API.POST_ROOM(), {
      method: 'POST',
      body: JSON.stringify(this.toJSON()),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    return data.result
  }

  async checkingRoom(){
    const res = await fetch(API.GET_CHECKING_ROOM(this.clientId, this.shopId))
    const data = await res.json()
    return data
  }

  // GET List message by _id
  async getMessageByRoom(){
    const res = await fetch(API.GET_MESSAGE_BY_ROOM(this._id))
    const data = await res.json()
    this.message = data
  }

  // POST List message
  async postMessageRoom(message: Message){
    const data = await message.POST_MESSAGE()
    this.message = [...this.message, data]
  }

}
export default Room
