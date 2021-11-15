import API from "../http/http"

class Reputation {
  id:String
  userId: String
  shopId: String

  constructor(id: String,userId: String, shopId: String){
      this.id = id
      this.userId = userId
      this.shopId = shopId

  }

  toJSON(){
      return {
          userId: this.userId,
          shopId: this.shopId
      }
  }

  // POST_REPUTATION
  async POST_REPUTATION(){
    const res = await fetch(API.POST_REPUTATION(), {
        method: 'POST',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }

  // DELETE_REPUTATION
  async DELETE_REPUTATION(){
    const res = await fetch(API.DELETE_REPUTATION(this.userId, this.shopId), {
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

export default Reputation
