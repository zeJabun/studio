/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace TectonicLens {
  export type AccountLimitsStruct = {
    markets: PromiseOrValue<string>[];
    liquidity: PromiseOrValue<BigNumberish>;
    shortfall: PromiseOrValue<BigNumberish>;
  };

  export type AccountLimitsStructOutput = [string[], BigNumber, BigNumber] & {
    markets: string[];
    liquidity: BigNumber;
    shortfall: BigNumber;
  };

  export type GovBravoProposalStruct = {
    proposalId: PromiseOrValue<BigNumberish>;
    proposer: PromiseOrValue<string>;
    eta: PromiseOrValue<BigNumberish>;
    targets: PromiseOrValue<string>[];
    values: PromiseOrValue<BigNumberish>[];
    signatures: PromiseOrValue<string>[];
    calldatas: PromiseOrValue<BytesLike>[];
    startBlock: PromiseOrValue<BigNumberish>;
    endBlock: PromiseOrValue<BigNumberish>;
    forVotes: PromiseOrValue<BigNumberish>;
    againstVotes: PromiseOrValue<BigNumberish>;
    abstainVotes: PromiseOrValue<BigNumberish>;
    canceled: PromiseOrValue<boolean>;
    executed: PromiseOrValue<boolean>;
  };

  export type GovBravoProposalStructOutput = [
    BigNumber,
    string,
    BigNumber,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
  ] & {
    proposalId: BigNumber;
    proposer: string;
    eta: BigNumber;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    forVotes: BigNumber;
    againstVotes: BigNumber;
    abstainVotes: BigNumber;
    canceled: boolean;
    executed: boolean;
  };

  export type GovBravoReceiptStruct = {
    proposalId: PromiseOrValue<BigNumberish>;
    hasVoted: PromiseOrValue<boolean>;
    support: PromiseOrValue<BigNumberish>;
    votes: PromiseOrValue<BigNumberish>;
  };

  export type GovBravoReceiptStructOutput = [BigNumber, boolean, number, BigNumber] & {
    proposalId: BigNumber;
    hasVoted: boolean;
    support: number;
    votes: BigNumber;
  };

  export type GovProposalStruct = {
    proposalId: PromiseOrValue<BigNumberish>;
    proposer: PromiseOrValue<string>;
    eta: PromiseOrValue<BigNumberish>;
    targets: PromiseOrValue<string>[];
    values: PromiseOrValue<BigNumberish>[];
    signatures: PromiseOrValue<string>[];
    calldatas: PromiseOrValue<BytesLike>[];
    startBlock: PromiseOrValue<BigNumberish>;
    endBlock: PromiseOrValue<BigNumberish>;
    forVotes: PromiseOrValue<BigNumberish>;
    againstVotes: PromiseOrValue<BigNumberish>;
    canceled: PromiseOrValue<boolean>;
    executed: PromiseOrValue<boolean>;
  };

  export type GovProposalStructOutput = [
    BigNumber,
    string,
    BigNumber,
    string[],
    BigNumber[],
    string[],
    string[],
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    boolean,
  ] & {
    proposalId: BigNumber;
    proposer: string;
    eta: BigNumber;
    targets: string[];
    values: BigNumber[];
    signatures: string[];
    calldatas: string[];
    startBlock: BigNumber;
    endBlock: BigNumber;
    forVotes: BigNumber;
    againstVotes: BigNumber;
    canceled: boolean;
    executed: boolean;
  };

  export type GovReceiptStruct = {
    proposalId: PromiseOrValue<BigNumberish>;
    hasVoted: PromiseOrValue<boolean>;
    support: PromiseOrValue<boolean>;
    votes: PromiseOrValue<BigNumberish>;
  };

  export type GovReceiptStructOutput = [BigNumber, boolean, boolean, BigNumber] & {
    proposalId: BigNumber;
    hasVoted: boolean;
    support: boolean;
    votes: BigNumber;
  };

  export type TonicBalanceMetadataStruct = {
    balance: PromiseOrValue<BigNumberish>;
    votes: PromiseOrValue<BigNumberish>;
    delegate: PromiseOrValue<string>;
  };

  export type TonicBalanceMetadataStructOutput = [BigNumber, BigNumber, string] & {
    balance: BigNumber;
    votes: BigNumber;
    delegate: string;
  };

  export type TonicBalanceMetadataExtStruct = {
    balance: PromiseOrValue<BigNumberish>;
    votes: PromiseOrValue<BigNumberish>;
    delegate: PromiseOrValue<string>;
    allocated: PromiseOrValue<BigNumberish>;
  };

  export type TonicBalanceMetadataExtStructOutput = [BigNumber, BigNumber, string, BigNumber] & {
    balance: BigNumber;
    votes: BigNumber;
    delegate: string;
    allocated: BigNumber;
  };

  export type TonicVotesStruct = {
    blockNumber: PromiseOrValue<BigNumberish>;
    votes: PromiseOrValue<BigNumberish>;
  };

  export type TonicVotesStructOutput = [BigNumber, BigNumber] & {
    blockNumber: BigNumber;
    votes: BigNumber;
  };

  export type TTokenBalancesStruct = {
    tToken: PromiseOrValue<string>;
    balanceOf: PromiseOrValue<BigNumberish>;
    borrowBalanceCurrent: PromiseOrValue<BigNumberish>;
    balanceOfUnderlying: PromiseOrValue<BigNumberish>;
    tokenBalance: PromiseOrValue<BigNumberish>;
    tokenAllowance: PromiseOrValue<BigNumberish>;
  };

  export type TTokenBalancesStructOutput = [string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
    tToken: string;
    balanceOf: BigNumber;
    borrowBalanceCurrent: BigNumber;
    balanceOfUnderlying: BigNumber;
    tokenBalance: BigNumber;
    tokenAllowance: BigNumber;
  };

  export type TTokenMetadataStruct = {
    tToken: PromiseOrValue<string>;
    exchangeRateCurrent: PromiseOrValue<BigNumberish>;
    supplyRatePerBlock: PromiseOrValue<BigNumberish>;
    borrowRatePerBlock: PromiseOrValue<BigNumberish>;
    reserveFactorMantissa: PromiseOrValue<BigNumberish>;
    totalBorrows: PromiseOrValue<BigNumberish>;
    totalReserves: PromiseOrValue<BigNumberish>;
    totalSupply: PromiseOrValue<BigNumberish>;
    totalCash: PromiseOrValue<BigNumberish>;
    isListed: PromiseOrValue<boolean>;
    collateralFactorMantissa: PromiseOrValue<BigNumberish>;
    underlyingAssetAddress: PromiseOrValue<string>;
    tTokenDecimals: PromiseOrValue<BigNumberish>;
    underlyingDecimals: PromiseOrValue<BigNumberish>;
  };

  export type TTokenMetadataStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
  ] & {
    tToken: string;
    exchangeRateCurrent: BigNumber;
    supplyRatePerBlock: BigNumber;
    borrowRatePerBlock: BigNumber;
    reserveFactorMantissa: BigNumber;
    totalBorrows: BigNumber;
    totalReserves: BigNumber;
    totalSupply: BigNumber;
    totalCash: BigNumber;
    isListed: boolean;
    collateralFactorMantissa: BigNumber;
    underlyingAssetAddress: string;
    tTokenDecimals: BigNumber;
    underlyingDecimals: BigNumber;
  };

  export type TTokenUnderlyingPriceStruct = {
    tToken: PromiseOrValue<string>;
    underlyingPrice: PromiseOrValue<BigNumberish>;
  };

  export type TTokenUnderlyingPriceStructOutput = [string, BigNumber] & {
    tToken: string;
    underlyingPrice: BigNumber;
  };
}

