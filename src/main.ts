import {TypeormDatabase} from '@subsquid/typeorm-store'
import {Pair, Swap} from './model'
import {processor, FACTORY_ADDRESSES} from './processor'
import * as factoryv2abi from './abi/factoryv2'
import * as pairabi from './abi/pair'

processor.run(new TypeormDatabase({supportHotBlocks: false}), async (ctx) => {
    const oldPairsArray: Pair[] = await ctx.store.find(Pair)
    const pairs: Map<string,Pair> = new Map(oldPairsArray.map(p => [p.address, p]))
    const newPairs: Pair[] = []
    const swaps: Swap[] = []

    for (let block of ctx.blocks) {
        for (let log of block.logs) {
            if (FACTORY_ADDRESSES.includes(log.address) && log.topics[0] === factoryv2abi.events.PairCreated.topic) {
                let {token0, token1, pair} = factoryv2abi.events.PairCreated.decode(log)
                let address = pair.toLowerCase()
                let newPair = new Pair({
                    id: log.id,
                    createdAtHeight: block.header.height,
                    createdByFactory: log.address,
                    createdWithTxn: log.transactionHash,
                    address,
                    token0,
                    token1
                })
                pairs.set(address, newPair)
                newPairs.push(newPair)
            }
            if (log.topics[0] === pairabi.events.Swap.topic && pairs.has(log.address)) {
                let {sender, amount0In, amount1In, amount0Out, amount1Out, to} = pairabi.events.Swap.decode(log)
                swaps.push(new Swap({
                    id: log.id,
                    block: block.header.height,
                    pair: pairs.get(log.address),
                    txnHash: log.transactionHash,
                    sender,
                    amount0In,
                    amount1In,
                    amount0Out,
                    amount1Out,
                    to
                }))
            }
        }
    }

    await ctx.store.upsert(newPairs)
    await ctx.store.upsert(swaps)
})
