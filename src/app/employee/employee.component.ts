import { Component, Injectable, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Employee, EmployeeService } from './employee.service';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule, CommonModule, RouterLink],
  styleUrl: './employee.component.css',
  templateUrl: './employee.component.html'
})
@Injectable({providedIn: 'root'})
export class EmployeeComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {};

  async ngOnInit(): Promise<void> {
    await this.updateEmployees();
  }

  async updateEmployees() {
    const result = await this.employeeService.getEmployees();

    this.employees = result.getEmployees;
  }
}
