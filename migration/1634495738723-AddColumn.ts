import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumn1634495738723 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn("tb_role", new TableColumn({
            name: "updated_by",
            type: "nvarchar"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
