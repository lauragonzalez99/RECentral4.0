import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIServiceService } from '../Services/apiservice.service'

@Component({
  selector: 'app-customer-contact-form',
  templateUrl: './customer-contact-form.component.html',
  styleUrls: ['./customer-contact-form.component.scss']
})
export class CustomerContactFormComponent implements OnInit {

  constructor(private ApiService: APIServiceService,) { }
  customers = [];
  ngOnInit(): void {

    this.ApiService.getCustomersList().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers)
      }
    )

  }

}
