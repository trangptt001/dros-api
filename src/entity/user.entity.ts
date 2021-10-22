import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Role } from './role.entity';
@Entity({ name: 'tb_user' })
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  phonenumber: string;

  @Column()
  refresh_token: string;

  @Column({ default: true })
  is_active: boolean;

  @Column()
  time_password_expired: Date;

  @ManyToMany(() => Role)
  @JoinTable({
    name: 'tb_user_role',
    joinColumn: { name: 'userId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'roleId', referencedColumnName: 'id' },
  })
  roles: Role[];
}
