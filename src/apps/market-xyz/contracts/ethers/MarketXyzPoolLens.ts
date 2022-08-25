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

export declare namespace FusePoolLens {
  export type FusePoolAssetStruct = {
    cToken: PromiseOrValue<string>;
    underlyingToken: PromiseOrValue<string>;
    underlyingName: PromiseOrValue<string>;
    underlyingSymbol: PromiseOrValue<string>;
    underlyingDecimals: PromiseOrValue<BigNumberish>;
    underlyingBalance: PromiseOrValue<BigNumberish>;
    supplyRatePerBlock: PromiseOrValue<BigNumberish>;
    borrowRatePerBlock: PromiseOrValue<BigNumberish>;
    totalSupply: PromiseOrValue<BigNumberish>;
    totalBorrow: PromiseOrValue<BigNumberish>;
    supplyBalance: PromiseOrValue<BigNumberish>;
    borrowBalance: PromiseOrValue<BigNumberish>;
    liquidity: PromiseOrValue<BigNumberish>;
    membership: PromiseOrValue<boolean>;
    exchangeRate: PromiseOrValue<BigNumberish>;
    underlyingPrice: PromiseOrValue<BigNumberish>;
    oracle: PromiseOrValue<string>;
    collateralFactor: PromiseOrValue<BigNumberish>;
    reserveFactor: PromiseOrValue<BigNumberish>;
    adminFee: PromiseOrValue<BigNumberish>;
    fuseFee: PromiseOrValue<BigNumberish>;
  };

  export type FusePoolAssetStructOutput = [
    string,
    string,
    string,
    string,
    BigNumber,
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
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
  ] & {
    cToken: string;
    underlyingToken: string;
    underlyingName: string;
    underlyingSymbol: string;
    underlyingDecimals: BigNumber;
    underlyingBalance: BigNumber;
    supplyRatePerBlock: BigNumber;
    borrowRatePerBlock: BigNumber;
    totalSupply: BigNumber;
    totalBorrow: BigNumber;
    supplyBalance: BigNumber;
    borrowBalance: BigNumber;
    liquidity: BigNumber;
    membership: boolean;
    exchangeRate: BigNumber;
    underlyingPrice: BigNumber;
    oracle: string;
    collateralFactor: BigNumber;
    reserveFactor: BigNumber;
    adminFee: BigNumber;
    fuseFee: BigNumber;
  };

  export type CTokenOwnershipStruct = {
    cToken: PromiseOrValue<string>;
    admin: PromiseOrValue<string>;
    adminHasRights: PromiseOrValue<boolean>;
    fuseAdminHasRights: PromiseOrValue<boolean>;
  };

  export type CTokenOwnershipStructOutput = [string, string, boolean, boolean] & {
    cToken: string;
    admin: string;
    adminHasRights: boolean;
    fuseAdminHasRights: boolean;
  };

  export type FusePoolUserStruct = {
    account: PromiseOrValue<string>;
    totalBorrow: PromiseOrValue<BigNumberish>;
    totalCollateral: PromiseOrValue<BigNumberish>;
    health: PromiseOrValue<BigNumberish>;
    assets: FusePoolLens.FusePoolAssetStruct[];
  };

  export type FusePoolUserStructOutput = [
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    FusePoolLens.FusePoolAssetStructOutput[],
  ] & {
    account: string;
    totalBorrow: BigNumber;
    totalCollateral: BigNumber;
    health: BigNumber;
    assets: FusePoolLens.FusePoolAssetStructOutput[];
  };
}

export declare namespace FusePoolDirectory {
  export type FusePoolStruct = {
    name: PromiseOrValue<string>;
    creator: PromiseOrValue<string>;
    comptroller: PromiseOrValue<string>;
    blockPosted: PromiseOrValue<BigNumberish>;
    timestampPosted: PromiseOrValue<BigNumberish>;
  };

  export type FusePoolStructOutput = [string, string, string, BigNumber, BigNumber] & {
    name: string;
    creator: string;
    comptroller: string;
    blockPosted: BigNumber;
    timestampPosted: BigNumber;
  };
}

