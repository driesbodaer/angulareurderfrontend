import {Injectable} from '@angular/core';
import {Item} from "./item";
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor( private http: HttpClient)
  { }

  private itemsUrl = 'http://localhost:9000/items';


  getItems() {
    return this.http.get<Item[]>(this.itemsUrl);
  }

  getItem(name: string) {
    return this.http.get<Item>(`http://localhost:9000/items/${name}`);
  }

  addItem(item: Item ) {
    return this.http.post<Item>(`http://localhost:9000/items`, item);
  }

  updateItem(item: Item ) {
    return this.http.put<Item>(`http://localhost:9000/items/${item.name}`, item);
  }
}
