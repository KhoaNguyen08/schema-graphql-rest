// database.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/user/user.entity';
import { Employee } from 'src/employee/entities/employee.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres', // Loại cơ sở dữ liệu
            host: 'localhost', // Địa chỉ máy chủ PostgreSQL
            port: 5432, // Cổng mặc định cho PostgreSQL
            username: 'postgres', // Tên người dùng PostgreSQL
            password: '123789', // Mật khẩu PostgreSQL
            database: 'postgres', // Tên cơ sở dữ liệu PostgreSQL
            entities: [UserEntity, Employee], // Danh sách các Entity
            synchronize: true, // Tạo bảng tự động (chỉ sử dụng trong môi trường phát triển)
        }),
    ],
})
export class DatabaseModule { }
