import { Component, Injectable, OnInit } from '@angular/core';
import { gql, request } from 'graphql-request';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { uri } from '../graphql/graphql.provider';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [NavbarComponent, CommonModule, RouterLink, FormsModule],
  styleUrl: './employee.component.css',
  templateUrl: './employee.component.html'
})
@Injectable({providedIn: 'root'})
export class EmployeeComponent implements OnInit {
  employees: any;

  constructor(private router: Router) {};

  async ngOnInit() {
    // On init, get all employees so that they display in the page.
    await this.getAllEmployees();
  }

  async getAllEmployees() {
    let req: any;

    // Query for the GQL request.
    const document = gql`
      query GetEmployees {
        getEmployees {
          _id
          first_name
          last_name
          email
          gender
          designation
          salary
          date_of_joining
          department
          employee_photo
          created_at
          updated_at
        }
      }
    `
    // Request builder.
    req = await request(
      uri,
      document
    );

    this.employees = req.getEmployees;
    return req;
  }

  async getEmployeeByDesc(desigOrDept: String) {
    let req: any;

    const document = gql`
      query GetEmployeeByDesc($designationOrDepartment: String!) {
        getEmployeeByDesc(designationOrDepartment: $designationOrDepartment) {
          _id
          first_name
          last_name
          email
          department
        }
      }
    `
    const variables = {
      designationOrDepartment: desigOrDept
    }

    req = await request(
      uri,
      document,
      variables
    );

    this.employees = req.getEmployeeByDesc;
    return req;
  }

  async onSubmit(search: NgForm) {
    const formInput = search.form.value;

    let filter: any;
    let res: string;

    filter = await this.getEmployeeByDesc(formInput["search-input"]);
    res = filter;
  }
}
