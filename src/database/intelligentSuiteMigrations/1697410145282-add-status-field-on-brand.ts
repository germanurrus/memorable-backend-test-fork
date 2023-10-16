import {MigrationInterface, QueryRunner} from "typeorm";

export class addStatusFieldOnBrand1697410145282 implements MigrationInterface {
    name = 'addStatusFieldOnBrand1697410145282'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`brand\` ADD \`status\` enum ('IN_PROGRESS', 'DATA_READY', 'MODEL_TRAINING', 'READY') NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`brand\` DROP COLUMN \`status\``);
    }

}
