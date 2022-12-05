// https://eth-sepolia.g.alchemy.com/v2/VH4ULRo_jP1rXXFBCY-uBaO8M1MwijMb

require('@nomicfoundation/hardhat-chai-matchers')

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/VH4ULRo_jP1rXXFBCY-uBaO8M1MwijMb',
      accounts: [ 'e40c1a8e74f48fd16ec87fbb60b5b86a069a30c810720125a2273756b061bdab' ]
    }
  }
}