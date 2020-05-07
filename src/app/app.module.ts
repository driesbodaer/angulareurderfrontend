import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ItemsComponent} from './items/items.component';
import {CreateItemComponent} from './create-item/create-item.component';
import {FormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {ItemSearchComponent} from "./item-search/item-search.component";
import {ItemSearch2Component} from './item-search2/item-search2.component';
import {EventEmitterService} from "./event-emitter.service";
import {CustomerComponent} from "./customer/customer.component";
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerSearchComponent } from './customer-search/customer-search.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { OrderComponent } from './order/order.component';
import { CreateOrderComponent } from './create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    CreateItemComponent,
    DashboardComponent,
    ItemDetailsComponent,
    ItemSearchComponent,
    ItemSearch2Component,
    CustomerComponent,
    CustomerDetailComponent,
    CustomerSearchComponent,
    CreateCustomerComponent,
    OrderComponent,
    CreateOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [EventEmitterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
