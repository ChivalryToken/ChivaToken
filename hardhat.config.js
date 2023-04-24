require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

const { GOERLI_TESTNET_PRIVATE_KEY, ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY, ETHERSCAN_API_KEY } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      chainId: 1337
    },
    arbitrumGoerli: {
      url: "https://goerli-rollup.arbitrum.io/rpc",
      chainId: 421613,
      accounts: [GOERLI_TESTNET_PRIVATE_KEY]
    },
    arbitrumOne: {
      url: "https://arb1.arbitrum.io/rpc",
      accounts: [ARBITRUM_MAINNET_TEMPORARY_PRIVATE_KEY]
    }
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY
  }
};