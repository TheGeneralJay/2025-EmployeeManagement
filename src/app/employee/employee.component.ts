import { Component, Injectable, OnInit } from '@angular/core';
import { gql, request } from 'graphql-request';
import { CommonModule } from '@angular/common';
import { RouterLink, Router } from '@angular/router';
import { uri } from '../graphql/graphql.provider';

@Component({
  selector: 'app-employee',
  imports: [CommonModule, RouterLink],
  styleUrl: './employee.component.css',
  templateUrl: './employee.component.html'
})
@Injectable({providedIn: 'root'})
export class EmployeeComponent implements OnInit {
  employees: any;

  constructor(private router: Router) {};

  async ngOnInit() {
    await this.getAllEmployees();
  }

  async getAllEmployees() {
    let req: any;

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

    req = await request(
      uri,
      document
    );

    this.employees = req.getEmployees;
    return req;
  }
}
