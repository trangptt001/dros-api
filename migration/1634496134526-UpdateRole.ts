import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class UpdateRole1634496134526 implements MigrationInterface {
    name = 'UpdateRole1634496134526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('tb_role', new TableColumn({
            name: "role_name",
            type: "nvarchar"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
