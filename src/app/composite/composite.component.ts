import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import CompositeProduct from './CompositeProduct';
import { category } from './constants'
import Product from './Product';

@Component({
  selector: 'app-composite',
  templateUrl: './composite.component.html',
  styleUrls: ['./composite.component.css']
})
export class CompositeComponent implements OnInit {

  // @ViewChild('quanLy', { read: ElementRef }) quanLy!: ElementRef<any>;

  product: Product = new Product('', '', '', '', '')

  updateProduct: Product = new Product('', '', '', '', '')

  compositeTraSua: CompositeProduct = new CompositeProduct()

  compositeTrangPhuc: CompositeProduct = new CompositeProduct()

  compositeQuanLy: CompositeProduct = new CompositeProduct()

  categoryList = category

  quanLy: any

  constructor() {
    this.product.category = this.categoryList[0].id
  }

  ngOnInit(): void {
    this.initLocalStorage()
  }

  changeCategory(item: any){
    this.product.category = item
  }

  // Hiển thị dữ liệu
  handleShowData(){
    this.compositeQuanLy.initComposite([this.compositeTraSua, this.compositeTrangPhuc])
    this.quanLy = this.compositeQuanLy.HienThiThongTin()  
  }

  handleAddProduct(){
    // Save Local Storage
    this.saveLocalStorage()

    // Trà Sữa
    if (this.product.category === this.categoryList[0].id){
      this.addTraSua()
    }else { // Trang Phục
      this.addTrangPhuc()
    }
    
    this.handleShowData()
    this.resetProduct()
  }

  addTraSua(){
    this.compositeTraSua.addProduct(new Product(Math.random().toString(), this.product.category, this.product.name,
    this.product.price, this.product.description))
  }

  addTrangPhuc(){
    this.compositeTrangPhuc.addProduct(new Product(Math.random().toString(), this.product.category, this.product.name,
    this.product.price, this.product.description))
  }

  deleteTraSua(item: Product){
    this.compositeTraSua.removeProduct(item)
    this.deleteLocalStorage(item)
    this.handleShowData()
  }

  deleteTrangPhuc(item: Product){
    this.compositeTrangPhuc.removeProduct(item)
    this.deleteLocalStorage(item)
    this.handleShowData()
  }

  updateTraSua(){
    this.compositeTraSua.updateProduct(this.updateProduct)
    this.updateLocalStorage(this.updateProduct)
    this.handleShowData()
  }

  updateTrangPhuc(){
    this.compositeTrangPhuc.updateProduct(this.updateProduct)
    this.updateLocalStorage(this.updateProduct)
    this.handleShowData()
  }

  handleUpdate(item: Product){
    this.updateProduct = item
    console.log(this.updateProduct)
  }

  resetProduct(){
    this.product.id = ''
    this.product.category = 1
    this.product.name = ''
    this.product.price = ''
    this.product.description = ''
  }

  initLocalStorage(){
    if (JSON.parse(localStorage.getItem('composite')!)){
      const cloneComposite = JSON.parse(localStorage.getItem('composite') || '[]')

      cloneComposite.forEach((element: Product) => {
        if (String(element.category) === String(this.categoryList[0].id)){
          this.compositeTraSua.addProduct(new Product(element.id, element.category, element.name,
            element.price, element.description))
        }else{
          this.compositeTrangPhuc.addProduct(new Product(element.id, element.category, element.name,
            element.price, element.description))
        }
      });

      this.handleShowData()
    }
  }

  saveLocalStorage(){
    const cloneComposite = JSON.parse(localStorage.getItem('composite') || '[]')
    cloneComposite.push(new Product(Math.random().toString(), this.product.category, this.product.name,
    this.product.price, this.product.description))
    localStorage.setItem('composite', JSON.stringify(cloneComposite))
  }

  deleteLocalStorage(item: Product){
    const cloneComposite = JSON.parse(localStorage.getItem('composite') || '[]')
    const index = cloneComposite.findIndex((element: Product) => {
      return element.id === item.id
    })
    cloneComposite.splice(index, 1)
    localStorage.setItem('composite', JSON.stringify(cloneComposite))
  }

  updateLocalStorage(item: Product){
    const cloneComposite = JSON.parse(localStorage.getItem('composite') || '[]')
    const index = cloneComposite.findIndex((element: Product) => {
      return element.id === item.id
    })
    cloneComposite[index] = item
    localStorage.setItem('composite', JSON.stringify(cloneComposite))
  }
}
