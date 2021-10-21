import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
import { UserRole } from 'src/entity/userrole.entity';
import { createQueryBuilder, getManager, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findOne(userName: string): Promise<User> {
    const result = createQueryBuilder<User>()
      .select('user')
      .from(User, 'user')
      .leftJoinAndSelect(UserRole, 'userrole', 'userrole.userId = user.id')
      .where('user.username = :userName', { username: userName })
      .getOne();
    return result;
  }

  async createOne(user: User): Promise<User | null> {
    try {
      console.log(user, 'user');
      const data = await this.userRepository.create(user);
      const result = this.userRepository.save(data);
      return result;
    } catch (error) {
      throw error;
    }
  }
}
