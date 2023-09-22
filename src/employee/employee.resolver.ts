// src/employees/employees.resolver.ts

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Employee } from './entities/employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeInput } from './dto/EmployeeInput.input';

@Resolver('employee')
export class EmployeesResolver {
  constructor(private readonly employeeService: EmployeeService) { }

  @Query('getEmployees')
  async getEmployees() {
    return this.employeeService.findAll();
  }

  @Query('getEmployee')
  async getEmployee(@Args('id') id: number) {
    return this.employeeService.findById(id);
  }

  @Mutation('createEmployee')
  async createEmployee(@Args('employeeInput') employeeInput: EmployeeInput) {
    return this.employeeService.create(employeeInput);
  }

  @Mutation('updateEmployee')
  async updateEmployee(@Args('id') id: number, @Args('employeeInput') employeeInput: EmployeeInput) {
    return this.employeeService.update(id, employeeInput);
  }

  @Mutation('removeEmployee')
  async removeEmployee(@Args('id') id: number) {
    return this.employeeService.remove(id);
  }
}
