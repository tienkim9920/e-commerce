import API from "../http/http"

class Tick{

  _id: any
  name: String
  description: String
  value: Number
  ticket: any = []

  constructor (_id: any, name: String, description: String, value: Number){
    this._id = _id
    this.name = name
    this.description = description
    this.value = value
  }

  toJSON(){
    return {
      name: this.name,
      description: this.description,
      value: this.value,
      ticket: this.ticket
    }
  }

  // POST Tick:TN
  async POST_TICK(){
    const res = await fetch(API.POST_TICKs(), {
        method: 'POST',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }

  // PATCH Tick:TN
  async PATCH_TICK(){
    const res = await fetch(API.POST_TICKET_USER(), {
        method: 'PATCH',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }

  // DELETE Tick:TN
  async DELETE_TICK(){
    const res = await fetch(API.POST_TICKET_USER(), {
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
export default Tick
