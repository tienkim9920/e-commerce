import API from "../http/http"

class Like {
    id: String;
    productId: String
    userId: String

    constructor(id: String,productId: String, userId: String){
      this.id = id
      this.productId = productId
      this.userId = userId
    }

    toJSON(){
        return {
            productId: this.productId,
            userId: this.userId
        }
    }

    // POST_LIKE
    async POST_LIKE(){
          const res = await fetch(API.POST_LIKE(), {
              method: 'POST',
              body: JSON.stringify(this.toJSON()),
              headers: {
                  'Content-type': 'application/json; charset=UTF-8',
              }
          })
          const data = await res.json()
          return data.result
    }

    async DELETE_LIKE(){
      const res = await fetch(API.DELETE_LIKE(this.userId, this.productId), {
          method: 'DELETE',
          body: JSON.stringify(this.toJSON()),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          }
      })
      const data = await res.json()
      return data.result
  }



    // Checking Like User
    async checkingLikeUser(){
        const res = await fetch(API.CHECKING_LIKE_USER(this.userId, this.productId))
        const data = await res.json()
        return data
    }
}

export default Like
