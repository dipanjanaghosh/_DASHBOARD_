import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentOrderComponent } from './recent-order/recent-order.component';
import { UserRegComponent } from './user-reg/user-reg.component';



@NgModule({
  declarations: [
    RecentOrderComponent,
    UserRegComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModuleModule { }
