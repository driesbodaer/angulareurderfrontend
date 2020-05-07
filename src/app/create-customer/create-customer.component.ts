import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../customer-service.service";
import {Customer} from "../customer";
import {Observable} from "rxjs";
import {Address} from "../address";
import {Email} from "../email";
import {phonenumber} from "../phonenumber";

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  constructor(private customerService: CustomerService) {
  }

  iets;

  ngOnInit(): void {
  }

  addC(firstname1: string, lastname1: string, streetName1: string, postalCode1: string, houseNumber1: string, country1: string) {
    this.customerService.addCustomer(
      {
        firstname: firstname1,
        lastname: lastname1,
        address: {
          streetName: streetName1,
          postalCode: postalCode1,
          houseNumber: houseNumber1,
          country: country1
        } as Address,
        phoneNumber: {
          number: 'string',
          countryCallingCode: 'string'
        } as phonenumber,
        email: {
          localPart: 'string',
          domain: 'd',
          complete: 'd'
        } as Email

      } as Customer
    ).subscribe(x => this.iets = x);
  }
}
