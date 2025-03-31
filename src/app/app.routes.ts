import { Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { DeleteEmployeeComponent } from './employee/delete-employee/delete-employee.component';
import { UpdateEmployeeComponent } from './employee/update-employee/update-employee.component';
import { ViewEmployeeComponent } from './employee/view-employee/view-employee.component';

export const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: "full"},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "employee", component: EmployeeComponent},
  {path: "employee/create-employee", component: CreateEmployeeComponent},
  {path: "employee/delete-employee/:id", component: DeleteEmployeeComponent},
  {path: "employee/update-employee/:id", component: UpdateEmployeeComponent},
  {path: "employee/view-employee/:id", component: ViewEmployeeComponent}
];
