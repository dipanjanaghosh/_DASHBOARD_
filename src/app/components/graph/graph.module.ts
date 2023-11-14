import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { BalanceComponent } from './balance/balance.component';
import { ProductsComponent } from './products/products.component';
import { HighchartsChartModule } from 'highcharts-angular'


@NgModule({
  declarations: [
    SalesComponent,
    BalanceComponent,
    ProductsComponent
  ],
  imports: [
    HighchartsChartModule,
    CommonModule
  ],
  exports: [
    SalesComponent
  ]
})
export class GraphModule { }
