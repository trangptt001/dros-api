import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    findOne(userName: string): Promise<User> {
        return this.userRepository.findOne({where: {user_name: userName}})
    }

    async createOne(user: User): Promise<User | null> {
        try{
            console.log(user)
            const data = await this.userRepository.create(user);
            const result = this.userRepository.save(data);
            return result;
        }
        catch(error){
            throw error;
        }
    }
}
