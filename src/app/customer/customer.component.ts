import { Component, OnInit } from '@angular/core';
import {Customer} from "../customer";
import {CustomerService} from "../customer-service.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) { }

  searchtext: string;
  customers: Customer[];
  customers$: Observable<Customer[]>;
  customersREAL$: Observable<Customer[]>;

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
    this.customers$ = this.customerService.getCustomers();

  }

  onInput(firstname: string) {
    this.customersREAL$ = this.customers$.pipe(map(x => x.filter( y => y.firstname ===  firstname.toLowerCase())));
  }
}
