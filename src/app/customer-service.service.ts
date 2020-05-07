import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Customer} from "./customer";
import {Observable, of} from "rxjs";
import {catchError, tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // http://localhost:9000/customers
  constructor(private http: HttpClient) { }

  addCustomer(customer: Customer) {
    return this.http.post<Customer[]>('https://backend-eurder.herokuapp.com/customers', customer);
  }

  getCustomers() {
    return this.http.get<Customer[]>('https://backend-eurder.herokuapp.com/customers');
  }

  getCustomer(firstname: string) {
    return this.http.get<Customer>(`https://backend-eurder.herokuapp.com/customers/${firstname}`);
  }
  searchCustomer(firstname: string): Observable<Customer> {
    // if (!firstname.trim()) {
    //   // if not search term, return empty hero array.
    //   return of([]);
    // }

    return  this.http.get<Customer>(`https://backend-eurder.herokuapp.com/customers/${firstname}`);
      // .pipe(
      // tap(x => x.length ?
      //   this.log(`found heroes matching "${firstname}"`) :
      //   this.log(`no heroes matching "${firstname}"`)),
      //   catchError(this.handleError<Customer[]>('searchCustomer', []))
    // );
  }

  private log(s: string) {
    return undefined;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
