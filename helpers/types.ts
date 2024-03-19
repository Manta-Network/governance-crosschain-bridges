export interface SymbolMap<T> {
  [symbol: string]: T;
}

export type eNetwork =
  | eEthereumNetwork
  | ePolygonNetwork
  | eXDaiNetwork
  | eArbitrumNetwork
  | eOptimismNetwork
  | eMantaNetwork;

export enum eEthereumNetwork {
  goerli = 'goerli',
  main = 'main',
  coverage = 'coverage',
  hardhat = 'hardhat',
  tenderlyMain = 'tenderlyMain',
  sepolia = 'sepolia',
}

export enum ePolygonNetwork {
  matic = 'matic',
  mumbai = 'mumbai',
}

export enum eXDaiNetwork {
  xdai = 'xdai',
}

export enum eArbitrumNetwork {
  arbitrum = 'arbitrum',
  arbitrumTestnet = 'arbitrum-testnet',
}

export enum eOptimismNetwork {
  main = 'optimism',
  testnet = 'optimisticSepolia',
}

export enum eMantaNetwork {
  main = 'manta',
  testnet = 'mantaSepolia',
}

export enum EthereumNetworkNames {
  goerli = 'goerli',
  main = 'main',
  matic = 'matic',
  mumbai = 'mumbai',
  xdai = 'xdai',
  sepolia = 'sepolia',
}

export type tEthereumAddress = string;

export type iParamsPerNetwork<T> =
  | iEthereumParamsPerNetwork<T>
  | iPolygonParamsPerNetwork<T>
  | iXDaiParamsPerNetwork<T>
  | iArbitrumParamsPerNetwork<T>
  | iOptimismParamsPerNetwork<T>
  | iMantaParamsPerNetwork<T>;

export interface iParamsPerNetworkAll<T>
  extends iEthereumParamsPerNetwork<T>,
    iPolygonParamsPerNetwork<T>,
    iXDaiParamsPerNetwork<T> {}

export interface iEthereumParamsPerNetwork<eNetwork> {
  [eEthereumNetwork.coverage]: eNetwork;
  [eEthereumNetwork.sepolia]: eNetwork;
  [eEthereumNetwork.goerli]: eNetwork;
  [eEthereumNetwork.main]: eNetwork;
  [eEthereumNetwork.hardhat]: eNetwork;
  [eEthereumNetwork.tenderlyMain]: eNetwork;
}

export interface iPolygonParamsPerNetwork<T> {
  [ePolygonNetwork.matic]: T;
  [ePolygonNetwork.mumbai]: T;
}

export interface iXDaiParamsPerNetwork<T> {
  [eXDaiNetwork.xdai]: T;
}

export interface iArbitrumParamsPerNetwork<T> {
  [eArbitrumNetwork.arbitrum]: T;
  [eArbitrumNetwork.arbitrumTestnet]: T;
}

export interface iOptimismParamsPerNetwork<T> {
  [eOptimismNetwork.main]: T;
  [eOptimismNetwork.testnet]: T;
}

export interface iMantaParamsPerNetwork<T> {
  [eMantaNetwork.main]: T;
  [eMantaNetwork.testnet]: T;
}

export interface ObjectString {
  [key: string]: string;
}
