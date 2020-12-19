import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIServiceService } from '../Services/apiservice.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-customer-contact-form',
  templateUrl: './customer-contact-form.component.html',
  styleUrls: ['./customer-contact-form.component.scss']
})
export class CustomerContactFormComponent implements OnInit {

  constructor(private ApiService: APIServiceService, private route: ActivatedRoute, private router: Router) { }
  customers = [];
  date = new Date();

  customerform = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    JoinDate: new FormControl(this.date),
    PropertyType: new FormControl('', Validators.required)
  })

  Submit() {
    console.log(this.customerform.valid)
    if (this.customerform.valid) {
      this.ApiService.createCustomer(this.customerform.value).subscribe()
      this.router.navigate(['manage-customers']);
    }
  }

  ngOnInit(): void {
  

  }

}
