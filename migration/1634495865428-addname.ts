import {MigrationInterface, QueryRunner} from "typeorm";

export class addname1634495865428 implements MigrationInterface {
    name = 'addname1634495865428'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tb_role\` DROP COLUMN \`role_name\``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tb_role\` ADD \`role_name\` varchar(255) CHARACTER SET "utf8" COLLATE "utf8_general_ci" NOT NULL`);
    }

}
