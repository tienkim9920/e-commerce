import API from "../http/http"

class Category{

  _id: any
  name: any
  product: any = []

  constructor (_id: any){
    this._id = _id
  }

  async GET_CATEGORY(){
      const res = await fetch(API.GET_CATEGORY(), {
          method: 'GET',
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          }
      })
      const data = await res.json()
      return data
  }

  async GET_PRODUCT_CATEGORY(id: any, query: any){

    let body ="?"+new URLSearchParams(query)

    const res = await fetch(API.GET_PRODUCT_CATEGORY(id, body), {
      method: 'GET',
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    this.product=data
  }

}

export default Category
