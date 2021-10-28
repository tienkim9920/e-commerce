import API from "../http/http"

class Address {
  id: any;
  shopId: String
  address: String
  phone: String
  lat: String;
  lng: String;
  status: boolean;


  constructor(id:any,shopId: String, address: String, phone: String, lat: String, lng: String, status: boolean) {
      this.id = id;
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
  async PATCH_ADDRESS(){
    const res = await fetch(API.PATCH_ADDRESS_SHOP(this.id), {
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
  async DELETE_ADDRESS(){
    const res = await fetch(API.DELETE_ADDRESS_SHOP(this.id), {
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
