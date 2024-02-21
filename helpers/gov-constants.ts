export const ADDRESSES = {
  // The deployment process includes testing the deployed governance bridge via calling the
  // 'updateEthereumGovernanceExecutor' method. As the initial value for EthereumGovExecutor
  // is used test instance of Aragon Agent on mainnet. It will be replaced with the official
  // Lido Aragon Agent before usage.

  // Common
  ETHEREUM_GOV_EXECUTOR: '0x184d39300f2fa4419d04998e9c58cb5de586d879',

  // Optimism
  // https://docs.optimism.io/chain/addresses
  OVM_L1_MESSENGER_SEPOLIA: '0x58Cc85b8D04EA49cC6DBd3CbFFd00B4B8D6cb3ef',
  OVM_GUARDIAN: '0x0000000000000000000000000000000000000000',
  OVM_L2_MESSENGER: '0x4200000000000000000000000000000000000007',

  OVM_L1_MESSENGER_MAIN: '0x25ace71c97B33Cc4729CF772ae268934F7ab5fA1',

  // Arbitrum
  ARB_GUARDIAN: '0x0000000000000000000000000000000000000000',
  RETRYABLE_TICKET_TX_ADDRESS: '0x000000000000000000000000000000000000006E',
  INBOX_MAIN: '0x4Dbd4fc535Ac27206064B68FfCf827b0A60BAB3f',
  INBOX_RINKEBY: '0x578BAde599406A8fE3d24Fd7f7211c0911F5B29e',
};

export const CONSTANTS = {
  DELAY: 0,
  GRACE_PERIOD: 86400, // 24 hours
  MIN_DELAY: 0,
  // We can't use there max delay equal to 0 because BridgeExecutorBase
  // contract creation fails if minimumDelay >= maximumDelay
  MAX_DELAY: 1,
};
