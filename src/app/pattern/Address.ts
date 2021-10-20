
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

  // POST_ADDRESS

  // DELETE_ADDRESS

  // PATCH_ADDRESS

}

export default Address
