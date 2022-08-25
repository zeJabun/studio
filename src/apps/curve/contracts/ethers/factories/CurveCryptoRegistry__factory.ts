/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers';
import type { Provider } from '@ethersproject/providers';
import type { CurveCryptoRegistry, CurveCryptoRegistryInterface } from '../CurveCryptoRegistry';

const _abi = [
  {
    name: 'PoolAdded',
    inputs: [
      {
        name: 'pool',
        type: 'address',
        indexed: true,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    name: 'PoolRemoved',
    inputs: [
      {
        name: 'pool',
        type: 'address',
        indexed: true,
      },
    ],
    anonymous: false,
    type: 'event',
  },
  {
    stateMutability: 'nonpayable',
    type: 'constructor',
    inputs: [
      {
        name: '_address_provider',
        type: 'address',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'find_pool_for_coins',
    inputs: [
      {
        name: '_from',
        type: 'address',
      },
      {
        name: '_to',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'find_pool_for_coins',
    inputs: [
      {
        name: '_from',
        type: 'address',
      },
      {
        name: '_to',
        type: 'address',
      },
      {
        name: 'i',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_n_coins',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_coins',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address[8]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_decimals',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256[8]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_gauges',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address[10]',
      },
      {
        name: '',
        type: 'int128[10]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_balances',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256[8]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_virtual_price_from_lp_token',
    inputs: [
      {
        name: '_token',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_A',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_D',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_gamma',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_fees',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256[4]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_admin_balances',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256[8]',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_coin_indices',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
      {
        name: '_from',
        type: 'address',
      },
      {
        name: '_to',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_pool_name',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'string',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_coin_swap_count',
    inputs: [
      {
        name: '_coin',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_coin_swap_complement',
    inputs: [
      {
        name: '_coin',
        type: 'address',
      },
      {
        name: '_index',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'add_pool',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
      {
        name: '_n_coins',
        type: 'uint256',
      },
      {
        name: '_lp_token',
        type: 'address',
      },
      {
        name: '_gauge',
        type: 'address',
      },
      {
        name: '_zap',
        type: 'address',
      },
      {
        name: '_decimals',
        type: 'uint256',
      },
      {
        name: '_name',
        type: 'string',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'remove_pool',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'set_liquidity_gauges',
    inputs: [
      {
        name: '_pool',
        type: 'address',
      },
      {
        name: '_liquidity_gauges',
        type: 'address[10]',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'nonpayable',
    type: 'function',
    name: 'batch_set_liquidity_gauges',
    inputs: [
      {
        name: '_pools',
        type: 'address[10]',
      },
      {
        name: '_liquidity_gauges',
        type: 'address[10]',
      },
    ],
    outputs: [],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'address_provider',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'pool_list',
    inputs: [
      {
        name: 'arg0',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'pool_count',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'coin_count',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_coin',
    inputs: [
      {
        name: 'arg0',
        type: 'uint256',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_pool_from_lp_token',
    inputs: [
      {
        name: 'arg0',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_lp_token',
    inputs: [
      {
        name: 'arg0',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'get_zap',
    inputs: [
      {
        name: 'arg0',
        type: 'address',
      },
    ],
    outputs: [
      {
        name: '',
        type: 'address',
      },
    ],
  },
  {
    stateMutability: 'view',
    type: 'function',
    name: 'last_updated',
    inputs: [],
    outputs: [
      {
        name: '',
        type: 'uint256',
      },
    ],
  },
];

export class CurveCryptoRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): CurveCryptoRegistryInterface {
    return new utils.Interface(_abi) as CurveCryptoRegistryInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): CurveCryptoRegistry {
    return new Contract(address, _abi, signerOrProvider) as CurveCryptoRegistry;
  }
}
