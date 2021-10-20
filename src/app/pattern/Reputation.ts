
class Reputation {

  userId: String
  shopId: String

  constructor(userId: String, shopId: String){
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

  // DELETE_REPUTATION

}

export default Reputation
