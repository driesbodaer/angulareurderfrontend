import { Component, OnInit, Input } from '@angular/core';
import {Item} from "../item";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ItemService} from "../item.service";
import {OrderService} from "../order.service";
import {tap} from "rxjs/operators";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private itemService: ItemService,
              private location: Location, private orderService: OrderService) { }

  @Input() item: Item;

  items: Item[];

  pricee: number;
  stocke: number;

  updateItem: Item ;

  ngOnInit(): void {
    this.getItem();
  }

  getItem() {
    const name = this.route.snapshot.paramMap.get('name');
    this.itemService.getItem(name).subscribe(item => this.item = item );
    this.itemService.getItem(name).subscribe(item => this.updateItem = item );
    // this.item = this.items.find(item => item.name === name);

  }

  goBack(): void {
    this.location.back();
  }

  update(description: string) {
    this.updateItem.amountOfStock = this.stocke;
    this.updateItem.price = this.pricee;
    this.updateItem.description = description;
    this.itemService.updateItem(this.updateItem).subscribe();
    location.reload();
  }

  orderItem() {
    this.orderService.addTobasket(this.item);
  }
}
