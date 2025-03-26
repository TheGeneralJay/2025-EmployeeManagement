import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '101443253_comp3133_assig2';
}
