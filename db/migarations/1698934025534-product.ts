import { MigrationInterface, QueryRunner } from "typeorm";

export class Product1698934025534 implements MigrationInterface {
    name = 'Product1698934025534'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`descriptions\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`descriptions\``);
    }

}
