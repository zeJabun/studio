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
import type { FunctionFragment, Result, EventFragment } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common';

export declare namespace PolynomialEarnResolver {
  export type MinimalStrikeStruct = {
    strikeId: BigNumberish;
    expiry: BigNumberish;
    strikePrice: BigNumberish;
  };

  export type MinimalStrikeStructOutput = [BigNumber, BigNumber, BigNumber] & {
    strikeId: BigNumber;
    expiry: BigNumber;
    strikePrice: BigNumber;
  };

  export type FuturesDataStruct = {
    spotPrice: BigNumberish;
    shortPosition: BigNumberish;
    margin: BigNumberish;
    leverage: BigNumberish;
  };

  export type FuturesDataStructOutput = [BigNumber, BigNumber, BigNumber, BigNumber] & {
    spotPrice: BigNumber;
    shortPosition: BigNumber;
    margin: BigNumber;
    leverage: BigNumber;
  };

  export type OptionDataStruct = {
    strikeId: BigNumberish;
    strikePrice: BigNumberish;
    expiry: BigNumberish;
    positionId: BigNumberish;
    optionAmount: BigNumberish;
    premiumPaid: BigNumberish;
    premiumCollected: BigNumberish;
    collateral: BigNumberish;
    currentOptionDelta: BigNumberish;
  };

  export type OptionDataStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
  ] & {
    strikeId: BigNumber;
    strikePrice: BigNumber;
    expiry: BigNumber;
    positionId: BigNumber;
    optionAmount: BigNumber;
    premiumPaid: BigNumber;
    premiumCollected: BigNumber;
    collateral: BigNumber;
    currentOptionDelta: BigNumber;
  };
}

