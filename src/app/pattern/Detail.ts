
class Detail {

  productId: String
  orderId: String
  count: Number
  size: String
  update: Boolean

  constructor(productId: String, orderId: String, count: Number, size:String, update: Boolean){
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

  // POST_DETAIL
  
}

export default Detail
