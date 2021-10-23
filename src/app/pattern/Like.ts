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

    // DELETE_LIKE
    async DELETE_LIKE(){
      const res = await fetch(API.DELETE_LIKE(this.id), {
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

export default Like
