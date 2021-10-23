import API from "../http/http"
import Coup from "./Coup"
import Address from "./Address"


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

  // POST Coup:TN
  async postCoup(coup: Coup) {
    const data = await coup.POST_COUP()
    this.coup = [...this.coup, data]
    console.log(this.coup)
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

  // POST Address:TN
  async postAddress(address: Address) {
    const data = await address.POST_ADDRESS()
    this.address = [...this.address, data]
    console.log(this.address)
  }

  // PATCH Address:TN
  async patchAddress(address: Address) {
    const data = await address.PATCH_ADDRESS()
    this.address = [...this.address, data]
    console.log(this.address)
  }

  // DELETE Address:TN
  async deleteAddress(address: Address) {
    const data = await address.DELETE_ADDRESS()
    this.address = [...this.address, data]
    console.log(this.address)
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
