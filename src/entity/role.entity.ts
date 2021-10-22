import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'tb_role' })
export class Role {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column()
    dros_role: string;

    @Column()
    created_date: Date;

    @Column()
    updated_date: Date;
}
