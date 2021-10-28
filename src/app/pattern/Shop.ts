import API from "../http/http"
import Coup from "./Coup"
import Address from "./Address"


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
    this.coup = [...this.coup, data]
    console.log(this.coup)
  }

    // GET Address:TN
  async getAddress(shopId: any) {
    const query = "?" + new URLSearchParams({shopId: shopId});
    const res = await fetch(API.GET_ADDRESS_SHOP(query), {
        method: 'GET',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    this.address = data.address
  }


  // POST Address:TN
  async postAddress(address: Address) {
    const data = await address.POST_ADDRESS()
    this.address = [...this.address, data]
    console.log(this.address)
  }

  // PATCH Address:TN
  async patchAddress(addressPatch: Address,valueChange: Address) {
    const data = await addressPatch.PATCH_ADDRESS()
    const index= this.address.indexOf(addressPatch);
    this.address[index] = valueChange
  }

  // DELETE Address:TN
  async deleteAddress(addressDelete: Address) {
    const data = await addressDelete.DELETE_ADDRESS()
    let updateAddress = this.address.filter((item: Address) => {
      return item !== addressDelete
    })
    this.address =updateAddress
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
  async PATCH_SHOP(){
    const res = await fetch(API.PATCH_SHOP(this._id), {
      method: 'PATCH',
      body: JSON.stringify(this.toJSON()),
      headers: {
          'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    return data
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

  // GET List Product by shopId ( Pagination Shop )

  // GET List Order by shopId

  // PATCH list Order by shopId

  // GET List Room
  async getRoom(shopId: any) {
    const res = await fetch(API.GET_ROOM_SHOP(shopId), {
      method: 'GET',
      body: JSON.stringify(this.toJSON()),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
    const data = await res.json()
    this.room = data
  }

  // GET List Reputation by shopId
  async getReputation(shopId: any) {
    const query = "?" + new URLSearchParams({shopId: shopId});
    const res = await fetch(API.GET_REPUTATION_SHOP(query), {
        method: 'GET',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    this.reputation = data
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
  async patchCoup(coup: Coup) {
    const data = await coup.PATCH_COUP()
    this.coup = [...this.coup, data]
    console.log(this.coup)
  }

  // DELETE Coup:TN
  async deleteCoup(coup: Coup) {
    const data = await coup.DELETE_COUP()
    this.coup = [...this.coup, data]
    console.log(this.coup)
  }

}

export default Shop
