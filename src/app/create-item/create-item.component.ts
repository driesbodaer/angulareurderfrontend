import { Component, OnInit } from '@angular/core';
import {Item} from "../item";
import {ItemService} from "../item.service";
import {EventEmitterService} from "../event-emitter.service";

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  constructor(private itemService: ItemService,  private eventEmitterService: EventEmitterService) { }

  pricee = 2;
  stocke = 2;

  showAdd(itemname: string, itemdescription: string ) {
    this.eventEmitterService.sendClickEvent(
      {
        name: itemname,
        description: itemdescription,
        price: this.pricee,
        amountOfStock: this.stocke,
        stockUrgency: 'Low'
      } as Item);
    this.itemService.addItem(
      {
        name: itemname,
        description: itemdescription,
        price:  this.pricee,
        amountOfStock: this.stocke,
        stockUrgency: 'Low'
      } as Item).subscribe(item => this.eventEmitterService.setItemToPass(item));
  }
  ngOnInit(): void {
  }

}
