import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../Services/apiservice.service'
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  constructor(private ApiService: APIServiceService,) { }
  //create an instance, pass it , submit -> send it back
  ngOnInit() {

  }

  employeeform = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    trainingStatus: new FormControl(1)
  })


  submit() {
    console.log(this.employeeform.value);
    this.ApiService.createEmployee(this.employeeform.value);
  }
}
