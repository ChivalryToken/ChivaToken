const { ethers } = require('hardhat');
require('dotenv').config();

async function main() {
  const nftAddress = process.env.NFT_ADDRESS;
  const [deployer] = await ethers.getSigners();
  console.log(`Deploying contract with the account: ${deployer.address}`);

  const ChivalryToken = await ethers.getContractFactory('ChivalryToken');
  const chivalryToken = await ChivalryToken.deploy(nftAddress);

  console.log(`ChivalryToken contract deployed to address: ${chivalryToken.address}`);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
});