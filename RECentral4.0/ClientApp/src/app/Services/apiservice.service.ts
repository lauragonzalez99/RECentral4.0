import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const BASE_URL = 'http://localhost:65234/'

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: HttpClient) { }

  getCustomersList() {
    return this.http.get<any[]>(BASE_URL + 'customers');
  }
  getEmployeesList() {
    return this.http.get<any[]>(BASE_URL + 'employees');
  }
  createEmployee(Employee): Observable<any>
  {
    JSON.stringify(Employee);
    return this.http.post(BASE_URL + 'employees', Employee);
  }

}
