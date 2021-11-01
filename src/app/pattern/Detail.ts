import API from "../http/http"
import Product from "./Product"

class Detail {

  productId: Product
  orderId: String
  count: any
  size: String
  update: Boolean

  constructor(productId: Product, orderId: String, count: any, size:String, update: Boolean){
      this.productId=productId;
      this.orderId=orderId;
      this.count=count;
      this.size=size;
      this.update=update;
  }

  toJSON(){
      return {
        productId: this.productId,
        orderId: this.orderId,
        count: this.count,
        size: this.size,
        update: this.update
      }
  }

  // POST_DETAIL:TN
  async POST_DETAIL(){
    const res = await fetch(API.POST_DETAIL_PRODUCT(), {
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

export default Detail
