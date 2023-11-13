import { Component,OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { recentOrders } from '../models/orders';
import { data } from '../models/data';

@Component({
  selector: 'app-recent-order',
  templateUrl: './recent-order.component.html',
  styleUrls: ['./recent-order.component.scss']
})
export class RecentOrderComponent implements OnInit{
  orderList :recentOrders[] = [];

  constructor(private us:UserService){  }

  ngOnInit(): void {
    this.getOrderList();
  }
  getOrderList() {
    this.us.getRecentOrders().subscribe(
      (data)=>{
        const dataWithRecentOrders = data as { recent_orders: recentOrders[] };
        const d2 = dataWithRecentOrders.recent_orders as recentOrders [];
        console.log("Inside data d2",typeof d2);
        console.log("Inside data",typeof dataWithRecentOrders.recent_orders);
        this.orderList = d2;
      }
    )
  }
}
