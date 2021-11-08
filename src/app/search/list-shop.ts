import Shop from "../pattern/Shop";


class ListShop{

  listShop:any=[];
  shop=new Shop("","","","","",0,"","")

  constructor (){}

  async getShop(id : any,query:any){
    console.log(query)
    if(id!=="all"){

      let body ="?"+new URLSearchParams(query)

      const data =  await this.shop.GET_SHOP_CATEGORY(id,body);
      this.listShop=data
    }else{
      const data =  await this.shop.GET_SHOP();
      this.listShop=data
    }
  }

}

export default ListShop
