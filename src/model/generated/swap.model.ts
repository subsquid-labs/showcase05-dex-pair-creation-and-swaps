import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, ManyToOne as ManyToOne_} from "typeorm"
import * as marshal from "./marshal"
import {Pair} from "./pair.model"

@Entity_()
export class Swap {
    constructor(props?: Partial<Swap>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    block!: number

    @Index_()
    @ManyToOne_(() => Pair, {nullable: true})
    pair!: Pair

    @Index_()
    @Column_("text", {nullable: false})
    txnHash!: string

    @Index_()
    @Column_("text", {nullable: false})
    sender!: string

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount0In!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount1In!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount0Out!: bigint

    @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: false})
    amount1Out!: bigint

    @Index_()
    @Column_("text", {nullable: false})
    to!: string
}
