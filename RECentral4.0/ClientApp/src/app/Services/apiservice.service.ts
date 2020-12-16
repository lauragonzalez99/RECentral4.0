import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'


const BASE_URL = 'http://localhost:65234/'

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http: HttpClient) { }

  getCustomersList() {
    return this.http.get<any[]>(BASE_URL + 'customers');
  }

}
