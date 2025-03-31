import { Component, inject, OnInit } from '@angular/core';
import { RouterLink, Router, ActivatedRoute } from '@angular/router';
import { gql, request } from 'graphql-request';
import { FormsModule, NgForm } from '@angular/forms';
import { uri } from '../../graphql/graphql.provider';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule, RouterLink],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  employeeId: any;

  constructor(private router: Router) {};

  async ngOnInit() {
    this.employeeId = this.activatedRoute.snapshot.params["id"];
  }

  async updateEmployee(employeeId: String, updateInput: any) {
    const document = gql`
      mutation UpdateEmployee($ID: ID!, $updateEmployeeInput: UpdateEmployeeInput) {
        updateEmployee(
          ID: $ID,
          updateEmployeeInput: $updateEmployeeInput
        )
      }
    `

    const variables = {
      ID: employeeId,
      updateEmployeeInput: updateInput
    }

    const req = await request(
      uri,
      document,
      variables
    );

    return req;
  }

  // If the input given is not null or blank, we are updating this value.
  isChanging(input: any) {

    if (input === null || input === "") {
      return false;
    } else {
      return true;
    }
  }

  async onSubmit(updateEmployeeForm: NgForm) {
    const formInput = updateEmployeeForm.form.value;

    let updatedEmployee: any = {};
    let update: any;
    let res: string;

    // Only update values that are changing within the form.
    if (this.isChanging(formInput["fName-input"])) {
      updatedEmployee.first_name = formInput["fName-input"];
    }

    if (this.isChanging(formInput["lName-input"])) {
      updatedEmployee.last_name = formInput["lName-input"];
    }

    if (this.isChanging(formInput["email-input"])) {
      updatedEmployee.email = formInput["email-input"];
    }

    if (this.isChanging(formInput["designation-input"])) {
      updatedEmployee.designation = formInput["designation-input"];
    }

    if (this.isChanging(formInput["salary-input"])) {
      const salaryInput = formInput["salary-input"];
      const salary = parseFloat(salaryInput);
      updatedEmployee.salary = salary;
    }

    if (this.isChanging(formInput["department-input"])) {
      updatedEmployee.department = formInput["department-input"];
    }

    if (this.isChanging(formInput["photo-input"])) {
      updatedEmployee.employee_photo = formInput["photo-input"];
    }

    if (this.isChanging(formInput["gender-input"])) {
      updatedEmployee.gender = formInput["gender-input"];
    }

    update = await this.updateEmployee(this.employeeId, updatedEmployee);

    res = update;

    if (res) {
      this.router.navigate(["/employee"]);
    }
  }
}
