import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, Index as Index_, OneToMany as OneToMany_} from "typeorm"
import {Swap} from "./swap.model"

@Entity_()
export class Pair {
    constructor(props?: Partial<Pair>) {
        Object.assign(this, props)
    }

    @PrimaryColumn_()
    id!: string

    @Index_()
    @Column_("int4", {nullable: false})
    createdAtHeight!: number

    @Index_()
    @Column_("text", {nullable: false})
    createdByFactory!: string

    @Index_()
    @Column_("text", {nullable: false})
    createdWithTxn!: string

    @Index_()
    @Column_("text", {nullable: false})
    address!: string

    @Index_()
    @Column_("text", {nullable: false})
    token0!: string

    @Index_()
    @Column_("text", {nullable: false})
    token1!: string

    @OneToMany_(() => Swap, e => e.pair)
    swaps!: Swap[]
}
