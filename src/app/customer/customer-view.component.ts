import { Component, OnInit } from '@angular/core';

import {Customer} from './customer';

import {CustomerViewService} from './customer-view.service';

//import {HttpClient, HttpHeaders} from '@angular/common/http';

//import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit {

   // myCustomer : Customer;
    allCustomer : Array<Customer> = new Array<Customer>();

  constructor(private cusService:CustomerViewService) {

    // this.myCustomer = new Customer("aaaa","ddd",22);
 
    // this.allCustomer.push(new Customer("bbb","eee",23));
    // this.allCustomer.push(new Customer("cccc","ffff",24));
    // this.allCustomer.push(new Customer("dddd","gggg",25));      
    
   }

  ngOnInit() {
    this.cusService.getCustomers().subscribe(data =>{
      this.allCustomer = data},
    err =>console.error(err),
    ()=>console.log('Loading Completed')
    
    );

  }

  viewCustomer() {
    //alert('You entered a customer');
  }

  remove(){
    this.allCustomer.pop();
  }

}
