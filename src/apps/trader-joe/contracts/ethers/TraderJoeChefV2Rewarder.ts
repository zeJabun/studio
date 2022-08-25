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
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export declare namespace RulerRewarder {
  export type PoolInfoStruct = {
    accSushiPerShare: PromiseOrValue<BigNumberish>;
    lastRewardTime: PromiseOrValue<BigNumberish>;
  };

  export type PoolInfoStructOutput = [BigNumber, BigNumber] & {
    accSushiPerShare: BigNumber;
    lastRewardTime: BigNumber;
  };
}

export interface TraderJoeChefV2RewarderInterface extends utils.Interface {
  functions: {
    'MASTERCHEF_V2()': FunctionFragment;
    'claimOwnership()': FunctionFragment;
    'init(bytes)': FunctionFragment;
    'masterLpToken()': FunctionFragment;
    'onSushiReward(uint256,address,address,uint256,uint256)': FunctionFragment;
    'owner()': FunctionFragment;
    'pendingOwner()': FunctionFragment;
    'pendingToken(uint256,address)': FunctionFragment;
    'pendingTokens(uint256,address,uint256)': FunctionFragment;
    'poolInfo(uint256)': FunctionFragment;
    'rewardPerSecond()': FunctionFragment;
    'rewardToken()': FunctionFragment;
    'setRewardPerSecond(uint256)': FunctionFragment;
    'transferOwnership(address,bool,bool)': FunctionFragment;
    'updatePool(uint256)': FunctionFragment;
    'userInfo(uint256,address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'MASTERCHEF_V2'
      | 'claimOwnership'
      | 'init'
      | 'masterLpToken'
      | 'onSushiReward'
      | 'owner'
      | 'pendingOwner'
      | 'pendingToken'
      | 'pendingTokens'
      | 'poolInfo'
      | 'rewardPerSecond'
      | 'rewardToken'
      | 'setRewardPerSecond'
      | 'transferOwnership'
      | 'updatePool'
      | 'userInfo',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'MASTERCHEF_V2', values?: undefined): string;
  encodeFunctionData(functionFragment: 'claimOwnership', values?: undefined): string;
  encodeFunctionData(functionFragment: 'init', values: [PromiseOrValue<BytesLike>]): string;
  encodeFunctionData(functionFragment: 'masterLpToken', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'onSushiReward',
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'pendingOwner', values?: undefined): string;
  encodeFunctionData(
    functionFragment: 'pendingToken',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'pendingTokens',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'poolInfo', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'rewardPerSecond', values?: undefined): string;
  encodeFunctionData(functionFragment: 'rewardToken', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setRewardPerSecond', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'transferOwnership',
    values: [PromiseOrValue<string>, PromiseOrValue<boolean>, PromiseOrValue<boolean>],
  ): string;
  encodeFunctionData(functionFragment: 'updatePool', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(
    functionFragment: 'userInfo',
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<string>],
  ): string;

  decodeFunctionResult(functionFragment: 'MASTERCHEF_V2', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'claimOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'init', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'masterLpToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'onSushiReward', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingOwner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'pendingTokens', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'poolInfo', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardPerSecond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'rewardToken', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setRewardPerSecond', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'transferOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'updatePool', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'userInfo', data: BytesLike): Result;

  events: {
    'LogInit()': EventFragment;
    'LogOnReward(address,uint256,uint256,address)': EventFragment;
    'LogPoolAddition(uint256,uint256)': EventFragment;
    'LogRewardPerSecond(uint256)': EventFragment;
    'LogSetPool(uint256,uint256)': EventFragment;
    'LogUpdatePool(uint256,uint64,uint256,uint256)': EventFragment;
    'OwnershipTransferred(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'LogInit'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogOnReward'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogPoolAddition'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogRewardPerSecond'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogSetPool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'LogUpdatePool'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnershipTransferred'): EventFragment;
}

export interface LogInitEventObject {}
export type LogInitEvent = TypedEvent<[], LogInitEventObject>;

export type LogInitEventFilter = TypedEventFilter<LogInitEvent>;

export interface LogOnRewardEventObject {
  user: string;
  pid: BigNumber;
  amount: BigNumber;
  to: string;
}
export type LogOnRewardEvent = TypedEvent<[string, BigNumber, BigNumber, string], LogOnRewardEventObject>;

export type LogOnRewardEventFilter = TypedEventFilter<LogOnRewardEvent>;

export interface LogPoolAdditionEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
}
export type LogPoolAdditionEvent = TypedEvent<[BigNumber, BigNumber], LogPoolAdditionEventObject>;

