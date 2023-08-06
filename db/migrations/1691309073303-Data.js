module.exports = class Data1691309073303 {
    name = 'Data1691309073303'

    async up(db) {
        await db.query(`CREATE TABLE "swap" ("id" character varying NOT NULL, "block" integer NOT NULL, "txn_hash" text NOT NULL, "sender" text NOT NULL, "amount0_in" numeric NOT NULL, "amount1_in" numeric NOT NULL, "amount0_out" numeric NOT NULL, "amount1_out" numeric NOT NULL, "to" text NOT NULL, "pair_id" character varying, CONSTRAINT "PK_4a10d0f359339acef77e7f986d9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_a5de7c44bab5e218881c89ab24" ON "swap" ("block") `)
        await db.query(`CREATE INDEX "IDX_3571ab1dad7640a6b93c705b8f" ON "swap" ("pair_id") `)
        await db.query(`CREATE INDEX "IDX_cc4d589221d9b238c158fcdd49" ON "swap" ("txn_hash") `)
        await db.query(`CREATE INDEX "IDX_868ed751463d0c0e22961ac8d4" ON "swap" ("sender") `)
        await db.query(`CREATE INDEX "IDX_24569944ba7a0eb0cf12d51a15" ON "swap" ("to") `)
        await db.query(`CREATE TABLE "pair" ("id" character varying NOT NULL, "created_at_height" integer NOT NULL, "created_by_factory" text NOT NULL, "created_with_txn" text NOT NULL, "address" text NOT NULL, "token0" text NOT NULL, "token1" text NOT NULL, CONSTRAINT "PK_3eaf216329c5c50aedb94fa797e" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_da050562939585d9265406a4f2" ON "pair" ("created_at_height") `)
        await db.query(`CREATE INDEX "IDX_544f02b7d43dc0218699a36f81" ON "pair" ("created_by_factory") `)
        await db.query(`CREATE INDEX "IDX_bd08dd3ca284815f78b41d9bd0" ON "pair" ("created_with_txn") `)
        await db.query(`CREATE INDEX "IDX_e94d9758e09e21b9daaad99eae" ON "pair" ("address") `)
        await db.query(`CREATE INDEX "IDX_750e22204daa7f64f144187a76" ON "pair" ("token0") `)
        await db.query(`CREATE INDEX "IDX_c4f41f20b6f10e5c4066d45f08" ON "pair" ("token1") `)
        await db.query(`ALTER TABLE "swap" ADD CONSTRAINT "FK_3571ab1dad7640a6b93c705b8f7" FOREIGN KEY ("pair_id") REFERENCES "pair"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "swap"`)
        await db.query(`DROP INDEX "public"."IDX_a5de7c44bab5e218881c89ab24"`)
        await db.query(`DROP INDEX "public"."IDX_3571ab1dad7640a6b93c705b8f"`)
        await db.query(`DROP INDEX "public"."IDX_cc4d589221d9b238c158fcdd49"`)
        await db.query(`DROP INDEX "public"."IDX_868ed751463d0c0e22961ac8d4"`)
        await db.query(`DROP INDEX "public"."IDX_24569944ba7a0eb0cf12d51a15"`)
        await db.query(`DROP TABLE "pair"`)
        await db.query(`DROP INDEX "public"."IDX_da050562939585d9265406a4f2"`)
        await db.query(`DROP INDEX "public"."IDX_544f02b7d43dc0218699a36f81"`)
        await db.query(`DROP INDEX "public"."IDX_bd08dd3ca284815f78b41d9bd0"`)
        await db.query(`DROP INDEX "public"."IDX_e94d9758e09e21b9daaad99eae"`)
        await db.query(`DROP INDEX "public"."IDX_750e22204daa7f64f144187a76"`)
        await db.query(`DROP INDEX "public"."IDX_c4f41f20b6f10e5c4066d45f08"`)
        await db.query(`ALTER TABLE "swap" DROP CONSTRAINT "FK_3571ab1dad7640a6b93c705b8f7"`)
    }
}
