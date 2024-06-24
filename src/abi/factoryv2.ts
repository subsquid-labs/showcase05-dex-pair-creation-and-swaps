import * as p from '@subsquid/evm-codec'
import { event, fun, viewFun, indexed, ContractBase } from '@subsquid/evm-abi'
import type { EventParams as EParams, FunctionArguments, FunctionReturn } from '@subsquid/evm-abi'

export const events = {
    PairCreated: event("0x0d3648bd0f6ba80134a33ba9275ac585d9d315f0ad8355cddefde31afa28d0e9", "PairCreated(address,address,address,uint256)", {"token0": indexed(p.address), "token1": indexed(p.address), "pair": p.address, "_3": p.uint256}),
}

export const functions = {
    INIT_CODE_PAIR_HASH: viewFun("0x5855a25a", "INIT_CODE_PAIR_HASH()", {}, p.bytes32),
    allPairs: viewFun("0x1e3dd18b", "allPairs(uint256)", {"_0": p.uint256}, p.address),
    allPairsLength: viewFun("0x574f2ba3", "allPairsLength()", {}, p.uint256),
    createPair: fun("0xc9c65396", "createPair(address,address)", {"tokenA": p.address, "tokenB": p.address}, p.address),
    feeTo: viewFun("0x017e7e58", "feeTo()", {}, p.address),
    feeToSetter: viewFun("0x094b7415", "feeToSetter()", {}, p.address),
    getPair: viewFun("0xe6a43905", "getPair(address,address)", {"_0": p.address, "_1": p.address}, p.address),
    setFeeTo: fun("0xf46901ed", "setFeeTo(address)", {"_feeTo": p.address}, ),
    setFeeToSetter: fun("0xa2e74af6", "setFeeToSetter(address)", {"_feeToSetter": p.address}, ),
}

export class Contract extends ContractBase {

    INIT_CODE_PAIR_HASH() {
        return this.eth_call(functions.INIT_CODE_PAIR_HASH, {})
    }

    allPairs(_0: AllPairsParams["_0"]) {
        return this.eth_call(functions.allPairs, {_0})
    }

    allPairsLength() {
        return this.eth_call(functions.allPairsLength, {})
    }

    feeTo() {
        return this.eth_call(functions.feeTo, {})
    }

    feeToSetter() {
        return this.eth_call(functions.feeToSetter, {})
    }

    getPair(_0: GetPairParams["_0"], _1: GetPairParams["_1"]) {
        return this.eth_call(functions.getPair, {_0, _1})
    }
}

/// Event types
export type PairCreatedEventArgs = EParams<typeof events.PairCreated>

/// Function types
export type INIT_CODE_PAIR_HASHParams = FunctionArguments<typeof functions.INIT_CODE_PAIR_HASH>
export type INIT_CODE_PAIR_HASHReturn = FunctionReturn<typeof functions.INIT_CODE_PAIR_HASH>

export type AllPairsParams = FunctionArguments<typeof functions.allPairs>
export type AllPairsReturn = FunctionReturn<typeof functions.allPairs>

export type AllPairsLengthParams = FunctionArguments<typeof functions.allPairsLength>
export type AllPairsLengthReturn = FunctionReturn<typeof functions.allPairsLength>

export type CreatePairParams = FunctionArguments<typeof functions.createPair>
export type CreatePairReturn = FunctionReturn<typeof functions.createPair>

export type FeeToParams = FunctionArguments<typeof functions.feeTo>
export type FeeToReturn = FunctionReturn<typeof functions.feeTo>

export type FeeToSetterParams = FunctionArguments<typeof functions.feeToSetter>
export type FeeToSetterReturn = FunctionReturn<typeof functions.feeToSetter>

export type GetPairParams = FunctionArguments<typeof functions.getPair>
export type GetPairReturn = FunctionReturn<typeof functions.getPair>

export type SetFeeToParams = FunctionArguments<typeof functions.setFeeTo>
export type SetFeeToReturn = FunctionReturn<typeof functions.setFeeTo>

export type SetFeeToSetterParams = FunctionArguments<typeof functions.setFeeToSetter>
export type SetFeeToSetterReturn = FunctionReturn<typeof functions.setFeeToSetter>

