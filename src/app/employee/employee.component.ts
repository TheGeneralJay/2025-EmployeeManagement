import { Component, Injectable, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee, EmployeeService } from './employee.service';

@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule, CommonModule],
  styleUrl: './employee.component.css',
  templateUrl: './employee.component.html'
})
@Injectable({providedIn: 'root'})
export class EmployeeComponent implements OnInit {
  // Registration info structure.
  // registerForm = new FormGroup({
  //   username: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // });

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {};

  async ngOnInit(): Promise<void> {
    await this.updateEmployees();
  }

  async updateEmployees() {
    const result = await this.employeeService.getEmployees();

    this.employees = result.getEmployees;
  }

  // Submit method.
  // handleSubmit() {
  //   // Build a user object to submit to the DB.
  //   // let newUser = {
  //   //   username: this.registerForm.value.username,
  //   //   email: this.registerForm.value.email,
  //   //   password: this.registerForm.value.password,
  //   //   createdAt: new Date().toDateString(),
  //   //   updatedAt: new Date().toDateString()
  //   // }

  //   // Logic to handle the submit goes here.
  // }

}
