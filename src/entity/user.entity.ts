import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
@Entity({name: "tb_user"})
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_name: string;
    
    @Column()
    password: string;

    @Column()
    refresh_token: string;

    @Column({default: true})
    is_active: boolean;
    
    @Column()
    time_password_expired: Date
}