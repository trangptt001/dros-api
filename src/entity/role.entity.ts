import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "tb_role"})
export class Role {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    role_code: string;

    @Column()
    role_name: string;
}
