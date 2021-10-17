import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity({name: "tb_role"})
export class Role {
    @PrimaryGeneratedColumn('uuid')
    row_role_id: string;

    @Column()
    role_code: string;
}
