// import { Injectable } from '@angular/core';
// import { Apollo, gql, QueryRef } from 'apollo-angular';

// export interface Employee {
//   first_name: string;
//   last_name: string;
//   email: string;
//   gender: string;
//   designation: string;
//   salary: number;
//   date_of_joining: string;
//   department: string;
//   employee_photo: string;
//   createdAt: string;
//   updatedAt: string;
// }

// export interface AllEmployees {
//   getEmployees: Employee[];
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class EmployeeService {

//   // private employeesQuery: QueryRef<AllEmployees>;

//   // constructor(private apollo: Apollo) {
//   //   this.employeesQuery = this.apollo.watchQuery({
//   //     query: gql`
//   //       query GetEmployees {
//   //         getEmployees{
//   //           first_name
//   //           last_name
//   //           email
//   //           gender
//   //           designation
//   //           salary
//   //           date_of_joining
//   //           department
//   //           employee_photo
//   //           created_at
//   //           updated_at
//   //         }
//   //       }
//   //     `
//   //   });
//   // }

//   // async getEmployees(): Promise<AllEmployees> {
//   //   const result = await this.employeesQuery.refetch();
//   //   console.log(result.data); ///KEEP THIS
//   //   return result.data;
//   // }
// }