export type LogPoolAdditionEventFilter = TypedEventFilter<LogPoolAdditionEvent>;

export interface LogRewardPerSecondEventObject {
  rewardPerSecond: BigNumber;
}
export type LogRewardPerSecondEvent = TypedEvent<[BigNumber], LogRewardPerSecondEventObject>;

export type LogRewardPerSecondEventFilter = TypedEventFilter<LogRewardPerSecondEvent>;

export interface LogSetPoolEventObject {
  pid: BigNumber;
  allocPoint: BigNumber;
}
export type LogSetPoolEvent = TypedEvent<[BigNumber, BigNumber], LogSetPoolEventObject>;

export type LogSetPoolEventFilter = TypedEventFilter<LogSetPoolEvent>;

export interface LogUpdatePoolEventObject {
  pid: BigNumber;
  lastRewardTime: BigNumber;
  lpSupply: BigNumber;
  accSushiPerShare: BigNumber;
}
export type LogUpdatePoolEvent = TypedEvent<[BigNumber, BigNumber, BigNumber, BigNumber], LogUpdatePoolEventObject>;

export type LogUpdatePoolEventFilter = TypedEventFilter<LogUpdatePoolEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<[string, string], OwnershipTransferredEventObject>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface TraderJoeChefV2Rewarder extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TraderJoeChefV2RewarderInterface;

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
    MASTERCHEF_V2(overrides?: CallOverrides): Promise<[string]>;

    claimOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    init(
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    masterLpToken(overrides?: CallOverrides): Promise<[string]>;

    onSushiReward(
      pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      lpToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    pendingToken(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { pending: BigNumber }>;

    pendingTokens(
      pid: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [string[], BigNumber[]] & {
        rewardTokens: string[];
        rewardAmounts: BigNumber[];
      }
    >;

    poolInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        accSushiPerShare: BigNumber;
        lastRewardTime: BigNumber;
      }
    >;

    rewardPerSecond(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardToken(overrides?: CallOverrides): Promise<[string]>;

    setRewardPerSecond(
      _rewardPerSecond: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    updatePool(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;
  };

  MASTERCHEF_V2(overrides?: CallOverrides): Promise<string>;

  claimOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  init(
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  masterLpToken(overrides?: CallOverrides): Promise<string>;

  onSushiReward(
    pid: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    to: PromiseOrValue<string>,
    arg3: PromiseOrValue<BigNumberish>,
    lpToken: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  pendingToken(
    _pid: PromiseOrValue<BigNumberish>,
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  pendingTokens(
    pid: PromiseOrValue<BigNumberish>,
    user: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [string[], BigNumber[]] & {
      rewardTokens: string[];
      rewardAmounts: BigNumber[];
    }
  >;

  poolInfo(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber] & {
      accSushiPerShare: BigNumber;
      lastRewardTime: BigNumber;
    }
  >;

  rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

  rewardToken(overrides?: CallOverrides): Promise<string>;

  setRewardPerSecond(
    _rewardPerSecond: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    direct: PromiseOrValue<boolean>,
    renounce: PromiseOrValue<boolean>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  updatePool(
    pid: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  userInfo(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;

  callStatic: {
    MASTERCHEF_V2(overrides?: CallOverrides): Promise<string>;

    claimOwnership(overrides?: CallOverrides): Promise<void>;

    init(data: PromiseOrValue<BytesLike>, overrides?: CallOverrides): Promise<void>;

    masterLpToken(overrides?: CallOverrides): Promise<string>;

    onSushiReward(
      pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      lpToken: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    pendingToken(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    pendingTokens(
      pid: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [string[], BigNumber[]] & {
        rewardTokens: string[];
        rewardAmounts: BigNumber[];
      }
    >;

    poolInfo(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        accSushiPerShare: BigNumber;
        lastRewardTime: BigNumber;
      }
    >;

    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<string>;

    setRewardPerSecond(_rewardPerSecond: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: CallOverrides,
    ): Promise<void>;

    updatePool(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<RulerRewarder.PoolInfoStructOutput>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { amount: BigNumber; rewardDebt: BigNumber }>;
  };

  filters: {
    'LogInit()'(): LogInitEventFilter;
    LogInit(): LogInitEventFilter;

    'LogOnReward(address,uint256,uint256,address)'(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: PromiseOrValue<string> | null,
    ): LogOnRewardEventFilter;
    LogOnReward(
      user?: PromiseOrValue<string> | null,
      pid?: PromiseOrValue<BigNumberish> | null,
      amount?: null,
      to?: PromiseOrValue<string> | null,
    ): LogOnRewardEventFilter;

    'LogPoolAddition(uint256,uint256)'(
      pid?: PromiseOrValue<BigNumberish> | null,
      allocPoint?: null,
    ): LogPoolAdditionEventFilter;
    LogPoolAddition(pid?: PromiseOrValue<BigNumberish> | null, allocPoint?: null): LogPoolAdditionEventFilter;

    'LogRewardPerSecond(uint256)'(rewardPerSecond?: null): LogRewardPerSecondEventFilter;
    LogRewardPerSecond(rewardPerSecond?: null): LogRewardPerSecondEventFilter;

    'LogSetPool(uint256,uint256)'(pid?: PromiseOrValue<BigNumberish> | null, allocPoint?: null): LogSetPoolEventFilter;
    LogSetPool(pid?: PromiseOrValue<BigNumberish> | null, allocPoint?: null): LogSetPoolEventFilter;

    'LogUpdatePool(uint256,uint64,uint256,uint256)'(
      pid?: PromiseOrValue<BigNumberish> | null,
      lastRewardTime?: null,
      lpSupply?: null,
      accSushiPerShare?: null,
    ): LogUpdatePoolEventFilter;
    LogUpdatePool(
      pid?: PromiseOrValue<BigNumberish> | null,
      lastRewardTime?: null,
      lpSupply?: null,
      accSushiPerShare?: null,
    ): LogUpdatePoolEventFilter;

    'OwnershipTransferred(address,address)'(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null,
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    MASTERCHEF_V2(overrides?: CallOverrides): Promise<BigNumber>;

    claimOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    init(
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    masterLpToken(overrides?: CallOverrides): Promise<BigNumber>;

    onSushiReward(
      pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      lpToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingToken(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    pendingTokens(
      pid: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<BigNumber>;

    rewardPerSecond(overrides?: CallOverrides): Promise<BigNumber>;

    rewardToken(overrides?: CallOverrides): Promise<BigNumber>;

    setRewardPerSecond(
      _rewardPerSecond: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    updatePool(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    MASTERCHEF_V2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimOwnership(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    init(
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    masterLpToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onSushiReward(
      pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      to: PromiseOrValue<string>,
      arg3: PromiseOrValue<BigNumberish>,
      lpToken: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingToken(
      _pid: PromiseOrValue<BigNumberish>,
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    pendingTokens(
      pid: PromiseOrValue<BigNumberish>,
      user: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    poolInfo(arg0: PromiseOrValue<BigNumberish>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardPerSecond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setRewardPerSecond(
      _rewardPerSecond: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      direct: PromiseOrValue<boolean>,
      renounce: PromiseOrValue<boolean>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    updatePool(
      pid: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    userInfo(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
