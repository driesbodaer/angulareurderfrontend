import { Component, OnInit } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {ItemService} from "../item.service";
import {Item} from "../item";
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {
  debounceTime, distinctUntilChanged, map, switchMap
} from 'rxjs/operators';


@Component({
  selector: 'app-item-search2',
  templateUrl: './item-search2.component.html',
  styleUrls: ['./item-search2.component.css']
})
export class ItemSearch2Component implements OnInit {

  filteredItems$: Observable<Item[]>;
  filteredItemsreal$: Observable<Item[]>;
  name: string;
  // private searchTerms = new Subject<string>();

  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    // this.filteredItems$ = this.searchTerms.pipe(
    //   // wait 300ms after each keystroke before considering the term
    //   debounceTime(300),
    //
    //   // ignore new term if same as previous term
    //   distinctUntilChanged(),
    //
    //   // switch to new search observable each time the term changes
    //   switchMap((term: string) => this.heroService.searchHeroes(term)),
    // );

    this.filteredItems$ =  this.itemService.getItems();
  }

  onInput() {
    this.filteredItemsreal$ = this.filteredItems$.pipe(map(x => x.filter( y => y.name ===  this.name)));
  }
}
