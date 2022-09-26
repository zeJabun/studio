/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type { TypedEventFilter, TypedEvent, TypedListener, OnEvent, PromiseOrValue } from './common';

export interface IPriceFeedsInterface extends utils.Interface {
  functions: {
    'amountInEth(address,uint256)': FunctionFragment;
    'checkPriceDisagreement(address,address,uint256,uint256,uint256)': FunctionFragment;
    'getCurrentMargin(address,address,uint256,uint256)': FunctionFragment;
    'getCurrentMarginAndCollateralSize(address,address,uint256,uint256)': FunctionFragment;
    'getFastGasPrice(address)': FunctionFragment;
    'getMaxDrawdown(address,address,uint256,uint256,uint256)': FunctionFragment;
    'queryPrecision(address,address)': FunctionFragment;
    'queryRate(address,address)': FunctionFragment;
    'queryReturn(address,address,uint256)': FunctionFragment;
    'shouldLiquidate(address,address,uint256,uint256,uint256)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'amountInEth'
      | 'checkPriceDisagreement'
      | 'getCurrentMargin'
      | 'getCurrentMarginAndCollateralSize'
      | 'getFastGasPrice'
      | 'getMaxDrawdown'
      | 'queryPrecision'
      | 'queryRate'
      | 'queryReturn'
      | 'shouldLiquidate',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'amountInEth',
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'checkPriceDisagreement',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'getCurrentMargin',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'getCurrentMarginAndCollateralSize',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(functionFragment: 'getFastGasPrice', values: [PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'getMaxDrawdown',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;
  encodeFunctionData(
    functionFragment: 'queryPrecision',
    values: [PromiseOrValue<string>, PromiseOrValue<string>],
  ): string;
  encodeFunctionData(functionFragment: 'queryRate', values: [PromiseOrValue<string>, PromiseOrValue<string>]): string;
  encodeFunctionData(
    functionFragment: 'queryReturn',
    values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>],
  ): string;
  encodeFunctionData(
    functionFragment: 'shouldLiquidate',
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
    ],
  ): string;

  decodeFunctionResult(functionFragment: 'amountInEth', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'checkPriceDisagreement', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCurrentMargin', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getCurrentMarginAndCollateralSize', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getFastGasPrice', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'getMaxDrawdown', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queryPrecision', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queryRate', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'queryReturn', data: BytesLike): Result;
  decodeFunctionResult(functionFragment: 'shouldLiquidate', data: BytesLike): Result;

  events: {};
}

export interface IPriceFeeds extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPriceFeedsInterface;

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
    amountInEth(
      Token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { ethAmount: BigNumber }>;

    checkPriceDisagreement(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destAmount: PromiseOrValue<BigNumberish>,
      maxSlippage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { sourceToDestSwapRate: BigNumber }>;

    getCurrentMargin(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        currentMargin: BigNumber;
        collateralToLoanRate: BigNumber;
      }
    >;

    getCurrentMarginAndCollateralSize(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        currentMargin: BigNumber;
        collateralInEthAmount: BigNumber;
      }
    >;

    getFastGasPrice(payToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

    getMaxDrawdown(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      maintenanceMargin: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    queryPrecision(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { precision: BigNumber }>;

    queryRate(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; precision: BigNumber }>;

    queryReturn(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber] & { destAmount: BigNumber }>;

    shouldLiquidate(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      maintenanceMargin: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
  };

  amountInEth(
    Token: PromiseOrValue<string>,
    amount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  checkPriceDisagreement(
    sourceToken: PromiseOrValue<string>,
    destToken: PromiseOrValue<string>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    destAmount: PromiseOrValue<BigNumberish>,
    maxSlippage: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  getCurrentMargin(
    loanToken: PromiseOrValue<string>,
    collateralToken: PromiseOrValue<string>,
    loanAmount: PromiseOrValue<BigNumberish>,
    collateralAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber] & {
      currentMargin: BigNumber;
      collateralToLoanRate: BigNumber;
    }
  >;

  getCurrentMarginAndCollateralSize(
    loanToken: PromiseOrValue<string>,
    collateralToken: PromiseOrValue<string>,
    loanAmount: PromiseOrValue<BigNumberish>,
    collateralAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<
    [BigNumber, BigNumber] & {
      currentMargin: BigNumber;
      collateralInEthAmount: BigNumber;
    }
  >;

  getFastGasPrice(payToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

  getMaxDrawdown(
    loanToken: PromiseOrValue<string>,
    collateralToken: PromiseOrValue<string>,
    loanAmount: PromiseOrValue<BigNumberish>,
    collateralAmount: PromiseOrValue<BigNumberish>,
    maintenanceMargin: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  queryPrecision(
    sourceToken: PromiseOrValue<string>,
    destToken: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  queryRate(
    sourceToken: PromiseOrValue<string>,
    destToken: PromiseOrValue<string>,
    overrides?: CallOverrides,
  ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; precision: BigNumber }>;

  queryReturn(
    sourceToken: PromiseOrValue<string>,
    destToken: PromiseOrValue<string>,
    sourceAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  shouldLiquidate(
    loanToken: PromiseOrValue<string>,
    collateralToken: PromiseOrValue<string>,
    loanAmount: PromiseOrValue<BigNumberish>,
    collateralAmount: PromiseOrValue<BigNumberish>,
    maintenanceMargin: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  callStatic: {
    amountInEth(
      Token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    checkPriceDisagreement(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destAmount: PromiseOrValue<BigNumberish>,
      maxSlippage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getCurrentMargin(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        currentMargin: BigNumber;
        collateralToLoanRate: BigNumber;
      }
    >;

    getCurrentMarginAndCollateralSize(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<
      [BigNumber, BigNumber] & {
        currentMargin: BigNumber;
        collateralInEthAmount: BigNumber;
      }
    >;

    getFastGasPrice(payToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getMaxDrawdown(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      maintenanceMargin: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    queryPrecision(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    queryRate(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<[BigNumber, BigNumber] & { rate: BigNumber; precision: BigNumber }>;

    queryReturn(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    shouldLiquidate(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      maintenanceMargin: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    amountInEth(
      Token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    checkPriceDisagreement(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destAmount: PromiseOrValue<BigNumberish>,
      maxSlippage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getCurrentMargin(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getCurrentMarginAndCollateralSize(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    getFastGasPrice(payToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    getMaxDrawdown(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      maintenanceMargin: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    queryPrecision(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    queryRate(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    queryReturn(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    shouldLiquidate(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      maintenanceMargin: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    amountInEth(
      Token: PromiseOrValue<string>,
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    checkPriceDisagreement(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      destAmount: PromiseOrValue<BigNumberish>,
      maxSlippage: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getCurrentMargin(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getCurrentMarginAndCollateralSize(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    getFastGasPrice(payToken: PromiseOrValue<string>, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getMaxDrawdown(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      maintenanceMargin: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    queryPrecision(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    queryRate(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    queryReturn(
      sourceToken: PromiseOrValue<string>,
      destToken: PromiseOrValue<string>,
      sourceAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    shouldLiquidate(
      loanToken: PromiseOrValue<string>,
      collateralToken: PromiseOrValue<string>,
      loanAmount: PromiseOrValue<BigNumberish>,
      collateralAmount: PromiseOrValue<BigNumberish>,
      maintenanceMargin: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}