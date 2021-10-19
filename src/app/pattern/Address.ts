
class Coupon {

  shopId: String;
  address: String;
  lat: String;
  lng: String;


  constructor(shopId: String, address: String, lat: String, lng: String) {
      this.shopId=shopId;
      this.address=address;
      this.lat=lat;
      this.lng=lng;
  }

  toJSON(){
      return {
        shopId:this.shopId,
        address:this.address,
        lat:this.lat,
        lng:this.lng
      }
  }

}

export default Coupon
