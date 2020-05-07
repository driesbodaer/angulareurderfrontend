import {Injectable} from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {Order} from "./order";
import {Item} from "./item";
import {Itemgroup} from "./itemgroup";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) {
  }

  basketlist: Itemgroup[] = [];
  itemgroupToAdd: Itemgroup;

  getOrders() {
    return this.http.get('http://localhost:9000/orders');
  }

  addOrder(order: Order) {
    return this.http.post('http://localhost:9000/orders', order);
  }


  addTobasket(itemtoadd: Item) {
    if (this.basketlist.map(x => x.item).indexOf(itemtoadd) !== -1) {
      this.basketlist.find(x => x.item === itemtoadd).orderedAmount = this.basketlist.find(x => x.item === itemtoadd).orderedAmount + 1;
    } else {
      this.itemgroupToAdd = {
        item: itemtoadd,
        orderedAmount: 1
      };
      this.basketlist.push(this.itemgroupToAdd);
    }
  }

  get getbasketlist(): Itemgroup[] {
    return this.basketlist;
  }

  placeorder(order: Order) {
    // this.http.post(this.)
  }
}
