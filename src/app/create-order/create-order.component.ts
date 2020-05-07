import {Component, OnInit} from '@angular/core';
import {Order} from "../order";
import {EventEmitterService} from "../event-emitter.service";
import {Itemgroup} from "../itemgroup";
import {Address} from "../address";

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  constructor(private eventEmitterService: EventEmitterService) {
  }

  orderedamount: number;

  order: Order;


  ngOnInit(): void {

  }

  makeOrder(orderId1: string, itemId1: string, streetName1: string, postalCode1: string, houseNumber1: string, country1: string) {
    this.eventEmitterService.setOrderToPas(
      {
        orderId: orderId1,

        itemGroups: [],

        address: {
          streetName: streetName1,
          postalCode: postalCode1,
          houseNumber: houseNumber1,
          country: country1
        } as Address
      } as Order);
  }
}
