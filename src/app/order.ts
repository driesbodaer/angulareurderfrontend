import {Itemgroup} from "./itemgroup";
import {Address} from "./address";

export interface Order {
  orderId: string;
   itemGroups: Itemgroup[];
  address: Address;
}
