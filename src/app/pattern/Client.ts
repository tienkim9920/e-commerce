import API from "../http/http"

class Client{

  _id: any
  userId: any
  limit: any
  code: any
  statusOrder: any
  room: any = []
  message: any = []

  constructor (_id: any, userId: any, limit: any, code: any, statusOrder: any){
    this._id = _id
    this.userId = userId
    this.limit = limit
    this.code = code
    this.statusOrder = statusOrder
  }

  toJSON(){
    return {
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

}

export default Client
