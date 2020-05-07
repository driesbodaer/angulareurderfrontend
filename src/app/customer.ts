import {Address} from "./address";
import {phonenumber} from "./phonenumber";
import {Email} from "./email";

export interface Customer {
   firstname: string;
  lastname: string;
  address: Address;
  phoneNumber: phonenumber;
  email: Email;
}
