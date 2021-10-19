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
}
export default Shop
