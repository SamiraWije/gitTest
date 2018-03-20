import { Injectable } from '@angular/core';
import {Customer} from './customer';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class CustomerViewService {

  constructor(private client:HttpClient) { }

    getCustomers() :any {
      return this.client.get('http://localhost:8080/training-api/api/employee');
    }
   

}
