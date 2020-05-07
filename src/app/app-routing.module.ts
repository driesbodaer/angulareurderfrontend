import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {ItemsComponent} from "./items/items.component";
import {CreateItemComponent} from "./create-item/create-item.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ItemDetailsComponent} from "./item-details/item-details.component";
import {CustomerComponent} from "./customer/customer.component";
import {CustomerDetailComponent} from "./customer-detail/customer-detail.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {CustomerSearchComponent} from "./customer-search/customer-search.component";
import {OrderComponent} from "./order/order.component";
import {CreateOrderComponent} from "./create-order/create-order.component";

const routes: Routes = [
  { path: 'items', component: ItemsComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'createitem', component: CreateItemComponent},
  { path: 'addC', component: CreateCustomerComponent},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'item/:name', component: ItemDetailsComponent },
  { path: 'customer/:firstname', component: CustomerDetailComponent },
  { path: 'Csearch', component: CustomerSearchComponent },
  { path: 'orders', component: OrderComponent },
  { path: 'createO', component: CreateOrderComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
