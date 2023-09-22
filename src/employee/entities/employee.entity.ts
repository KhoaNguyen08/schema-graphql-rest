// src/employees/employee.entity.ts

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

@Entity('employee')
@ObjectType()
export class Employee {
    @PrimaryGeneratedColumn()
    @Field(() => ID)
    id: number;

    @Column()
    @Field()
    firstname: string;

    @Column()
    @Field()
    lastname: string;

    @Column()
    @Field()
    jobtitle: string;

    @Column()
    @Field()
    department: string;
}
