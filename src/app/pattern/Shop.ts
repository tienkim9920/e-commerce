import Product from 'src/app/pattern/Product';
import API from "../http/http"
import Coup from "./Coup"
import Address from "./Address"
import Reputation from "./Reputation"


class Shop{

  _id: any
  userId: any
  name: any
  description: any
  image: any
  reply: any
  replyTime: any
  createTime: any
  product: any = []
  order: any = []
  room: any = []
  reputation: any = []
  message: any = []
  address: any = []
  newfeed: any = []
  coup: any = []

  constructor (_id: String, userId: String, name: String, description: String, image: String, reply: Number, replyTime: String, createTime: String){
    this._id = _id
    this.userId = userId
    this.name = name
    this.description = description
    this.image = image
    this.reply = reply
    this.replyTime = replyTime
    this.createTime = createTime
  }

  toJSON(){
    return {
      userId: this.userId,
      name: this.name,
      description: this.description,
      image: this.image,
      reply: this.reply,
      replyTime: this.replyTime,
      createTime: this.createTime
    }
  }

  // POST Coup:TN
  async postCoup(coup: Coup) {
    const data = await coup.POST_COUP()
    this.coup = [...this.coup, data.coup]
    console.log(data)
    return data.coup

  }

  // GET Address:TN
  async getAddress() {
    const res = await fetch(API.GET_ADDRESS_SHOP(this._id))
    const data = await res.json()
    this.address = data
  }


  // POST Address:TN
  async postAddress(address: Address) {
    const data = await address.POST_ADDRESS()
    this.address = [...this.address, data.address]
    return data.address
  }

  // PATCH Address:TN
  async patchAddress(addressPatch: Address, index:any) {
    const res = await fetch(API.PATCH_ADDRESS_SHOP(addressPatch._id), {
      method: 'PATCH',
      body: JSON.stringify(addressPatch),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()

    this.address[index] = addressPatch
  }

  // DELETE Address:TN
  async deleteAddress(addressDelete: Address) {
    const res = await fetch(API.DELETE_ADDRESS_SHOP(addressDelete._id), {
      method: 'DELETE',
      body: JSON.stringify(this.toJSON()),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    // const data = await addressDelete.DELETE_ADDRESS(addressDelete._id)
    let updateAddress = this.address.filter((item: Address) => {
      return item !== addressDelete
    })
    this.address =updateAddress
  }

  // GET_SHOP
  async GET_SHOP(){
      const res = await fetch(API.GET_SHOP(), {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
      })
      const data = await res.json()
      return data
 }

   // GET_SHOP_CATEGORY
   async GET_SHOP_CATEGORY(id : any,query: any){
    const res = await fetch(API.GET_SHOP_CATEGORY(id,query), {
      method: 'GET',
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    return data
  }


  // POST_SHOP
  async POST_SHOP(){
    const res = await fetch(API.POST_SHOP(), {
      method: 'POST',
      body: JSON.stringify(this.toJSON()),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    return data
  }

  // PATCH_SHOP
  async PATCH_SHOP(detailPatch: any){
    console.log(detailPatch)
    const res = await fetch(API.PATCH_SHOP(this.userId), {
      method: 'PATCH',
      body: detailPatch
    })
    const data = await res.json()
  }

  // GET Detail Shop
  async getDetailShop(){
    const res = await fetch(API.GET_DETAIL_SHOP(this._id))
    const data = await res.json()
    this.userId = data.userId
    this.name = data.name
    this.description = data.description
    this.image = data.image
    this.reply = data.reply
    this.replyTime = data.replyTime
    this.createTime = data.createTime
  }

  async getDetailShopByUserId(){
    const res = await fetch(API.GET_DETAIL_SHOP_BY_USERID(this.userId))
    const data = await res.json()
    console.log(data)
    this._id = data._id
    this.userId = data.userId
    this.name = data.name
    this.description = data.description
    this.image = data.image
    this.reply = data.reply
    this.replyTime = data.replyTime
    this.createTime = data.createTime
  }

  // GET List Product by shopId ( Pagination Shop )
  async getListProductByUserId(){
    const res = await fetch(API.GET_LIST_PRODUCT_BY_USERID(this._id))
    const data = await res.json()
    this.product = data
  }

  async getPaginationShop(page: any){
    const res = await fetch(API.GET_PAGINATION_PRODUCT_SHOP(page, this._id))
    const data = await res.json()
    this.product = this.product.concat(data)
  }

  // GET List Order by shopId

  // PATCH list Order by shopId

  // GET List Room
  async getRoom() {
    const res = await fetch(API.GET_ROOM_SHOP(this._id))
    const data = await res.json()
    this.room = data
  }

  // GET List Reputation by shopId
  async getReputation(shopId: any) {
    const query = "?" + new URLSearchParams({shopId: shopId});
    const res = await fetch(API.GET_REPUTATION_SHOP(query))
    const data = await res.json()
    this.reputation = data
  }

  // POST list Reputation
  async postRepuation(reputation: Reputation){
    const data = await reputation.POST_REPUTATION()
    this.reputation = [...this.reputation, data]
  }

  // DELETE list Reputation
  async deleteReputation(reputation: Reputation){
    const data = await reputation.DELETE_REPUTATION()

    const index = this.reputation.findIndex((element: any) => {
      return element._id === data._id
    })

    this.reputation.splice(index, 1)
  }

  // Checking Reputation
  async checkingReputation(userId: any){
    const res = await fetch(API.CHECKING_REPUTATION(userId, this._id))
    const data = await res.json()
    return data
  }

  // GET List Address by shopId

  // DELETE Address

  // PATCH Address

  // GET List Coup by shopId:TN
  async getListCoup(){
    const res = await fetch(API.GET_COUP_SHOP(this._id))
    const data = await res.json()
    this.coup = data
  }

  // PATCH Coup:TN
  async patchCoup(coupPatch: Coup,index: any) {
    const res = await fetch(API.PATCH_COUP_SHOP(coupPatch._id), {
      method: 'PATCH',
      body: JSON.stringify(coupPatch),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()

    this.coup[index] = coupPatch
  }

  // DELETE Coup:TN
  async deleteCoup(coupDelete: Coup) {
    const res = await fetch(API.DELETE_COUP_SHOP(coupDelete._id), {
      method: 'DELETE',
      body: JSON.stringify(this.toJSON()),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()

    let updateCoup = this.coup.filter((item: Coup) => {
      return item !== coupDelete
    })
    this.coup = updateCoup
  }

  // DELETE Product of Shop:TN
  async deleteProduct(productDelete: Product) {
    const res = await fetch(API.DELETE_PRODUCT_SHOP(productDelete._id), {
      method: 'DELETE',
      body: JSON.stringify(this.toJSON()),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    // const data = await productDelete.DELETE_PRODUCT(productDelete._id)
    let updateProduct = this.product.filter((item: Product) => {
      return item !== productDelete
    })
    this.product =updateProduct
  }

  // Get list order shop
  async getOrderShop(userId:any,filter:any) {
    const query ="?"+new URLSearchParams(filter)
    const res = await fetch(API.GET_ORDER_SHOP(userId,query));
    const data = await res.json();
    this.order = data;
    console.log(data);
  }

}

export default Shop
