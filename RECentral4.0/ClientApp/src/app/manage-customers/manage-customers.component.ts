import { Component, OnInit, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage-customers',
  templateUrl: './manage-customers.component.html',
  styleUrls: ['./manage-customers.component.scss']
})
export class ManageCustomersComponent implements OnInit {


  //customers = [
  //  { Name: "John Cena", JoinDate: "2020-09-18", Phone: '416-272-4332', PropertyType: 'Commercial' },
  //  { Name: "Alex Moreno", JoinDate: "2020-10-14", Phone: '416-812-4332', PropertyType: 'Commercial' },
  //  { Name: "Dan Avadan", JoinDate: "2020-10-17", Phone: '416-412-9332', PropertyType: 'Commercial' },
  //  { Name: "Kelly Clarckson", JoinDate: "2020-11-18", Phone: '496-412-4332', PropertyType: 'Commercial' },
  //  { Name: "Donald Duck", JoinDate: "2020-12-11", Phone: '436-512-4732', PropertyType: 'Commercial' },
  //  { Name: "Donald Duck", JoinDate: "2020-12-11", Phone: '436-512-4732', PropertyType: 'Commercial' },
  //  { Name: "Donald Duck", JoinDate: "2020-12-11", Phone: '436-512-4732', PropertyType: 'Commercial' },
  //]
  public customers: Customers[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Customers[]>(baseUrl + 'customers').subscribe(result => {
      this.customers = result;
      console.log(this.customers);
    }, error => console.error(error));
  }

  ngOnInit(): void {
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
