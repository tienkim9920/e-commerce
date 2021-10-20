class Shop{

  _id: any
  userId: any
  name: any
  description: any
  rely: any
  relyTime: any
  createTime: any
  product: any = []
  order: any = []
  room: any = []
  reputation: any = []
  message: any = []
  address: any = []
  newfeed: any = []
  coup: any = []

  constructor (_id: any){
    this._id = _id
  }

  // POST_SHOP

  // PATCH_SHOP

  // GET Detail Shop

  // GET List Product by shopId ( Pagination Shop)

  // GET List Order by shopId

  // GET List Room

  // GET List Reputation by shopId

  // GET List Address by shopId

  // DELETE Address

  // PATCH Address

  // GET List Coup by shopId

  // DELETE Coup

  // PATCH Coup

}
export default Shop
