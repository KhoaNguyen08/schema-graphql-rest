// user.entity.ts
import { text } from 'node:stream/consumers';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 15 })
    username: string;

    @Column({ length: 50 })
    email: string;

    @Column({ length: 12 })
    password: string;
}
