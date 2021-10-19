import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { Repository } from 'typeorm';
import { UserSignUp } from './user.interface';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ){}

    findOne(userName: string): Promise<User> {
        return this.userRepository.findOne({where: {user_name: userName}})
    }

    createOne(user: UserSignUp): User | null {
        // let model = new User(){
        //     ...user,

        // }
        // return this.userRepository.create(model);
        return null;
    }
}
