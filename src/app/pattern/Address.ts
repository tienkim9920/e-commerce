import API from "../http/http"

class Address {

  shopId: String;
  address: String;
  lat: String;
  lng: String;
  status: boolean;


  constructor(shopId: String, address: String, lat: String, lng: String, status: boolean) {
      this.shopId=shopId;
      this.address=address;
      this.lat=lat;
      this.lng=lng;
      this.status=status;
  }

  toJSON(){
    return {
      shopId:this.shopId,
      address:this.address,
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
    return data.result
  }

  // PATCH_ADDRESS:TN
  async PATCH_ADDRESS(){
    const res = await fetch(API.PATCH_ADDRESS_SHOP(), {
        method: 'PATCH',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }

  // DELETE_ADDRESS:TN
  async DELETE_ADDRESS(){
    const res = await fetch(API.DELETE_ADDRESS_SHOP(), {
        method: 'DELETE',
        body: JSON.stringify(this.toJSON()),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    const data = await res.json()
    return data.result
  }

}

export default Address
