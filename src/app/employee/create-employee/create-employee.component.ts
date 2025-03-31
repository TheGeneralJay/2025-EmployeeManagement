import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { gql, request } from 'graphql-request';
import { FormsModule, NgForm } from '@angular/forms';
import { NavbarComponent } from '../../navbar/navbar.component';
import { uri } from '../../graphql/graphql.provider';

@Component({
  selector: 'app-create-employee',
  imports: [NavbarComponent, FormsModule, RouterLink],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css'
})
export class CreateEmployeeComponent {
  constructor(private router: Router) {};

  async createEmployee(
    firstName: String,
    lastName: String,
    email: String,
    designation: String,
    salary: Number,
    dateOfJoining: String,
    department: String,
    employeePhoto: String,
    gender: String
  ) {
    // Mutation request for GQL.
    const document = gql`
      mutation CreateEmployee($employeeInput: EmployeeInput) {
        createEmployee(employeeInput: $employeeInput) {
          first_name
          last_name
          email
          designation
          salary
          date_of_joining
          department
          employee_photo
          created_at
          updated_at
          gender
        }
      }
    `
    // Assign variables to use with the request.
    const variables = {
      employeeInput: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        designation: designation,
        salary: salary,
        date_of_joining: dateOfJoining,
        department: department,
        employee_photo: employeePhoto,
        gender: gender
      }
    }

    // Build the request.
    const req = await request(
      uri,
      document,
      variables
    );

    return req;
  }

  async onSubmit(createEmployeeForm: NgForm) {
    const formInput = createEmployeeForm.form.value;
    const salaryInput = formInput["salary-input"];
    const salary = parseFloat(salaryInput); // Forces salary to be a float to avoid error.

    let newEmployee: any;
    let res: string;

    // Build the new employee from form inputs.
    newEmployee = await this.createEmployee(
      formInput["fName-input"],
      formInput["lName-input"],
      formInput["email-input"],
      formInput["designation-input"],
      salary,
      formInput["doj-input"],
      formInput["department-input"],
      formInput["photo-input"],
      formInput["gender-input"]
    );

    res = newEmployee;

    // If this works, navigate back to the employee list.
    if (res) {
      this.router.navigate(["/employee"]);
    }
  }
}
