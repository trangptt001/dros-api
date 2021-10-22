import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({name: "tb_user_role"})
export class UserRole{
    @Column()
    role_id: string;

    @Column()
    user_id: string;

    @Column({type: "bit"})
    active: boolean;

    @Column()
    created_date: Date;

    @Column()
    updated_date: Date;
}
