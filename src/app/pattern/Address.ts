import API from "../http/http"

class Address {
  _id: any;
  shopId: String
  address: String
  phone: String
  lat: String;
  lng: String;
  status: boolean;

  constructor(id:any,shopId: String, address: String, phone: String, lat: String, lng: String, status: boolean) {
      this._id = id;
      this.shopId=shopId;
      this.address=address;
      this.phone = phone
      this.lat=lat;
      this.lng=lng;
      this.status=status;
  }

  toJSON(){
    return {
      shopId:this.shopId,
      address:this.address,
      phone: this.phone,
      lat:this.lat,
      lng:this.lng,
      status:this.status
    }
  }

  // Get detail address by AddressId
  async getDetailAddressByAddressId(id : any){
    const res = await fetch(API.GET_DETAIL_ADDRESS_BY_ADDRESSID(id))
    const data = await res.json()
    this.shopId = data.shopId
    this.address = data.address
    this.phone = data.phone
    this.lat = data.lat
    this.lng = data.lng
    this.status = data.status
    this._id=data._id
  }

  // POST_ADDRESS:TN
  async POST_ADDRESS(){
    const res = await fetch(API.POST_ADDRESS_SHOP(), {
        method: 'POST',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data
  }

  // PATCH_ADDRESS:TN
  async PATCH_ADDRESS(id : any){
    const res = await fetch(API.PATCH_ADDRESS_SHOP(id), {
        method: 'PATCH',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data
  }

  // DELETE_ADDRESS:TN
  async DELETE_ADDRESS(id : any){
    const res = await fetch(API.DELETE_ADDRESS_SHOP(id), {
        method: 'DELETE',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data
  }

}

export default Address
