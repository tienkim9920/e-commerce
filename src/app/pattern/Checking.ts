import API from "../http/http";

class Checking {

  _id: String
  noticeClient: Number
  noticeShop: Number

  constructor(_id: String, noticeClient: Number, noticeShop: Number) {
    this._id = _id
    this.noticeClient = noticeClient;
    this.noticeShop= noticeShop;
  }

  toJSON(){
    return {
      noticeClient: this.noticeClient,
      noticeShop: this.noticeShop
    }
  }

  // POST_CHECKING
  async POST_CHECKING(){
    const res = await fetch(API.POST_CHECKING(), {
      method: 'POST',
      body: JSON.stringify(this.toJSON()),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    return data.result
  }

  // PATCH_CHECKING by permission
  async PATCH_CHECKING(permission: any){
    const body = {
      permission
    }
    const res = await fetch(API.PATCH_CHECKING(this._id), {
      method: 'PATCH',
      body: JSON.stringify(body),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    return data.result
  }

  // PATCH_CHECKING when user click checking
  async PATCH_CHECKING_NOTICE(){
    await fetch(API.PATCH_CHECKING_NOTICE(this._id))
  }
  
}

export default Checking
