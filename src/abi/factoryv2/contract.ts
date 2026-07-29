import { ContractBase } from '../abi.support.js'
import { INIT_CODE_PAIR_HASH, allPairs, allPairsLength, createPair, feeTo, feeToSetter, getPair } from './functions.js'
import type { AllPairsParams, CreatePairParams, GetPairParams } from './functions.js'

export class Contract extends ContractBase {
    INIT_CODE_PAIR_HASH() {
        return this.eth_call(INIT_CODE_PAIR_HASH, {})
    }

    allPairs(_0: AllPairsParams["_0"]) {
        return this.eth_call(allPairs, {_0})
    }

    allPairsLength() {
        return this.eth_call(allPairsLength, {})
    }

    createPair(tokenA: CreatePairParams["tokenA"], tokenB: CreatePairParams["tokenB"]) {
        return this.eth_call(createPair, {tokenA, tokenB})
    }

    feeTo() {
        return this.eth_call(feeTo, {})
    }

    feeToSetter() {
        return this.eth_call(feeToSetter, {})
    }

    getPair(_0: GetPairParams["_0"], _1: GetPairParams["_1"]) {
        return this.eth_call(getPair, {_0, _1})
    }
}