export interface PolynomialResolverInterface extends utils.Interface {
  functions: {
    'FUTURES_MARKET()': FunctionFragment;
    'GREEKS()': FunctionFragment;
    'MARKET()': FunctionFragment;
    'RATES()': FunctionFragment;
    'addVault(address,uint8)': FunctionFragment;
    'authority()': FunctionFragment;
    'getDeltaWithSpotPrice(uint256,uint256)': FunctionFragment;
    'getDeltas(uint256[])': FunctionFragment;
    'getStrikeDetails(uint256[])': FunctionFragment;
    'getUserPositions(address,address[])': FunctionFragment;
    'getVaultPositions(address)': FunctionFragment;
    'isVault(address)': FunctionFragment;
    'owner()': FunctionFragment;
    'setAuthority(address)': FunctionFragment;
    'setOwner(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'FUTURES_MARKET'
      | 'GREEKS'
      | 'MARKET'
      | 'RATES'
      | 'addVault'
      | 'authority'
      | 'getDeltaWithSpotPrice'
      | 'getDeltas'
      | 'getStrikeDetails'
      | 'getUserPositions'
      | 'getVaultPositions'
      | 'isVault'
      | 'owner'
      | 'setAuthority'
      | 'setOwner',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'FUTURES_MARKET', values?: undefined): string;
  encodeFunctionData(functionFragment: 'GREEKS', values?: undefined): string;
  encodeFunctionData(functionFragment: 'MARKET', values?: undefined): string;
  encodeFunctionData(functionFragment: 'RATES', values?: undefined): string;
  encodeFunctionData(functionFragment: 'addVault', values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'authority', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getDeltaWithSpotPrice', values: [BigNumberish, BigNumberish]): string;
  encodeFunctionData(functionFragment: 'getDeltas', values: [BigNumberish[]]): string;
  encodeFunctionData(functionFragment: 'getStrikeDetails', values: [BigNumberish[]]): string;
  encodeFunctionData(functionFragment: 'getUserPositions', values: [string, string[]]): string;
  encodeFunctionData(functionFragment: 'getVaultPositions', values: [string]): string;
  encodeFunctionData(functionFragment: 'isVault', values: [string]): string;
  encodeFunctionData(functionFragment: 'owner', values?: undefined): string;
  encodeFunctionData(functionFragment: 'setAuthority', values: [string]): string;
  encodeFunctionData(functionFragment: 'setOwner', values: [string]): string;

  decodeFunctionResult(functionFragment: 'FUTURES_MARKET', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'GREEKS', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'MARKET', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'RATES', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'addVault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'authority', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getDeltaWithSpotPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getDeltas', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getStrikeDetails', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserPositions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getVaultPositions', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'isVault', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'owner', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setAuthority', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'setOwner', data: BytesLike): Result;

  events: {
    'AuthorityUpdated(address,address)': EventFragment;
    'OwnerUpdated(address,address)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'AuthorityUpdated'): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'OwnerUpdated'): EventFragment;
}

export interface AuthorityUpdatedEventObject {
  user: string;
  newAuthority: string;
}
export type AuthorityUpdatedEvent = TypedEvent<[string, string], AuthorityUpdatedEventObject>;

export type AuthorityUpdatedEventFilter = TypedEventFilter<AuthorityUpdatedEvent>;

export interface OwnerUpdatedEventObject {
  user: string;
  newOwner: string;
}
export type OwnerUpdatedEvent = TypedEvent<[string, string], OwnerUpdatedEventObject>;

export type OwnerUpdatedEventFilter = TypedEventFilter<OwnerUpdatedEvent>;

export interface PolynomialResolver extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PolynomialResolverInterface;

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
    FUTURES_MARKET(overrides?: CallOverrides): Promise<[string]>;

    GREEKS(overrides?: CallOverrides): Promise<[string]>;

    MARKET(overrides?: CallOverrides): Promise<[string]>;

    RATES(overrides?: CallOverrides): Promise<[string]>;

    addVault(
      vault: string,
      vaultType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    authority(overrides?: CallOverrides): Promise<[string]>;

    getDeltaWithSpotPrice(
      spotPrice: BigNumberish,
      strikeId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { callDelta: BigNumber; putDelta: BigNumber }>;

    getDeltas(
      strikeIds: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        callDeltas: BigNumber[];
        putDeltas: BigNumber[];
      }
    >;

    getStrikeDetails(
      strikeIds: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<
      [PolynomialEarnResolver.MinimalStrikeStructOutput[]] & {
        strikes: PolynomialEarnResolver.MinimalStrikeStructOutput[];
      }
    >;

    getUserPositions(
      user: string,
      vaults: string[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        balances: BigNumber[];
        underlyings: BigNumber[];
      }
    >;

    getVaultPositions(
      vault: string,
      overrides?: CallOverrides,
    ): Promise<
      [PolynomialEarnResolver.FuturesDataStructOutput, PolynomialEarnResolver.OptionDataStructOutput[]] & {
        futurePosition: PolynomialEarnResolver.FuturesDataStructOutput;
        optionData: PolynomialEarnResolver.OptionDataStructOutput[];
      }
    >;

    isVault(arg0: string, overrides?: CallOverrides): Promise<[number]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    setAuthority(
      newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  FUTURES_MARKET(overrides?: CallOverrides): Promise<string>;

  GREEKS(overrides?: CallOverrides): Promise<string>;

  MARKET(overrides?: CallOverrides): Promise<string>;

  RATES(overrides?: CallOverrides): Promise<string>;

  addVault(
    vault: string,
    vaultType: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  authority(overrides?: CallOverrides): Promise<string>;

  getDeltaWithSpotPrice(
    spotPrice: BigNumberish,
    strikeId: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { callDelta: BigNumber; putDelta: BigNumber }>;

  getDeltas(
    strikeIds: BigNumberish[],
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber[], BigNumber[]] & {
      callDeltas: BigNumber[];
      putDeltas: BigNumber[];
    }
  >;

  getStrikeDetails(
    strikeIds: BigNumberish[],
    overrides?: CallOverrides,
  ): Promise<PolynomialEarnResolver.MinimalStrikeStructOutput[]>;

  getUserPositions(
    user: string,
    vaults: string[],
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber[], BigNumber[]] & {
      balances: BigNumber[];
      underlyings: BigNumber[];
    }
  >;

  getVaultPositions(
    vault: string,
    overrides?: CallOverrides,
  ): Promise<
    [PolynomialEarnResolver.FuturesDataStructOutput, PolynomialEarnResolver.OptionDataStructOutput[]] & {
      futurePosition: PolynomialEarnResolver.FuturesDataStructOutput;
      optionData: PolynomialEarnResolver.OptionDataStructOutput[];
    }
  >;

  isVault(arg0: string, overrides?: CallOverrides): Promise<number>;

  owner(overrides?: CallOverrides): Promise<string>;

  setAuthority(
    newAuthority: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setOwner(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<ContractTransaction>;

  callStatic: {
    FUTURES_MARKET(overrides?: CallOverrides): Promise<string>;

    GREEKS(overrides?: CallOverrides): Promise<string>;

    MARKET(overrides?: CallOverrides): Promise<string>;

    RATES(overrides?: CallOverrides): Promise<string>;

    addVault(vault: string, vaultType: BigNumberish, overrides?: CallOverrides): Promise<void>;

    authority(overrides?: CallOverrides): Promise<string>;

    getDeltaWithSpotPrice(
      spotPrice: BigNumberish,
      strikeId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { callDelta: BigNumber; putDelta: BigNumber }>;

    getDeltas(
      strikeIds: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        callDeltas: BigNumber[];
        putDeltas: BigNumber[];
      }
    >;

    getStrikeDetails(
      strikeIds: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<PolynomialEarnResolver.MinimalStrikeStructOutput[]>;

    getUserPositions(
      user: string,
      vaults: string[],
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        balances: BigNumber[];
        underlyings: BigNumber[];
      }
    >;

    getVaultPositions(
      vault: string,
      overrides?: CallOverrides,
    ): Promise<
      [PolynomialEarnResolver.FuturesDataStructOutput, PolynomialEarnResolver.OptionDataStructOutput[]] & {
        futurePosition: PolynomialEarnResolver.FuturesDataStructOutput;
        optionData: PolynomialEarnResolver.OptionDataStructOutput[];
      }
    >;

    isVault(arg0: string, overrides?: CallOverrides): Promise<number>;

    owner(overrides?: CallOverrides): Promise<string>;

    setAuthority(newAuthority: string, overrides?: CallOverrides): Promise<void>;

    setOwner(newOwner: string, overrides?: CallOverrides): Promise<void>;
  };

  filters: {
    'AuthorityUpdated(address,address)'(
      user?: string | null,
      newAuthority?: string | null,
    ): AuthorityUpdatedEventFilter;
    AuthorityUpdated(user?: string | null, newAuthority?: string | null): AuthorityUpdatedEventFilter;

    'OwnerUpdated(address,address)'(user?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
    OwnerUpdated(user?: string | null, newOwner?: string | null): OwnerUpdatedEventFilter;
  };

  estimateGas: {
    FUTURES_MARKET(overrides?: CallOverrides): Promise<BigNumber>;

    GREEKS(overrides?: CallOverrides): Promise<BigNumber>;

    MARKET(overrides?: CallOverrides): Promise<BigNumber>;

    RATES(overrides?: CallOverrides): Promise<BigNumber>;

    addVault(
      vault: string,
      vaultType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    authority(overrides?: CallOverrides): Promise<BigNumber>;

    getDeltaWithSpotPrice(
      spotPrice: BigNumberish,
      strikeId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getDeltas(strikeIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

    getStrikeDetails(strikeIds: BigNumberish[], overrides?: CallOverrides): Promise<BigNumber>;

    getUserPositions(user: string, vaults: string[], overrides?: CallOverrides): Promise<BigNumber>;

    getVaultPositions(vault: string, overrides?: CallOverrides): Promise<BigNumber>;

    isVault(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(newAuthority: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;

    setOwner(newOwner: string, overrides?: Overrides & { from?: string | Promise<string> }): Promise<BigNumber>;
  };

  populateTransaction: {
    FUTURES_MARKET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GREEKS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MARKET(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RATES(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addVault(
      vault: string,
      vaultType: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDeltaWithSpotPrice(
      spotPrice: BigNumberish,
      strikeId: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getDeltas(strikeIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getStrikeDetails(strikeIds: BigNumberish[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getUserPositions(user: string, vaults: string[], overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVaultPositions(vault: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isVault(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    setAuthority(
      newAuthority: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setOwner(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
