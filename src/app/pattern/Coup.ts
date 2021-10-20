
class Coup {

  shopId: String
  code: String
  discount: Number
  limit: Number

  constructor(shopId: String, code: String, discount: Number, limit: Number) {
      this.shopId =shopId;
      this.code = code;
      this.discount = discount;
      this.limit = limit;
  }

  toJSON(){
      return {
        shopId: this.shopId,
        code: this.code,
        discount: this.discount,
        limit: this.limit,
      }
  }

  // POST_COUP

  // PATCH_COUP

  // DELETE_COUP
}

export default Coup
