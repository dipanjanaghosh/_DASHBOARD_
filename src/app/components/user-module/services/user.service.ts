import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getRecentOrders(){
    console.log("getRecentOrders++++++++++++++");
    return this.http.get('../../../../assets/data.json');
  }
}
