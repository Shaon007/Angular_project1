import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserModel } from '../model/user.model';
@Injectable({
  providedIn: 'root'
})
export class SellerService {

  constructor(private http:HttpClient) { }
  userSignUp(data:UserModel) {
    return this.http.post('http://localhost:3000/seller',data)
  }
}
