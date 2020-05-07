import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ItemService} from "../item.service";
import {Location} from "@angular/common";
import {CustomerService} from "../customer-service.service";
import {Customer} from "../customer";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private location: Location) { }

  ngOnInit(): void {
    this.getCustomer();
  }

  @Input()
  customer: Customer;

  getCustomer() {
    const firstname = this.route.snapshot.paramMap.get('firstname');
    this.customerService.getCustomer(firstname).subscribe(customer => this.customer = customer);
    // this.item = this.items.find(item => item.name === name);
  }

  goBack(): void {
    this.location.back();
  }

}