export interface MarketXyzPoolLensInterface extends utils.Interface {
  functions: {
    'directory()': FunctionFragment;
    'getPoolAssetsWithData(address)': FunctionFragment;
    'getPoolOwnership(address)': FunctionFragment;
    'getPoolSummary(address)': FunctionFragment;
    'getPoolUserSummary(address,address)': FunctionFragment;
    'getPoolUsersWithData(address[],uint256)': FunctionFragment;
    'getPoolUsersWithData(address,uint256)': FunctionFragment;
    'getPoolsByAccountWithData(address)': FunctionFragment;
    'getPoolsBySupplier(address)': FunctionFragment;
    'getPoolsBySupplierWithData(address)': FunctionFragment;
    'getPublicPoolUsersWithData(uint256)': FunctionFragment;
    'getPublicPoolsWithData()': FunctionFragment;
    'getUserSummary(address)': FunctionFragment;
    'getWhitelistedPoolsByAccount(address)': FunctionFragment;
    'getWhitelistedPoolsByAccountWithData(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'directory'
      | 'getPoolAssetsWithData'
      | 'getPoolOwnership'
      | 'getPoolSummary'
      | 'getPoolUserSummary'
      | 'getPoolUsersWithData(address[],uint256)'
      | 'getPoolUsersWithData(address,uint256)'
      | 'getPoolsByAccountWithData'
      | 'getPoolsBySupplier'
      | 'getPoolsBySupplierWithData'
      | 'getPublicPoolUsersWithData'
      | 'getPublicPoolsWithData'
      | 'getUserSummary'
      | 'getWhitelistedPoolsByAccount'
      | 'getWhitelistedPoolsByAccountWithData',
  ): FunctionFragment;

