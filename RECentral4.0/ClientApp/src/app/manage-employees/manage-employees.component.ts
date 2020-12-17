import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../Services/apiservice.service'

@Component({
  selector: 'app-manage-employees',
  templateUrl: './manage-employees.component.html',
  styleUrls: ['./manage-employees.component.scss']
})
export class ManageEmployeesComponent implements OnInit {
  employees = []
  constructor(private ApiService: APIServiceService,) { }

  ngOnInit(): void {
    this.ApiService.getEmployeesList().subscribe(
      data => {
        this.employees = data;
        console.log(this.employees)
      }
    )
  }

}
