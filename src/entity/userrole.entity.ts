import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity({ name: 'tb_userrole' })
export class UserRole {
  @Column()
  role_id: string;

  @Column()
  user_id: string;

  @Column({ type: 'bit' })
  is_active: boolean;
}
