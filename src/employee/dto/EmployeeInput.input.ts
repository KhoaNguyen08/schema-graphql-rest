// src/employees/dto/employee.input.ts

import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';
@InputType()
export class EmployeeInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    firstname: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    lastname: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    jobtitle: string;

    @Field()
    @IsNotEmpty()
    @IsString()
    department: string;
}
