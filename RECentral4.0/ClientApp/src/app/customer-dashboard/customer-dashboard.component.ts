import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { APIServiceService } from "../Services/apiservice.service";

@Component({
  selector: 'app-customer-dashboard',
  templateUrl: './customer-dashboard.component.html',
  styleUrls: ['./customer-dashboard.component.scss']
})
export class CustomerDashboardComponent implements OnInit {

  constructor(private route: ActivatedRoute, private apiService: APIServiceService) { }

  custData = []
  userFiles = []

  ngOnInit(): void {

    let id = parseInt(this.route.snapshot.paramMap.get("id"))
    this.apiService.getCustomerById(id).subscribe(

      data => {

        this.custData = data;
        console.log(this.custData)

      })
    this.apiService.getUserFiles().subscribe(
      data => {
        console.log(data)
        this.userFiles = data.filter(function (file) { return file.customerID == id; })
        console.log(data.filter(function (file) { return file.customerID == id; }))
        console.log(this.userFiles)
      }
    )
  }

}
