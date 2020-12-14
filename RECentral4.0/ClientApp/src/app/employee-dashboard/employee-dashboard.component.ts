import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {
  public employees: Employees[];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Employees[]>(baseUrl + 'employees').subscribe(result => {
      this.employees = result;
      console.log(this.employees);
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}

interface Employees {
  Id: number;
  Name: String;
  Email: String;
  TrainingStatus: Number;
}
