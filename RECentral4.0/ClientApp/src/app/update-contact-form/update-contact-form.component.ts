import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIServiceService } from '../Services/apiservice.service'
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-update-contact-form',
  templateUrl: './update-contact-form.component.html',
  styleUrls: ['./update-contact-form.component.scss']
})
export class UpdateContactFormComponent implements OnInit {

  constructor(private ApiService: APIServiceService, private route: ActivatedRoute, private router: Router) { }

  customer = [];
  customerform = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    joinDate: new FormControl(),
    propertyType: new FormControl('', Validators.required)
  })

  Submit(id) {
    console.log(this.customerform.value)
    console.log(id)
    this.ApiService.updateCustomer(id, this.customerform.value).subscribe();
    this.router.navigate(['/manage-customers']);
  }
  
  ngOnInit(): void {

    let id = parseInt(this.route.snapshot.paramMap.get("id"))
    this.ApiService.getCustomerById(id).subscribe(
      data => {
        console.log(data)
        this.customer = data;
        this.customerform.patchValue(data);
        console.log(this.customer)
      }
    )

  }

}

interface Customer {
  email: String,
  id: number,
  joinDate: Date,
  name: String,
  notes: String,
  phone: String,
  propertyType: String
}
