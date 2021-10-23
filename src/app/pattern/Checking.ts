
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

  // PATCH_CHECKING by permission

  // PATCH_CHECKING when user click checking

}

export default Checking
