import {DataSourceBuilder} from '@subsquid/evm-stream'
import * as factoryv2abi from './abi/factoryv2'
import * as pairabi from './abi/pair'

export const FACTORY_ADDRESSES = [
    '0xbcfccbde45ce874adcb698cc183debcf17952812',
    '0xca143ce32fe78f1f7019d7d551a6402fc5350c73',
]

export const dataSource = new DataSourceBuilder()
    // The SQD Network Portal is the primary source of blockchain data: it is public,
    // needs no API key, and streams pre-filtered data — including real-time unfinalized
    // blocks — far faster than a plain RPC endpoint.
    .setPortal('https://portal.sqd.dev/datasets/binance-mainnet')
    // To use a private or rate-limit-lifted Portal, supply an API key
    // through the HTTP client headers (create a key at https://portal.sqd.dev/app):
    // .setPortal({
    //     url: 'https://portal.sqd.dev/datasets/binance-mainnet',
    //     http: {
    //         headers: {'x-api-key': process.env.SQD_API_KEY},
    //     },
    // })
    .setBlockRange({from: 586_851})
    // Field selection is explicit: there are no default optional fields, so list every
    // field the handler reads.
    .setFields({
        log: {
            address: true,
            topics: true,
            data: true,
            transactionHash: true,
        },
    })
    .addLog({
        where: {
            address: FACTORY_ADDRESSES,
            topic0: [factoryv2abi.events.PairCreated.topic],
        },
    })
    .addLog({
        where: {
            topic0: [pairabi.events.Swap.topic],
        },
    })
    .build()
