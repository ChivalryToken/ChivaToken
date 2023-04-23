const { expect } = require("chai");
const { ethers } = require("hardhat");
const { MAX_TRANSFER_AMOUNT } = require("./helpers/constants");



describe("ChivalryToken", function () {
  let ChivalryToken, chivalryToken, owner, user1, user2;
  const MAX_HOLDING_AMOUNT = ethers.BigNumber.from("77777777").mul(ethers.BigNumber.from(10).pow(18));
  const MIN_VOTE_COUNT = ethers.BigNumber.from("100");
  const TEN_DECIMALS = ethers.BigNumber.from(10).pow(18);

  beforeEach(async () => {
    ChivalryToken = await ethers.getContractFactory("ChivalryToken");
    [owner, user1, user2, _] = await ethers.getSigners();
    chivalryToken = await ChivalryToken.deploy("0x5FbDB2315678afecb367f032d93F642f64180aa3");
    await chivalryToken.deployed();
  });

  it("should deploy the ChivalryToken contract with the correct token name and symbol", async () => {
    expect(await chivalryToken.name()).to.equal("ChivalryToken");
    expect(await chivalryToken.symbol()).to.equal("CHIVA");
  });

  it("should allow eligible users to nominate themselves as knights", async () => {
    // Transfer enough tokens to user1 to be eligible for nomination
    await chivalryToken.connect(owner).transfer(user1.address, MAX_TRANSFER_AMOUNT.div(2));
  
    // User1 nominates themselves as a knight
    await chivalryToken.connect(user1).nominateKnight();
  
    // Check if user1 is nominated as a knight
    const nominatedKnights = await chivalryToken.getNominees();
    expect(nominatedKnights).to.include(user1.address);
  });

  // Add more test cases here
});
