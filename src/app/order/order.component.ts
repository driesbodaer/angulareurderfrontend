import { Component, OnInit } from '@angular/core';
import {Order} from "../order";
import {EventEmitterService} from "../event-emitter.service";
import {Address} from "../address";
import {Itemgroup} from "../itemgroup";
import {OrderService} from "../order.service";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService, private orderService: OrderService) { }

  orders: Order[];

  orderId1: string;
  itemId1: string;
  orderedAmount1: number;
  streetName1: string;
  postalCode1: string;
  houseNumber1: string;
  country1: string;


  basketorder: Order;

  basketItemgroups: Itemgroup[];


  ngOnInit(): void {
    this.basketItemgroups = this.orderService.getbasketlist;
  // this.basketorder = this.eventEmitterService.getOrderToPass();
this.basketorder = {
  orderId: this.orderId1,

  itemGroups: [],

  address: {
    streetName: this.streetName1,
    postalCode: this.postalCode1,
    houseNumber: this.houseNumber1,
    country: this.country1
  } as Address
} as Order;

  }

  onclick() {
    this.basketorder = {
      orderId: this.orderId1,

      itemGroups: [],

      address: {
        streetName: this.streetName1,
        postalCode: this.postalCode1,
        houseNumber: this.houseNumber1,
        country: this.country1
      } as Address
    } as Order;
  }

  placeOrder() {
    this.orderService.placeorder(this.basketorder);
    alert('order was placed');
  }

  remove(itemgroup: Itemgroup) {
    this.basketItemgroups.splice(this.basketItemgroups.indexOf(itemgroup, 1));
  }
}
