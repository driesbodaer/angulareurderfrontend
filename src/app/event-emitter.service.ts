import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";
import {Item} from "./item";
import {Order} from "./order";

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  constructor() {
  }

  private subject = new Subject<any>();

  itemToPass: Item;
  orderToPass: Order;

  sendClickEvent(item: Item) {
    this.itemToPass = item;
    this.subject.next();
  }
  getClickEvent(): Observable<any>{
    return this.subject.asObservable();
  }

  setItemToPass(item: Item) {
    this.itemToPass = item;
  }

  getItemToPass() {
    return this.itemToPass;
  }

  setOrderToPas(order: Order) {
    this.orderToPass = order;
  }

  getOrderToPass() {
    return this.orderToPass;
  }
}
