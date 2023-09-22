// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity'; // Đảm bảo đường dẫn đúng
import { CreateUserDto, UpdateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) { }

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async findOne(id: number): Promise<UserEntity | undefined> {
        return await this.userRepository.findOne({ where: { id: id } });
    }

    async create(createUserDto: CreateUserDto): Promise<UserEntity> {
        const newUser = this.userRepository.create(createUserDto);
        return await this.userRepository.save(newUser);
    }

    async update(id: number, updateUserDto: UpdateUserDto): Promise<UserEntity | undefined> {
        await this.userRepository.update(id, updateUserDto);
        return await this.userRepository.findOne({ where: { id: id } });
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }
}