export interface TectonicLensInterface extends utils.Interface {
  functions: {
    'getAccountLimits(address,address)': FunctionFragment;
    'getGovBravoProposals(address,uint256[])': FunctionFragment;
    'getGovBravoReceipts(address,address,uint256[])': FunctionFragment;
    'getGovProposals(address,uint256[])': FunctionFragment;
    'getGovReceipts(address,address,uint256[])': FunctionFragment;
    'getTonicBalanceMetadata(address,address)': FunctionFragment;
    'getTonicBalanceMetadataExt(address,address,address)': FunctionFragment;
    'getTonicVotes(address,address,uint32[])': FunctionFragment;
    'tTokenBalances(address,address)': FunctionFragment;
    'tTokenBalancesAll(address[],address)': FunctionFragment;
    'tTokenMetadata(address)': FunctionFragment;
    'tTokenMetadataAll(address[])': FunctionFragment;
    'tTokenUnderlyingPrice(address)': FunctionFragment;
    'tTokenUnderlyingPriceAll(address[])': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'getAccountLimits'
      | 'getGovBravoProposals'
      | 'getGovBravoReceipts'
      | 'getGovProposals'
      | 'getGovReceipts'
      | 'getTonicBalanceMetadata'
      | 'getTonicBalanceMetadataExt'
      | 'getTonicVotes'
      | 'tTokenBalances'
      | 'tTokenBalancesAll'
      | 'tTokenMetadata'
      | 'tTokenMetadataAll'
      | 'tTokenUnderlyingPrice'
      | 'tTokenUnderlyingPriceAll',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'getAccountLimits',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getGovBravoProposals',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getGovBravoReceipts',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getGovProposals',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getGovReceipts',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'getTonicBalanceMetadata',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getTonicBalanceMetadataExt',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getTonicVotes',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'tTokenBalances',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'tTokenBalancesAll',
    values: [PromiseOrValue<string>[], PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'tTokenMetadata', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'tTokenMetadataAll', values: [PromiseOrValue<string>[]]): string;
  encodeFunctionData(functionFragment: 'tTokenUnderlyingPrice', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'tTokenUnderlyingPriceAll', values: [PromiseOrValue<string>[]]): string;

  decodeFunctionResult(functionFragment: 'getAccountLimits', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getGovBravoProposals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getGovBravoReceipts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getGovProposals', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getGovReceipts', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTonicBalanceMetadata', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTonicBalanceMetadataExt', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getTonicVotes', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tTokenBalances', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tTokenBalancesAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tTokenMetadata', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tTokenMetadataAll', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tTokenUnderlyingPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'tTokenUnderlyingPriceAll', data: BytesLike): Result;

  events: {};
}

export interface TectonicLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TectonicLensInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(eventFilter?: TypedEventFilter<TEvent>): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getAccountLimits(
      tectonicCore: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getGovBravoProposals(
      governor: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<[TectonicLens.GovBravoProposalStructOutput[]]>;

    getGovBravoReceipts(
      governor: PromiseOrValue<string>,
      voter: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<[TectonicLens.GovBravoReceiptStructOutput[]]>;

    getGovProposals(
      governor: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<[TectonicLens.GovProposalStructOutput[]]>;

    getGovReceipts(
      governor: PromiseOrValue<string>,
      voter: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<[TectonicLens.GovReceiptStructOutput[]]>;

    getTonicBalanceMetadata(
      tonic: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[TectonicLens.TonicBalanceMetadataStructOutput]>;

    getTonicBalanceMetadataExt(
      tonic: PromiseOrValue<string>,
      tectonicCore: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getTonicVotes(
      tonic: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      blockNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<[TectonicLens.TonicVotesStructOutput[]]>;

    tTokenBalances(
      tToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    tTokenBalancesAll(
      tTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    tTokenMetadata(
      tToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    tTokenMetadataAll(
      tTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    tTokenUnderlyingPrice(
      tToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    tTokenUnderlyingPriceAll(
      tTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  getAccountLimits(
    tectonicCore: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getGovBravoProposals(
    governor: PromiseOrValue<string>,
    proposalIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides,
  ): Promise<TectonicLens.GovBravoProposalStructOutput[]>;

  getGovBravoReceipts(
    governor: PromiseOrValue<string>,
    voter: PromiseOrValue<string>,
    proposalIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides,
  ): Promise<TectonicLens.GovBravoReceiptStructOutput[]>;

  getGovProposals(
    governor: PromiseOrValue<string>,
    proposalIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides,
  ): Promise<TectonicLens.GovProposalStructOutput[]>;

  getGovReceipts(
    governor: PromiseOrValue<string>,
    voter: PromiseOrValue<string>,
    proposalIds: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides,
  ): Promise<TectonicLens.GovReceiptStructOutput[]>;

  getTonicBalanceMetadata(
    tonic: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<TectonicLens.TonicBalanceMetadataStructOutput>;

  getTonicBalanceMetadataExt(
    tonic: PromiseOrValue<string>,
    tectonicCore: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getTonicVotes(
    tonic: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    blockNumbers: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides,
  ): Promise<TectonicLens.TonicVotesStructOutput[]>;

  tTokenBalances(
    tToken: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  tTokenBalancesAll(
    tTokens: PromiseOrValue<string>[],
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  tTokenMetadata(
    tToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  tTokenMetadataAll(
    tTokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  tTokenUnderlyingPrice(
    tToken: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  tTokenUnderlyingPriceAll(
    tTokens: PromiseOrValue<string>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    getAccountLimits(
      tectonicCore: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<TectonicLens.AccountLimitsStructOutput>;

    getGovBravoProposals(
      governor: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<TectonicLens.GovBravoProposalStructOutput[]>;

    getGovBravoReceipts(
      governor: PromiseOrValue<string>,
      voter: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<TectonicLens.GovBravoReceiptStructOutput[]>;

    getGovProposals(
      governor: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<TectonicLens.GovProposalStructOutput[]>;

    getGovReceipts(
      governor: PromiseOrValue<string>,
      voter: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<TectonicLens.GovReceiptStructOutput[]>;

    getTonicBalanceMetadata(
      tonic: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<TectonicLens.TonicBalanceMetadataStructOutput>;

    getTonicBalanceMetadataExt(
      tonic: PromiseOrValue<string>,
      tectonicCore: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<TectonicLens.TonicBalanceMetadataExtStructOutput>;

    getTonicVotes(
      tonic: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      blockNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<TectonicLens.TonicVotesStructOutput[]>;

    tTokenBalances(
      tToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<TectonicLens.TTokenBalancesStructOutput>;

    tTokenBalancesAll(
      tTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<TectonicLens.TTokenBalancesStructOutput[]>;

    tTokenMetadata(
      tToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<TectonicLens.TTokenMetadataStructOutput>;

    tTokenMetadataAll(
      tTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<TectonicLens.TTokenMetadataStructOutput[]>;

    tTokenUnderlyingPrice(
      tToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<TectonicLens.TTokenUnderlyingPriceStructOutput>;

    tTokenUnderlyingPriceAll(
      tTokens: PromiseOrValue<string>[],
      overrides?: CallOverrides,
    ): Promise<TectonicLens.TTokenUnderlyingPriceStructOutput[]>;
  };

  filters: {};

  estimateGas: {
    getAccountLimits(
      tectonicCore: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getGovBravoProposals(
      governor: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getGovBravoReceipts(
      governor: PromiseOrValue<string>,
      voter: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getGovProposals(
      governor: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getGovReceipts(
      governor: PromiseOrValue<string>,
      voter: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTonicBalanceMetadata(
      tonic: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getTonicBalanceMetadataExt(
      tonic: PromiseOrValue<string>,
      tectonicCore: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getTonicVotes(
      tonic: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      blockNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    tTokenBalances(
      tToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    tTokenBalancesAll(
      tTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    tTokenMetadata(
      tToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    tTokenMetadataAll(
      tTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    tTokenUnderlyingPrice(
      tToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    tTokenUnderlyingPriceAll(
      tTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getAccountLimits(
      tectonicCore: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getGovBravoProposals(
      governor: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getGovBravoReceipts(
      governor: PromiseOrValue<string>,
      voter: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getGovProposals(
      governor: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getGovReceipts(
      governor: PromiseOrValue<string>,
      voter: PromiseOrValue<string>,
      proposalIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getTonicBalanceMetadata(
      tonic: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getTonicBalanceMetadataExt(
      tonic: PromiseOrValue<string>,
      tectonicCore: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getTonicVotes(
      tonic: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      blockNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    tTokenBalances(
      tToken: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    tTokenBalancesAll(
      tTokens: PromiseOrValue<string>[],
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    tTokenMetadata(
      tToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    tTokenMetadataAll(
      tTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    tTokenUnderlyingPrice(
      tToken: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    tTokenUnderlyingPriceAll(
      tTokens: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
