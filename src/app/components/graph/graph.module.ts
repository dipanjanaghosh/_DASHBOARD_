import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { BalanceComponent } from './balance/balance.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    SalesComponent,
    BalanceComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GraphModule { }
