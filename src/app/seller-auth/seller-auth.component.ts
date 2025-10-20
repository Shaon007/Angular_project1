import { Component, OnInit } from '@angular/core';
import { UserModel } from '../model/user.model';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.scss']
})
export class SellerAuthComponent implements OnInit {
  public isValidSubmit: boolean = false;
  public formSubmit: boolean = false;
  public _userModel: UserModel;
  constructor(private seller: SellerService, private router: Router
  ) {
    this._userModel = {} as UserModel
  }
  ngOnInit(): void {
    this.initUserModel();
  }
  initUserModel() {
    this._userModel = {
      name: '',
      password: '',
      email: '',
    }
  }
  signUp(data: UserModel): void {
    console.log('service');
    this.seller.userSignUp(data).subscribe((result) => {
      if (result) {
        this.router.navigate(['seller-home'])
      }
    })
  }
  onSubmit() {
    if (
      this._userModel.name &&
      this._userModel.email.includes('@') &&
      this._userModel.password
    ) {
      this.isValidSubmit = true;
      // console.log(this._userModel);
      this.seller.userSignUp(this._userModel).subscribe((result) => {
        console.log("signed in", result);
        if (result) {
          this.router.navigate(['seller-home'])
        }
        this.initUserModel();
      },
        (error) => {
          console.log("error", error);
        });

    }
    else {
      this.isValidSubmit = false;
      console.log("invalid");

    }
  }

}
