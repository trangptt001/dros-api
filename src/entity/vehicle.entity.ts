import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'tb_vehicle_info'})
export class Vehicle {
    @PrimaryGeneratedColumn('uuid')
    frame_row_id: string;

    @Column()
    customer_row_id: string;

    @Column()
    frame_id: string;

    @Column()
    engine_no: string;

    @Column()
    plate: string;

    @Column()
    model_category: string;

    @Column()
    warranty_start_date: Date;

    @Column()
    warramty_end_date: Date;

    @Column({type: "bigint"})
    warranty_expriry_km: number;

    @Column({type: "boolean"})
    is_cancel: boolean;

    @Column()
    updated_date: Date = new Date();

}