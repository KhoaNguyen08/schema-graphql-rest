import { Injectable } from '@nestjs/common';
import { EmployeeInput } from './dto/EmployeeInput.input';
import { Employee } from './entities/employee.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) { }

  async create(employeeInput: EmployeeInput) {
    var employee = new Employee();
    employee.firstname = employeeInput.firstname;
    employee.lastname = employeeInput.lastname;
    employee.jobtitle = employeeInput.jobtitle;
    employee.department = employeeInput.department;
    const newEmployee = this.employeeRepository.create(employee);
    return this.employeeRepository.save(newEmployee);
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findById(id: number): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { id: id } });
  }

  async update(id: number, employeeInput: EmployeeInput) {
    return this.employeeRepository.update(id, employeeInput);
  }

  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
