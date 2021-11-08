import Category from "../pattern/Category"

class ListCategory{

  listCategory:any=[];
  category=new Category('')

  constructor (){}

  async getCategory(){
    const data =  await this.category.GET_CATEGORY();
    this.listCategory=data
  }

}

export default ListCategory
