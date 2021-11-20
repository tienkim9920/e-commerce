import API from "../http/http";

class Notification {

  userId: String;
  description: String

  constructor(userId: String, description: String){
      this.userId = userId
      this.description =description
  }

  toJSON(){
        return {
            userId: this.userId,
            description: this.description
        }
  }

  // POST_NOTIFICATION
  async POST_NOTIFICATION(){
    const res = await fetch(API.POST_NOTIFICATION(), {
        method: 'POST',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }

}

export default Notification
