import {MigrationInterface, QueryRunner} from "typeorm";

export class test1628185631606 implements MigrationInterface {
    name = 'test1628185631606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "login" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "UQ_a62473490b3e4578fd683235c5e" UNIQUE ("login"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "role" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, CONSTRAINT "UQ_ae4578dcaed5adff96595e61660" UNIQUE ("name"), CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user_roles_role" ("userId" integer NOT NULL, "roleId" integer NOT NULL, CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2"`);
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "role" ADD "id" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_b47cd6c84ee205ac5a713718292"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_4be2f7adf862634f5f803d246b8" PRIMARY KEY ("roleId")`);
        await queryRunner.query(`DROP INDEX "IDX_5f9286e6c25594c6b88c108db7"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD "userId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_4be2f7adf862634f5f803d246b8"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("roleId", "userId")`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_b47cd6c84ee205ac5a713718292"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_5f9286e6c25594c6b88c108db77" PRIMARY KEY ("userId")`);
        await queryRunner.query(`DROP INDEX "IDX_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD "roleId" uuid NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_5f9286e6c25594c6b88c108db77"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId")`);
        await queryRunner.query(`CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `);
        await queryRunner.query(`CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_5f9286e6c25594c6b88c108db77" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "FK_4be2f7adf862634f5f803d246b8" FOREIGN KEY ("roleId") REFERENCES "role"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_4be2f7adf862634f5f803d246b8"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "FK_5f9286e6c25594c6b88c108db77"`);
        await queryRunner.query(`DROP INDEX "IDX_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`DROP INDEX "IDX_5f9286e6c25594c6b88c108db7"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_b47cd6c84ee205ac5a713718292"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_5f9286e6c25594c6b88c108db77" PRIMARY KEY ("userId")`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP COLUMN "roleId"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD "roleId" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_4be2f7adf862634f5f803d246b" ON "user_roles_role" ("roleId") `);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_5f9286e6c25594c6b88c108db77"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("roleId", "userId")`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_b47cd6c84ee205ac5a713718292"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_4be2f7adf862634f5f803d246b8" PRIMARY KEY ("roleId")`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD "userId" integer NOT NULL`);
        await queryRunner.query(`CREATE INDEX "IDX_5f9286e6c25594c6b88c108db7" ON "user_roles_role" ("userId") `);
        await queryRunner.query(`ALTER TABLE "user_roles_role" DROP CONSTRAINT "PK_4be2f7adf862634f5f803d246b8"`);
        await queryRunner.query(`ALTER TABLE "user_roles_role" ADD CONSTRAINT "PK_b47cd6c84ee205ac5a713718292" PRIMARY KEY ("userId", "roleId")`);
        await queryRunner.query(`ALTER TABLE "role" DROP CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2"`);
        await queryRunner.query(`ALTER TABLE "role" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "role" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "role" ADD CONSTRAINT "PK_b36bcfe02fc8de3c57a8b2391c2" PRIMARY KEY ("id")`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "PK_cace4a159ff9f2512dd42373760"`);
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "id"`);
        await queryRunner.query(`ALTER TABLE "user" ADD "id" SERIAL NOT NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id")`);
        await queryRunner.query(`DROP INDEX "IDX_4be2f7adf862634f5f803d246b"`);
        await queryRunner.query(`DROP INDEX "IDX_5f9286e6c25594c6b88c108db7"`);
        await queryRunner.query(`DROP TABLE "user_roles_role"`);
        await queryRunner.query(`DROP TABLE "role"`);
        await queryRunner.query(`DROP TABLE "user"`);
    }

}
