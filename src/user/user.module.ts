// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from './user.entity'; // Đảm bảo đường dẫn đúng

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], // Đăng ký entity "User" và repository
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule { }
