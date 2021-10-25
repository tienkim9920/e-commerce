import API from "../http/http"

class Client{

  _id: any
  userId: any
  limit: any
  code: any
  statusOrder: any
  room: any = []
  message: any = []

  constructor (_id: any){
    this._id = _id
  }

  toJSON(){
    return{
      userId: this.userId,
      limit: this.limit,
      code: this.code,
      statusOrder: this.statusOrder
    }
  }



  // POST_CLIENT
  async POST_CLIENT(){
    const res = await fetch(API.POST_CLIENT(), {
      method: 'POST',
      body: JSON.stringify(this.toJSON()),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    return data.result
  }

  // GET Detail Client


  // GET List Room by clientId
  async getRoom(clientId: any) {
    const res = await fetch(API.GET_ROOM_CLIENT(clientId), {
        method: 'GET',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    this.room = data

}


}

export default Client
