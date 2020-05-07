import {Injectable} from '@angular/core';
import {Item} from "./item";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private http: HttpClient)
  { }

  private itemsUrl = 'https://backend-eurder.herokuapp.com/items';


  getItems() {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getItem(name: string) {
    return this.http.get<Item>(`https://backend-eurder.herokuapp.com/items/${name}`);
  }

  addItem(item: Item ) {
    return this.http.post<Item>(`https://backend-eurder.herokuapp.com/items`, item);
  }

  updateItem(item: Item ) {
    return this.http.put<Item>(`https://backend-eurder.herokuapp.com/${item.name}`, item);
  }
}
