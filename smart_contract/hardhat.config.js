// https://eth-ropsten.alchemyapi.io/v2/9sNxkBfvddQT7sMiz5JEY_b0-1pxeAsJ - Alchemy key

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/9sNxkBfvddQT7sMiz5JEY_b0-1pxeAsJ',
      accounts: ['1728967b847b261b16308a8228c73ad0b309d76d450869142870e1e98badfa30']
    }
  }
}

