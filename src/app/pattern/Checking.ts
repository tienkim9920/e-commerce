
class Checking {

  noticeClient: Number
  noticeShop: Number

  constructor(noticeClient: Number, noticeShop: Number) {
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
