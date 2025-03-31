import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { gql, request } from 'graphql-request';
import { uri } from '../../graphql/graphql.provider';

@Component({
  selector: 'app-view-employee',
  imports: [CommonModule, RouterLink],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  employee: any;

  constructor(private router: Router) {};

  async ngOnInit() {
    const employeeId: String = this.activatedRoute.snapshot.params["id"];

    await this.getEmployeeById(employeeId);
  }

  async getEmployeeById(employeeId: String) {
    let req: any;

    const document = gql`
      query GetEmployeeById($ID: ID!) {
        getEmployeeById(ID: $ID) {
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

    const variables = {
      ID: employeeId
    }

    req = await request(
      uri,
      document,
      variables
    );

    this.employee = req.getEmployeeById;

    return req;
  }
}