  encodeFunctionData(functionFragment: 'directory', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getPoolAssetsWithData', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getPoolOwnership', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getPoolSummary', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'getPoolUserSummary',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPoolUsersWithData(address[],uint256)',
    values: [PromiseOrValue<string>[], PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'getPoolUsersWithData(address,uint256)',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(functionFragment: 'getPoolsByAccountWithData', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getPoolsBySupplier', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getPoolsBySupplierWithData', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getPublicPoolUsersWithData', values: [PromiseOrValue<BigNumberish>]): string;
  encodeFunctionData(functionFragment: 'getPublicPoolsWithData', values?: undefined): string;
  encodeFunctionData(functionFragment: 'getUserSummary', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(functionFragment: 'getWhitelistedPoolsByAccount', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'getWhitelistedPoolsByAccountWithData',
    values: [PromiseOrValue<string>],
  ): string;

  decodeFunctionResult(functionFragment: 'directory', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolAssetsWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolOwnership', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolSummary', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolUserSummary', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolUsersWithData(address[],uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolUsersWithData(address,uint256)', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolsByAccountWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolsBySupplier', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPoolsBySupplierWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPublicPoolUsersWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getPublicPoolsWithData', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getUserSummary', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getWhitelistedPoolsByAccount', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getWhitelistedPoolsByAccountWithData', data: BytesLike): Result;

  events: {};
}

export interface MarketXyzPoolLens extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MarketXyzPoolLensInterface;

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
    directory(overrides?: CallOverrides): Promise<[string]>;

    getPoolAssetsWithData(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPoolOwnership(
      comptroller: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string, boolean, boolean, FusePoolLens.CTokenOwnershipStructOutput[]]>;

    getPoolSummary(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPoolUserSummary(
      comptroller: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'getPoolUsersWithData(address[],uint256)'(
      comptrollers: PromiseOrValue<string>[],
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    'getPoolUsersWithData(address,uint256)'(
      comptroller: PromiseOrValue<string>,
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPoolsBySupplier(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    getPoolsBySupplierWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPublicPoolUsersWithData(
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getPublicPoolsWithData(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    getUserSummary(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;

    getWhitelistedPoolsByAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    getWhitelistedPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<ContractTransaction>;
  };

  directory(overrides?: CallOverrides): Promise<string>;

  getPoolAssetsWithData(
    comptroller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPoolOwnership(
    comptroller: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[string, boolean, boolean, FusePoolLens.CTokenOwnershipStructOutput[]]>;

  getPoolSummary(
    comptroller: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPoolUserSummary(
    comptroller: PromiseOrValue<string>,
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'getPoolUsersWithData(address[],uint256)'(
    comptrollers: PromiseOrValue<string>[],
    maxHealth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  'getPoolUsersWithData(address,uint256)'(
    comptroller: PromiseOrValue<string>,
    maxHealth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPoolsByAccountWithData(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPoolsBySupplier(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

  getPoolsBySupplierWithData(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPublicPoolUsersWithData(
    maxHealth: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getPublicPoolsWithData(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

  getUserSummary(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  getWhitelistedPoolsByAccount(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

  getWhitelistedPoolsByAccountWithData(
    account: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    directory(overrides?: CallOverrides): Promise<string>;

    getPoolAssetsWithData(
      comptroller: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<FusePoolLens.FusePoolAssetStructOutput[]>;

    getPoolOwnership(
      comptroller: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[string, boolean, boolean, FusePoolLens.CTokenOwnershipStructOutput[]]>;

    getPoolSummary(
      comptroller: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, string[], string[]]>;

    getPoolUserSummary(
      comptroller: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber]>;

    'getPoolUsersWithData(address[],uint256)'(
      comptrollers: PromiseOrValue<string>[],
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[FusePoolLens.FusePoolUserStructOutput[][], BigNumber[], BigNumber[]]>;

    'getPoolUsersWithData(address,uint256)'(
      comptroller: PromiseOrValue<string>,
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[FusePoolLens.FusePoolUserStructOutput[], BigNumber, BigNumber]>;

    getPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [
        BigNumber[],
        FusePoolDirectory.FusePoolStructOutput[],
        BigNumber[],
        BigNumber[],
        string[][],
        string[][],
        boolean[],
      ]
    >;

    getPoolsBySupplier(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    getPoolsBySupplierWithData(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [
        BigNumber[],
        FusePoolDirectory.FusePoolStructOutput[],
        BigNumber[],
        BigNumber[],
        string[][],
        string[][],
        boolean[],
      ]
    >;

    getPublicPoolUsersWithData(
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[string[], FusePoolLens.FusePoolUserStructOutput[][], BigNumber[], BigNumber[], boolean[]]>;

    getPublicPoolsWithData(
      overrides?: CallOverrides,
    ): Promise<
      [
        BigNumber[],
        FusePoolDirectory.FusePoolStructOutput[],
        BigNumber[],
        BigNumber[],
        string[][],
        string[][],
        boolean[],
      ]
    >;

    getUserSummary(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber, boolean]>;

    getWhitelistedPoolsByAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber[], FusePoolDirectory.FusePoolStructOutput[]]>;

    getWhitelistedPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<
      [
        BigNumber[],
        FusePoolDirectory.FusePoolStructOutput[],
        BigNumber[],
        BigNumber[],
        string[][],
        string[][],
        boolean[],
      ]
    >;
  };

  filters: {};

  estimateGas: {
    directory(overrides?: CallOverrides): Promise<BigNumber>;

    getPoolAssetsWithData(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPoolOwnership(comptroller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getPoolSummary(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPoolUserSummary(
      comptroller: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'getPoolUsersWithData(address[],uint256)'(
      comptrollers: PromiseOrValue<string>[],
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    'getPoolUsersWithData(address,uint256)'(
      comptroller: PromiseOrValue<string>,
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPoolsBySupplier(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getPoolsBySupplierWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPublicPoolUsersWithData(
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getPublicPoolsWithData(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

    getUserSummary(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;

    getWhitelistedPoolsByAccount(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getWhitelistedPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    directory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolAssetsWithData(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPoolOwnership(comptroller: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolSummary(
      comptroller: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPoolUserSummary(
      comptroller: PromiseOrValue<string>,
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'getPoolUsersWithData(address[],uint256)'(
      comptrollers: PromiseOrValue<string>[],
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    'getPoolUsersWithData(address,uint256)'(
      comptroller: PromiseOrValue<string>,
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPoolsBySupplier(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPoolsBySupplierWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPublicPoolUsersWithData(
      maxHealth: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getPublicPoolsWithData(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<PopulatedTransaction>;

    getUserSummary(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;

    getWhitelistedPoolsByAccount(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getWhitelistedPoolsByAccountWithData(
      account: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> },
    ): Promise<PopulatedTransaction>;
  };
}
