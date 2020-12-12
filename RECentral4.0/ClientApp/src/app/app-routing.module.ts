import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CustomerContactFormComponent } from './customer-contact-form/customer-contact-form.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { EmailPageComponent } from './email-page/email-page.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { LoginComponent } from './login/login.component';
import { ManageCustomersComponent } from './manage-customers/manage-customers.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { TaskPageComponent } from './task-page/task-page.component';
import { UpdateContactFormComponent } from './update-contact-form/update-contact-form.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'employee', component: EmployeeDashboardComponent },
  { path: 'customer', component: CustomerDashboardComponent },
  { path: 'manage-customers', component: ManageCustomersComponent },
  { path: 'add-customer', component: CustomerContactFormComponent },
  { path: 'edit-customer', component: UpdateContactFormComponent },
  { path: 'manage-employees', component: ManageEmployeesComponent },
  { path: 'email', component: EmailPageComponent },
  { path: 'tasks', component: TaskPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
