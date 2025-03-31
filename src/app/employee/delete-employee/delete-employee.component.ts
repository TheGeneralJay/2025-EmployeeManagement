import { Component, inject, OnInit } from '@angular/core';
import { gql, request } from 'graphql-request';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { uri } from '../../graphql/graphql.provider';

@Component({
  selector: 'app-delete-employee',
  imports: [RouterLink],
  templateUrl: './delete-employee.component.html',
  styleUrl: './delete-employee.component.css'
})
export class DeleteEmployeeComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  employeeId: any;
  employee: any;

  constructor(private router: Router) {};

  async ngOnInit() {
    this.employeeId = this.activatedRoute.snapshot.params["id"];
    this.employee = this.getEmployeeById(this.employeeId);
  }

  async deleteEmployee(employeeId: String) {
    let req: any;
    console.log(employeeId);

    const document = gql`
      mutation DeleteEmployee($ID: ID!) {
        deleteEmployee(ID: $ID)
      }
    `

    const variables = {
      ID: employeeId
    };

    req = await request(
      uri,
      document,
      variables
    );

    if (req) {
      this.router.navigate(["/employee"]);
    }
  }

    async getEmployeeById(employeeId: String) {
      let req: any;

      const document = gql`
        query GetEmployeeById($ID: ID!) {
          getEmployeeById(ID: $ID) {
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
