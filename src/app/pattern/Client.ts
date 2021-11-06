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

  async PATCH_LIMIT(){
    const res = await fetch(API.PATCH_CLIENT_LIMIT(this.userId), {
      method: 'PATCH',
      body: JSON.stringify(this.toJSON()),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    return data.result
  }

  async PATCH_STATUS(){
    const res = await fetch(API.PATCH_CLIENT_STATUS(this.userId), {
      method: 'PATCH'
    })
    const data = await res.json()
    return data.result
  }

  // GET Detail Client

  async getDetailClient(userId: any) {
    const res = await fetch(API.GET_DETAIL_CLIENT(userId), {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    this.userId=data.userId
    this.code=data.code
    this.limit=data.limit
    this.statusOrder=data.statusOrder
  }

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
