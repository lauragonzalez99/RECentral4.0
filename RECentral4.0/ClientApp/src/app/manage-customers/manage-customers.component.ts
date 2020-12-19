import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
import { APIServiceService } from '../Services/apiservice.service'

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {

  public customers: Customers[];

  constructor(private ApiService: APIServiceService, private route: ActivatedRoute, private router: Router) { }

  nextPage(id) {
    this.router.navigate(['edit-customer/' + id]);

  }

  ngOnInit(): void {
    this.ApiService.getCustomersList().subscribe(
      data => {
        this.customers = data;
        console.log(this.customers)
      }
    )
  }

}

interface Customers {
  Id: number;
  Notes: String;
  Name: String;
  Email: String;
  Phone: String;
  JoinDate: Date;
  PropertyType: String;

}
