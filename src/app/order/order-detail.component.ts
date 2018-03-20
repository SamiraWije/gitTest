import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  id:number
  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params.subscribe(p=>{
      this.id = +p['oid']

    })
  }

}
