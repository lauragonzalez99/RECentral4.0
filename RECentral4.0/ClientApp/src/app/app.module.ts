import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { EmailPageComponent } from './email-page/email-page.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { CustomerContactFormComponent } from './customer-contact-form/customer-contact-form.component';
import { UpdateContactFormComponent } from './update-contact-form/update-contact-form.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    LoginComponent,
    CustomerDashboardComponent,
    EmployeeDashboardComponent,
    AdminDashboardComponent,
    ManageCustomersComponent,
    ManageEmployeesComponent,
    EmailPageComponent,
    TaskPageComponent,
    CustomerContactFormComponent,
    UpdateContactFormComponent,
    AddEmployeeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    /*RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
