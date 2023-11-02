import { MigrationInterface, QueryRunner } from "typeorm";

export class ProductImage1698934470504 implements MigrationInterface {
    name = 'ProductImage1698934470504'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`descriptions\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD \`imageUrl\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`imageUrl\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP COLUMN \`descriptions\``);
    }

}
