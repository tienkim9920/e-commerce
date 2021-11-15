import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import User from 'src/app/pattern/User';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  user = new User(JSON.parse(localStorage.getItem('jwt')!).userId)

  file: any

  checkingFile: Boolean = false

  success: Boolean = false

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.user.getDetail()
  }

  uploadImage(newValue: any){
    if (newValue.target.files && newValue.target.files[0]) {
      this.file = newValue.target.files[0]
      this.checkingFile = true
    }
  }

  changeName(newValue: any){
    this.user.name = newValue
  }

  saveInfor(){
    
    // Cập nhật user
    this.user.PATCH_USER(this.file, this.checkingFile)
    this.cartService.setName(this.user.name)
    this.success = true

    if (this.checkingFile){
      setTimeout(() => {
        this.cartService.setImage(`http://localhost:4000/${this.file.name}`)
        this.checkingFile = false
      }, 2000)
    }

    setTimeout(() => {
      this.success = false
    }, 5000)
  }

}
