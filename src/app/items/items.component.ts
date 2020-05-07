import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {Item} from '../item';
import {ItemService} from "../item.service";
import { EventEmitterService } from '../event-emitter.service';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ItemsComponent implements OnInit {

  constructor(private itemService: ItemService, private eventEmitterService: EventEmitterService, private cdr: ChangeDetectorRef) {
  }


  items: Item[];

  clickEventsubscription: Subscription;
  clickEventsubscription2: Subscription;

  addItem(item: Item) {
    this.items.push(item);
  }

  ngOnInit(): void {
    this.itemService.getItems().subscribe(items => {
      this.items = items;
      this.cdr.detectChanges();
    });

    this.clickEventsubscription = this.eventEmitterService.getClickEvent().subscribe(() =>{
      this.addItem(this.eventEmitterService.getItemToPass()); });

    this.clickEventsubscription2 = this.eventEmitterService.getClickEvent().subscribe(() => {
        this.itemService.getItems().subscribe(items => this.items = items);
  });
}

  refresh() {
    this.itemService.getItems().subscribe(items => this.items = items);
    this.addItem(this.eventEmitterService.getItemToPass());
  }
}
